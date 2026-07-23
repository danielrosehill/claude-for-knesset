---
name: policy-methodology
description: House methodology for evidence-based policy development — evidence standards, source hierarchy, citation discipline, testimony handling, and the think-tank writing style. Load whenever cleaning testimony, researching a policy area, drafting a policy paper, or updating the program for government.
---

# Policy development methodology

This project turns lived experience into a credible program for government. Its only asset is credibility; these rules protect it.

## The pipeline

Four stages, each with a gate (full detail in the repo's `PIPELINE.md`):

1. **Testimony** (`testimonies/`) — dated, cleaned, redacted first-person accounts. Raw material never committed.
2. **Research** (`policy/<area>/research/`) — problem statement, Israeli law review, comparative review, data annex.
3. **Paper** (`policy/<area>/paper/`) — Typst + PDF using `templates/policy-paper.typ`.
4. **Platform** (`platform/program-for-government.md`) — the distilled meta-proposal.

Each policy area has a stage tracker at `policy/<area>/README.md`. Keep it current.

## Evidence standards

- **Never invent a number.** If you cannot find a source, write `[UNVERIFIED — verify before publication]`. Unverified claims block stage advancement.
- **Source hierarchy** (prefer higher): CBS / הלשכה המרכזית לסטטיסטיקה → Bank of Israel → Knesset Research and Information Center (המרכז למחקר ומידע) → State Comptroller (מבקר המדינה) → OECD and international official statistics → peer-reviewed research → quality journalism (last resort, always flagged).
- **Legislation is cited precisely**: official name (Hebrew and English), year, amendment number, specific sections. E.g. "the Fair Rental Law — Amendment No. 1 (2017) to the Rental and Lending Law, 5731-1971, §25(b)ff." Verify section numbers against the actual text; do not cite provisions from memory.
- **Testimony is evidence of experience, not prevalence.** One household's story proves something *can* happen; only data proves it is *common*. Papers must keep this distinction explicit.
- **Steelman opposing evidence.** If data complicates the narrative, it goes in the main text, not a footnote. Every proposal names its losers and answers the strongest objection.
- **Costs are order-of-magnitude honest.** A costed proposal states the estimate's basis and confidence. "Fiscally neutral" requires showing the offset.

## Testimony handling

- Cleaning removes disfluencies and transcription artifacts; it **never adds, softens, strengthens, or renumbers** a claim. Ambiguity in the raw stays ambiguous or gets resolved by asking the author.
- Redact private individuals' names, exact addresses, third-party identifying details. Institutions and public figures stay named.
- Frontmatter schema: `title`, `date` (YYYY-MM-DD), `policy-area` (kebab-case, matches `policy/<area>/`), `status` (`cleaned` | `synthesized-into-research`), `source` (one line, where the raw is retained privately).

## Writing style (papers and platform)

- Think-tank register: measured, concrete, mechanism-first. Anger belongs in the testimony; the paper's force comes from evidence.
- No promise without a mechanism: every recommendation says what legal instrument changes, who administers it, what it costs, and who pays.
- Distinguish what needs primary legislation from what a minister can do by regulation tomorrow.
- Hebrew terms on first use: transliteration + Hebrew + gloss, e.g. "Arnona (ארנונה, municipal property tax)".
- Footnote every factual claim. A reader should be able to check anything without asking.

## Typst conventions

- Import from `templates/policy-paper.typ`: `policy-paper` (show rule), `#recommendation[...]`, `#tradeoff(objection, response)`.
- Paper numbers are sequential `PP-NNN` across the whole project.
- Must compile warning-free with `typst compile`; visually inspect page 1 via PNG render before committing. Commit both `.typ` and `.pdf`.
