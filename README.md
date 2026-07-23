# MK-Claude 🇮🇱🤖

![A cheerful robot addressing a crowd from a campaign podium](./assets/cover.jpg)

*An AI-assisted political platform for a party that doesn't exist.*

**MK** — *Member of Knesset*. Claude is not one, is not eligible to become one, and would lose its deposit.

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
/plugin marketplace add danielrosehill/mk-claude
/plugin install policy-development-assistant@mk-claude
```

## Policy areas

Live status. Full task tracking in **[TASKS.md](./TASKS.md)**.

| Area | Testimony | Research | Paper | Platform |
|------|:---------:|:--------:|:-----:|:--------:|
| **[Rental market & tenancy law](./policy/rental-market/)** | ✅ | 🟡 2 / 5 | ⬜ | ⬜ |
| **[Public transport & the commute](./policy/public-transport/)** | ✅ | 🟡 3 / 5 | ⬜ | ⬜ |
| **[Political accountability](./policy/political-accountability/)** | ✅ | ⬜ | ⬜ | ⬜ |
| **[Citizens first](./policy/citizens-first/)** | ✅ | ⬜ | ⬜ | ⬜ |
| **[Open government data](./policy/open-government-data/)** | ✅ | ⬜ | ⬜ | ⬜ |
| **[Environmental quality — air & noise](./policy/environmental-quality/)** | ✅ | ⬜ | ⬜ | ⬜ |

✅ complete · 🟡 in progress · ⬜ not started

### Jump to

| | |
|---|---|
| **Testimonies** | [Rental market](./testimonies/2026-07-23-rental-market.md) · [Public transport](./testimonies/2026-07-23-public-transport.md) · [Political accountability](./testimonies/2026-07-23-political-accountability.md) · [Citizens first](./testimonies/2026-07-23-citizens-first.md) · [Open government data](./testimonies/2026-07-23-open-government-data.md) · [Environmental quality](./testimonies/2026-07-23-environmental-quality.md) |
| **Evidence base** | [Rental — the law](./policy/rental-market/research/02-israeli-law.md) · [Rental — data](./policy/rental-market/research/04-data.md) · [Transport — problem](./policy/public-transport/research/01-problem-statement.md) · [Transport — comparative](./policy/public-transport/research/03-comparative.md) |
| **Comparative cases** | [Germany · Deutschlandticket](./policy/public-transport/research/comparative/germany-deutschlandticket.md) · [Vienna (ended)](./policy/public-transport/research/comparative/vienna.md) · [Tallinn & Luxembourg](./policy/public-transport/research/comparative/tallinn-luxembourg.md) · [UK ORR](./policy/public-transport/research/comparative/united-kingdom-orr.md) |
| **Method & context** | [PIPELINE.md](./PIPELINE.md) · [Context layer](./context/) · [Comparison matrices](./context/matrices/) · [The plugin](./plugins/policy-development-assistant/) |

### Findings worth reading first

- **The cost of moving is the fastest-growing burden on Israeli tenants.** CBS's brokerage/contract/insurance sub-index rose **73.4%** over the decade to Nov 2025, against **17.9%** general inflation — four times faster. [Evidence](./policy/rental-market/research/04-data.md)
- **The 2017 Fair Rental Law's broker-fee provision failed, by the government's own admission** — a Ministry of Justice survey said so. [Evidence](./policy/rental-market/research/02-israeli-law.md)
- **The counter-evidence we did not bury:** ~80% of renters reported satisfaction with their dwelling in 2022. [How we reconcile it](./policy/rental-market/research/04-data.md)

## Contributing

This is a personal experiment, but it's a public repo for a reason. Issues and pull requests with corrections, better data, or counterarguments are welcome. Disagreement is especially welcome if it comes with sources.

## License & disclaimer

Content is provided as-is for discussion and educational purposes. Drafted collaboratively with AI assistance; all errors are the human's responsibility, and all opinions are the repository owner's alone.
