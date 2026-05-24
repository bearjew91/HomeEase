// Dumps the Hebrew message catalog as flat dot-notation JSON wrapped in a
// markdown prompt aimed at modern Israeli startup tone (Monday/Wolt/Lemonade).
// Paste the output into ChatGPT, get back a JSON object with the same keys,
// save it as `hebrew-review.response.json`, then run `apply-hebrew-review.mts`.

import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { messages } from '../lib/i18n/messages.ts'

type Json = string | number | boolean | null | Json[] | { [k: string]: Json }

function flatten(obj: Json, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {}
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      const path = prefix ? `${prefix}.${k}` : k
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        Object.assign(out, flatten(v as Json, path))
      } else if (typeof v === 'string') {
        out[path] = v
      }
    }
  }
  return out
}

const flat = flatten(messages.he as Json)

const prompt = `# Hebrew copy review — HomeEase

You are reviewing the Hebrew UI strings for **HomeEase**, an app that helps Israelis plan for the subsidized-housing lottery (מחיר למשתכן, דיור בהישג יד) — eligibility, budgeting, mortgage, post-win roadmap.

## Tone
Write like a modern Israeli startup — Monday, Wolt, Lemonade, Riskified. **Not** like a government form or a bank.
- Conversational, warm, confident. Speak to the user as a peer, not an applicant.
- Short sentences. Active voice. No bureaucratic stiffness (avoid "הינך", "יש לבצע", "במידה ו").
- Use natural spoken phrasing where it fits ("נראה לך מסובך? זה לא") but stay credible — this is money/legal-adjacent.
- Numbers and finance terms: precise, but the *framing* around them is friendly.
- Keep brand name **HomeEase** in English; localize everything else.
- Preserve any \`{placeholders}\` exactly — they're interpolation tokens, don't translate them.

## What to do
- Improve clarity, warmth, and rhythm. Cut filler.
- Fix anything that sounds like a machine translation or a clause from a Tabu form.
- Keep meaning intact. If a string is genuinely ambiguous, leave it as-is and add a comment in a separate \`_notes\` field.
- Keep the same JSON shape. Return **only** the revised JSON object, no prose around it.

## Strings
\`\`\`json
${JSON.stringify(flat, null, 2)}
\`\`\`

## Output format
Return a JSON object with **the exact same keys**, with revised Hebrew values. Example:
\`\`\`json
{
  "common.brand": "HomeEase",
  "common.tagline": "תכנון לזכייה בדירה",
  ...
}
\`\`\`
`

const outPath = resolve('hebrew-review.md')
writeFileSync(outPath, prompt, 'utf8')
console.log(`Wrote ${outPath} (${Object.keys(flat).length} keys)`)
