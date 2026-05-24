// Reads ChatGPT's revised Hebrew JSON and rewrites the `he` block in
// lib/i18n/messages.ts in-place. Shows a diff summary before writing.
//
// Usage:
//   1. Save ChatGPT's JSON response as `hebrew-review.response.json` in repo root.
//   2. node --experimental-strip-types scripts/apply-hebrew-review.mts
//   3. git diff lib/i18n/messages.ts

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { messages } from '../lib/i18n/messages.ts'

const responsePath = resolve('hebrew-review.response.json')
const raw = readFileSync(responsePath, 'utf8').trim()

// Allow either a bare JSON object or one wrapped in ```json fences.
const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/)
const jsonText = fenced ? fenced[1] : raw
const revised = JSON.parse(jsonText) as Record<string, string>

function setPath(obj: Record<string, any>, path: string, value: string) {
  const parts = path.split('.')
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    cur = cur[parts[i]]
    if (!cur) throw new Error(`Missing path segment: ${parts.slice(0, i + 1).join('.')}`)
  }
  const leaf = parts[parts.length - 1]
  if (typeof cur[leaf] !== 'string') {
    throw new Error(`Path ${path} is not a string in current catalog`)
  }
  cur[leaf] = value
}

function getPath(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj)
}

// Build a working copy of `he` with revisions applied.
const heCopy = JSON.parse(JSON.stringify(messages.he))
let changed = 0
let skipped = 0
const skippedKeys: string[] = []

for (const [path, value] of Object.entries(revised)) {
  if (typeof value !== 'string') continue
  const current = getPath(messages.he, path)
  if (current === undefined) {
    skipped++
    skippedKeys.push(path)
    continue
  }
  if (current !== value) {
    setPath(heCopy, path, value)
    changed++
  }
}

console.log(`Revised ${changed} strings, skipped ${skipped} unknown keys`)
if (skippedKeys.length) {
  console.log('Skipped keys (not present in current catalog):')
  for (const k of skippedKeys.slice(0, 20)) console.log('  -', k)
  if (skippedKeys.length > 20) console.log(`  …and ${skippedKeys.length - 20} more`)
}

// Re-serialize ONLY the `he` block back into messages.ts.
// Strategy: locate "  he: {" and the matching "  }," that closes it (we know
// it sits between two top-level locale entries in the messages object), then
// splice in the regenerated literal.
const filePath = resolve('lib/i18n/messages.ts')
const src = readFileSync(filePath, 'utf8')

const heStart = src.indexOf('\n  he: {')
if (heStart === -1) throw new Error('Could not find `  he: {` in messages.ts')

// Walk braces to find the matching close.
let depth = 0
let i = heStart + 1 // skip leading newline
let braceStart = -1
let braceEnd = -1
for (; i < src.length; i++) {
  const ch = src[i]
  if (ch === '{') {
    if (braceStart === -1) braceStart = i
    depth++
  } else if (ch === '}') {
    depth--
    if (depth === 0) {
      braceEnd = i
      break
    }
  }
}
if (braceEnd === -1) throw new Error('Failed to find closing brace for `he` block')

// Serialize heCopy as a TS object literal with 2-space indent, starting at col 2.
function serialize(value: any, indent: number): string {
  const pad = '  '.repeat(indent)
  const padInner = '  '.repeat(indent + 1)
  if (value === null) return 'null'
  if (typeof value === 'string') return JSON.stringify(value)
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (Array.isArray(value)) {
    const items = value.map((v) => `${padInner}${serialize(v, indent + 1)}`).join(',\n')
    return `[\n${items},\n${pad}]`
  }
  const entries = Object.entries(value).map(([k, v]) => {
    const keyOut = /^[A-Za-z_][A-Za-z0-9_]*$/.test(k) ? k : JSON.stringify(k)
    return `${padInner}${keyOut}: ${serialize(v, indent + 1)}`
  })
  return `{\n${entries.join(',\n')},\n${pad}}`
}

const newBlock = serialize(heCopy, 1) // indent level 1 = inside `messages` object
const before = src.slice(0, braceStart)
const after = src.slice(braceEnd + 1)
const out = `${before}${newBlock}${after}`
writeFileSync(filePath, out, 'utf8')
console.log(`Updated ${filePath}`)
