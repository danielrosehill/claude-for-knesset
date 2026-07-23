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
- Node.js / `npx` (for the bundled CBS statistics MCP server, below)
- A repo laid out per the pipeline (see `PIPELINE.md` in the parent repo) — the commands will create the structure as they go

## Bundled MCP server: Israeli CBS statistics

The plugin ships with an MCP server configuration (`.mcp.json`) for [israel-statistics-mcp](https://github.com/reuvenaor/israel-statistics-mcp) (MIT, by Reuven Naor), which exposes the Israeli Central Bureau of Statistics (הלמ"ס) public API as tools: CPI and sub-index search, catalog navigation, historical index series, housing-market indices, and the official CBS inflation/linkage calculator. No API key is required — the CBS API is free and public.

This means the `/research-policy` stage can pull primary CBS index data directly instead of relying on secondhand citations — which is exactly the source hierarchy the `policy-methodology` skill mandates (CBS first).

## Commands

| Command | Stage | What it does |
|---------|-------|--------------|
| `/capture-testimony <raw>` | 1 | Cleans a raw dictated account into a dated, redacted testimony file; extracts research hooks |
| `/research-policy <area>` | 2 | Builds the evidence base: problem statement, legislation review, comparative case studies, sourced data annex, domestic record |
| `/draft-paper <area>` | 3 | Synthesizes research into a Typst policy paper (house template) and compiles the PDF |
| `/update-platform` | 4 | Rolls completed papers into the program for government, with cross-plank coherence and fiscal checks |
| `/compare-parties <area>` | — | Builds a policy comparison matrix: every party's position and record versus ours, and the resulting gap analysis |

## Skills

| Skill | What it governs |
|-------|-----------------|
| `policy-methodology` | The house rulebook: evidence standards, source hierarchy (CBS → Bank of Israel → Knesset RIC → State Comptroller → OECD → academia → journalism), citation discipline, testimony-handling ethics, Typst house style. Every command defers to it. |
| `comparative-policy-research` | How to research other jurisdictions: selecting comparators for mechanism rather than prestige, per-country case studies covering the instrument, the adoption politics, the measured results, the failures, and an argued transferability verdict for Israel. Mandates at least one instructive failure. |
| `domestic-policy-research` | How to research the Israeli record: bills that fell as well as those that passed, government decisions, shelved commission reports, pilots, repeals, Comptroller and Knesset RIC findings — ending in a named veto player and the recurring failure mode our proposal has to survive. |

The two research skills are the two halves of stage 2: *what has worked elsewhere* and *what has already failed here*.

## Design principles

- **Testimony is evidence of experience, not prevalence** — stories motivate; data justifies.
- **No invented numbers** — unverifiable claims are marked and block the pipeline.
- **No promise without a mechanism** — every recommendation names the legal instrument, the administrator, the cost, and who pays.
- **Steelmanned trade-offs** — every paper argues the opposition's best case, not its worst.
