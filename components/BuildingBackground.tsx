"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const MODEL_URL = '/models/tower.glb';

// ─── Sign/label control ─────────────────────────────────────────────────
// Add lowercased substrings of mesh names you want HIDDEN from the scene.
// e.g. 'marina', 'sign', 'logo', 'text01'. Case-insensitive substring match.
const HIDE_MESH_PATTERNS: string[] = [
  // 'marina',
];

// Set to true once to print every mesh name to the browser console.
// Use those names to populate HIDE_MESH_PATTERNS above, then flip back to false.
const LOG_MESH_NAMES = false;

useGLTF.preload(MODEL_URL);

function TowerModel({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { scene } = useGLTF(MODEL_URL);

  const prepared = useMemo(() => {
    const root = scene.clone(true);

    // Fit the model to a known size so our camera framing works regardless of source units.
    const box = new THREE.Box3().setFromObject(root);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const targetHeight = 9;
    const scale = targetHeight / Math.max(size.y, 0.0001);
    root.scale.setScalar(scale);
    root.position.sub(center.multiplyScalar(scale));

    // Walk materials: make glass actually shine, push window emissives so Bloom catches them.
    const seenNames: string[] = [];
    root.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      obj.castShadow = false;
      obj.receiveShadow = false;

      const name = (obj.name || '').toLowerCase();
      if (LOG_MESH_NAMES) seenNames.push(obj.name || '(unnamed)');

      // Hide meshes whose name contains any blacklisted substring.
      if (HIDE_MESH_PATTERNS.some((p) => p && name.includes(p.toLowerCase()))) {
        obj.visible = false;
        return;
      }
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((mat) => {
        if (!mat) return;
        const m = mat as THREE.MeshStandardMaterial;
        const name = (m.name || '').toLowerCase();
        const isGlass =
          name.includes('glass') ||
          name.includes('window') ||
          name.includes('glas') ||
          (m.transparent && (m.opacity ?? 1) < 0.95);

        if (isGlass) {
          m.metalness = 0.9;
          m.roughness = 0.05;
          m.envMapIntensity = 1.8;
          if (m.emissive) {
            m.emissive = new THREE.Color('#ffb968');
            m.emissiveIntensity = 1.4;
          }
        } else {
          m.envMapIntensity = Math.max(m.envMapIntensity ?? 1, 0.9);
        }

        if (m.emissive && m.emissiveIntensity > 0 && !isGlass) {
          m.emissiveIntensity = Math.max(m.emissiveIntensity, 1.2);
        }
        m.needsUpdate = true;
      });
    });

    if (LOG_MESH_NAMES && seenNames.length) {
      // eslint-disable-next-line no-console
      console.log('[BuildingBackground] mesh names:', seenNames);
    }

    return root;
  }, [scene]);

  useFrame(() => {
    if (!groupRef.current) return;
    const p = scrollRef.current;
    const k = 0.028;
    const tR = -0.25 + p * Math.PI * 1.6;
    const tY = 0.4 - p * 4.2;
    const tS = 1.0 - p * 0.06;

    groupRef.current.rotation.y += (tR - groupRef.current.rotation.y) * k;
    groupRef.current.position.y += (tY - groupRef.current.position.y) * k;
    const cs = groupRef.current.scale.x;
    groupRef.current.scale.setScalar(cs + (tS - cs) * k);
  });

  return (
    <group ref={groupRef} position={[1.0, 0.4, 0]} rotation={[0.03, -0.25, 0]}>
      <primitive object={prepared} />
    </group>
  );
}

function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 6, 1]} />
      <meshStandardMaterial color="#0a1218" />
    </mesh>
  );
}

function useIsDesktop() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setOk(mq.matches);
    const handler = (e: MediaQueryListEvent) => setOk(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return ok;
}

export default function BuildingBackground() {
  const isDesktop = useIsDesktop();
  const scrollRef = useRef(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      scrollRef.current = p;
      if (wrapRef.current) {
        wrapRef.current.style.opacity = String(Math.max(0.25, 0.95 - p * 0.7));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={wrapRef}
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.95 }}
      >
        <Canvas
          camera={{ position: [0, 0, 11], fov: 42 }}
          gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
          style={{ background: 'transparent' }}
        >
          <color attach="background" args={['#0b1622']} />

          <directionalLight position={[10, 18, 6]} intensity={2.2} color="#ffd28a" />
          <directionalLight position={[-7, 5, -2]} intensity={0.6} color="#88b0d8" />
          <ambientLight intensity={0.25} color="#203040" />

          <Suspense fallback={<Fallback />}>
            <Environment resolution={256} frames={1}>
              {/* Warm golden-hour sun, low on the horizon */}
              <Lightformer
                form="rect"
                intensity={6}
                color="#ffb066"
                position={[8, 4, 6]}
                scale={[10, 6, 1]}
                target={[0, 0, 0]}
              />
              {/* Cool sky dome from above */}
              <Lightformer
                form="rect"
                intensity={1.6}
                color="#88b8e8"
                position={[0, 10, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[20, 20, 1]}
              />
              {/* Cool back/rim from opposite side for window highlights */}
              <Lightformer
                form="rect"
                intensity={2.2}
                color="#5078a8"
                position={[-8, 3, -6]}
                scale={[10, 8, 1]}
                target={[0, 0, 0]}
              />
              {/* Ground bounce — warm city glow */}
              <Lightformer
                form="rect"
                intensity={1.2}
                color="#d86820"
                position={[0, -6, 4]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[14, 14, 1]}
              />
            </Environment>
            <TowerModel scrollRef={scrollRef} />
          </Suspense>

          <EffectComposer>
            <Bloom intensity={0.9} luminanceThreshold={0.55} luminanceSmoothing={0.2} mipmapBlur />
            <Vignette eskil={false} offset={0.2} darkness={0.65} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* CC-BY attribution required by the model license */}
      <div
        style={{
          position: 'fixed',
          bottom: 6,
          right: 10,
          zIndex: 1,
          fontSize: 10,
          color: 'rgba(255,255,255,0.45)',
          pointerEvents: 'auto',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        Tower model: &quot;Skyscraper Hotel Apartments Marina&quot; by{' '}
        <a
          href="https://sketchfab.com/asleshka"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          asleshka
        </a>{' '}
        (CC BY 4.0)
      </div>
    </>
  );
}
