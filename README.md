# Claude For Knesset 🇮🇱🤖

![A cheerful robot addressing a crowd from a campaign podium](./assets/cover.jpg)

*An AI-assisted political platform for a party that doesn't exist.*

## What is this?

Israel is heading into (yet another) election. Like many voters, I find myself feeling disenfranchised — let down by a political system that seems to produce slogans rather than substance, and parties whose "platforms" are often a page of vibes rather than a plan.

This repository is an experiment: **what would it look like to build a political platform properly?**

Working with [Claude](https://claude.com) (Anthropic's AI), the goal is to formulate a genuine, detailed political manifesto for Israel — one that is:

- **Researched** — grounded in actual data, comparative policy from other countries, and cited sources
- **Precise** — concrete proposals with mechanisms and costs, not aspirations
- **Coherent** — policies that fit together rather than a grab-bag of promises
- **Honest about trade-offs** — every policy has losers as well as winners; a serious platform says who they are

## What this is *not*

- ❌ A real political party (no, Claude is not running for Knesset)
- ❌ An endorsement of any existing party or bloc
- ❌ A claim that AI should make policy — the human sets the values and priorities; the AI helps with research, drafting, and stress-testing

Think of it as **civic engagement by other means**: instead of casting a blank protest ballot, writing down — rigorously — what a platform worth voting for would actually contain.

## Methodology

Policy is developed through a four-stage pipeline — from first-person testimony, through an evidence base (CBS data, actual legislation, comparative policy), to think-tank-style policy papers (Typst/PDF), and finally a rolled-up program for government. Full detail in [PIPELINE.md](./PIPELINE.md).

1. **Testimony** (`testimonies/`) — dated, cleaned first-person accounts; raw material stays private
2. **Research** (`policy/<area>/research/`) — problem statement with quantified data, review of existing Israeli legislation and its enforcement gap, comparative review of other countries, sourced statistical annex
3. **Paper** (`policy/<area>/paper/`) — a compiled policy paper with costed proposals and steelmanned trade-offs
4. **Platform** (`platform/`) — the program for government, distilled from the papers with cross-plank coherence and fiscal checks

Everything is version-controlled, so the platform's evolution — including changes of mind — is public history.

## Repository structure

```
testimonies/       Stage 1 — dated first-person accounts (raw/ is gitignored)
policy/<area>/     Stages 2–3 — research evidence base + Typst/PDF policy paper
platform/          Stage 4 — the program for government
context/           The election, the parties, and policy comparison matrices
templates/         Typst house template for policy papers
plugins/           The policy-development-assistant Claude Code plugin
PIPELINE.md        The methodology in full
```

## Positioning against the field

`context/` holds the political ground truth: the 2026 election, the outgoing 25th Knesset, the parties running, and — in `context/matrices/` — a policy comparison matrix per area, showing what every party proposes, what they did when they held the ministry, and where our proposals sit against theirs.

The matrices exist to make the platform falsifiable. A proposal that turns out to be already law, already promised by four other parties, or dead on arrival with a blocking bloc gets reframed or dropped. Our own column is rated on the same scale as everyone else's; where another party has the better instrument, the matrix says so.

## The plugin

The pipeline is automated by a Claude Code plugin shipped in this repo, **[policy-development-assistant](./plugins/policy-development-assistant/)**, with a command per stage (`/capture-testimony`, `/research-policy`, `/draft-paper`, `/update-platform`), a `policy-methodology` skill encoding the evidence standards, and a bundled MCP server ([israel-statistics-mcp](https://github.com/reuvenaor/israel-statistics-mcp)) giving Claude direct tool access to Israeli Central Bureau of Statistics (הלמ"ס) index data — no API key needed. Install it in your own project with:

```
/plugin marketplace add danielrosehill/claude-for-knesset
/plugin install policy-development-assistant@claude-for-knesset
```

## Policy areas

| Area | Stage |
|------|-------|
| [Rental market & tenancy law](./policy/rental-market/) | 1 — testimony captured |

## Contributing

This is a personal experiment, but it's a public repo for a reason. Issues and pull requests with corrections, better data, or counterarguments are welcome. Disagreement is especially welcome if it comes with sources.

## License & disclaimer

Content is provided as-is for discussion and educational purposes. Drafted collaboratively with AI assistance; all errors are the human's responsibility, and all opinions are the repository owner's alone.
