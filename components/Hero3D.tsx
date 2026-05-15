"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

export default function Hero3D() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="w-full h-[340px] md:h-[480px] lg:h-[520px] xl:h-[600px]"
      style={{ perspective: 1200 }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
        <group>
          <mesh castShadow receiveShadow rotation={[0.6, 0.6, 0]}>
            <boxGeometry args={[2.2, 2.2, 2.2]} />
            <meshStandardMaterial
              color="#f5e9d7"
              metalness={0.3}
              roughness={0.25}
              envMapIntensity={0.7}
            />
          </mesh>
        </group>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </motion.div>
  );
}
