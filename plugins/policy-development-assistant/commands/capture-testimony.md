---
description: Clean a raw dictated testimony into a dated, redacted testimony file (stage 1 of the pipeline)
argument-hint: <path to raw file in testimonies/raw/, or paste the raw text>
---

Process a raw first-person testimony into a publishable record. Follow the `policy-methodology` skill's rules throughout.

Input: $ARGUMENTS — either a path to a raw file (typically in `testimonies/raw/`, which is gitignored) or the raw text pasted directly.

## Steps

1. **Read the raw material.** If it's an audio file, transcribe it first (a transcription MCP tool may be available; otherwise ask the user for a transcript).
2. **Clean it**:
   - Remove disfluencies ("um", false starts, repeated words) and dictation artifacts (mis-transcribed terms — e.g. "18% fat" → "18% VAT"; garbled place names).
   - Preserve the first-person voice, tone, and **every factual claim exactly as stated**. Cleaning never adds claims, softens them, strengthens them, or changes numbers. If a passage is ambiguous, keep the ambiguity or ask.
   - Organize into sections with headings if the account is long.
3. **Redact**: remove or generalize full names of private individuals, exact addresses, and identifying details of third parties. Public figures and institutions stay named.
4. **Write the file** to `testimonies/YYYY-MM-DD-<policy-area>.md` (today's date unless the user specifies when the account was given), with this frontmatter:
   ```yaml
   ---
   title: <short title>
   date: YYYY-MM-DD
   policy-area: <kebab-case-area>
   status: cleaned
   source: <one line describing the raw source and where it is retained privately>
   ---
   ```
5. **Update the index table** in `testimonies/README.md`.
6. **Create or update the policy-area tracker** at `policy/<area>/README.md` with the pipeline stage table (see an existing area for the format) and mark stage 1 complete.
7. **Extract research hooks**: end by listing, in the tracker's "Scope notes" section, every claim in the testimony that needs quantification or legal verification at the research stage (statistics to find, laws to cite, comparative examples mentioned).

Never commit anything from `testimonies/raw/`. Confirm the raw file is covered by `.gitignore` before committing.
