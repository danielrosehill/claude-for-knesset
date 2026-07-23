# Policy Development Assistant

A Claude Code plugin that turns first-person testimony into evidence-based, think-tank-quality policy papers — and ultimately a program for government.

Built for (and shipped with) the [Claude for Knesset](https://github.com/danielrosehill/claude-for-knesset) experiment, but the pipeline is generic: it works for any project that wants to develop policy from lived experience, grounded in official statistics and actual legislation, with a paper trail.

## Install

```
/plugin marketplace add danielrosehill/claude-for-knesset
/plugin install policy-development-assistant@claude-for-knesset
```

(Inside the claude-for-knesset repo itself the plugin is pre-enabled via `.claude/settings.json`.)

## Requirements

- [Typst](https://typst.app) on `PATH` (for compiling policy papers to PDF)
- A repo laid out per the pipeline (see `PIPELINE.md` in the parent repo) — the commands will create the structure as they go

## Commands

| Command | Stage | What it does |
|---------|-------|--------------|
| `/capture-testimony <raw>` | 1 | Cleans a raw dictated account into a dated, redacted testimony file; extracts research hooks |
| `/research-policy <area>` | 2 | Builds the evidence base: problem statement, legislation review, comparative review, sourced data annex |
| `/draft-paper <area>` | 3 | Synthesizes research into a Typst policy paper (house template) and compiles the PDF |
| `/update-platform` | 4 | Rolls completed papers into the program for government, with cross-plank coherence and fiscal checks |

## Skill

`policy-methodology` — the house rulebook: evidence standards, source hierarchy (CBS → Bank of Israel → Knesset RIC → State Comptroller → OECD → academia → journalism), citation discipline, testimony-handling ethics, and the Typst house style. All four commands defer to it.

## Design principles

- **Testimony is evidence of experience, not prevalence** — stories motivate; data justifies.
- **No invented numbers** — unverifiable claims are marked and block the pipeline.
- **No promise without a mechanism** — every recommendation names the legal instrument, the administrator, the cost, and who pays.
- **Steelmanned trade-offs** — every paper argues the opposition's best case, not its worst.
