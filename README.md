# MK-Claude 🇮🇱🤖

![A cheerful robot addressing a crowd from a campaign podium](./site/src/assets/cover.jpg)

*An AI-assisted political platform for a party that doesn't exist.*

### 📖 **[Read it as a site → danielrosehill.github.io/MK-Claude](https://danielrosehill.github.io/MK-Claude/)**

**MK** — *Member of Knesset*. Claude is not one, is not eligible to become one, and would lose its deposit.

## What is this?

Israel is heading into (yet another) election. Like many voters, I find myself feeling disenfranchised — let down by a political system that seems to produce slogans rather than substance, and parties whose "platforms" are often a page of vibes rather than a plan.

This repository is an experiment: **what would it look like to build a political platform properly?**

Working with [Claude](https://claude.com) (Anthropic's AI), the goal is to formulate a genuine, detailed political manifesto for Israel — one that is **researched** (grounded in actual data, comparative policy, and cited sources), **precise** (concrete proposals with mechanisms and costs), **coherent**, and **honest about trade-offs** — every policy has losers as well as winners, and a serious platform says who they are.

It is being written in public while unfinished, including the numbers that have not been checked yet.

## Repository structure

The content and the website are the same tree. Everything under `site/src/content/docs/` is both a Markdown file you can read here on GitHub and a page on the site.

```
site/
  src/content/docs/        ← the content root; all paths below are relative to it
    index / policy /       the six policy areas: evidence base per area
    testimonies/           stage 1 — dated first-person accounts
    context/               the election, the parties, the comparison matrices
    platform/              stage 4 — the program for government
    method/                evidence rules and the plugin
    pipeline.md            the methodology in full
    tasks.md               open work and verification debt, in public
  public/papers/           stage 3 — compiled policy papers (Typst source + PDF)
  src/pages/index.astro    the landing page
plugins/                   the policy-development-assistant Claude Code plugin
templates/                 Typst house template for policy papers
testimonies-raw/           gitignored staging area for raw dictations
```

Raw testimony material is kept **outside** the site tree on purpose, so it cannot be published by accident.

## Methodology

Policy moves through a four-stage pipeline — first-person testimony, an evidence base (CBS data, actual legislation, comparative policy), a think-tank-style policy paper, and finally a rolled-up program for government. Each stage has a bar it must clear before the next one starts. Full detail in **[the pipeline](./site/src/content/docs/pipeline.md)** and **[the evidence rules](./site/src/content/docs/method/evidence-rules.md)**.

Everything is version-controlled, so the platform's evolution — including changes of mind — is public history.

## The plugin

The pipeline is automated by a Claude Code plugin shipped in this repo, **[policy-development-assistant](./plugins/policy-development-assistant/)**: a command per stage (`/capture-testimony`, `/research-policy`, `/draft-paper`, `/update-platform`, `/compare-parties`), three method skills encoding the evidence standards, and a bundled MCP server ([israel-statistics-mcp](https://github.com/reuvenaor/israel-statistics-mcp)) giving Claude direct tool access to Israeli Central Bureau of Statistics (הלמ"ס) index data — no API key needed.

```
/plugin marketplace add danielrosehill/MK-Claude
/plugin install policy-development-assistant@mk-claude
```

## Status

Live status, with full task tracking in **[tasks.md](./site/src/content/docs/tasks.md)**.

| Area | Testimony | Research | Paper | Manifesto |
|------|:---------:|:--------:|:-----:|:---------:|
| **[Rental market & tenancy law](./site/src/content/docs/policy/rental-market/)** | ✅ | 🟡 2 / 5 | ⬜ | ⬜ |
| **[Public transport & the commute](./site/src/content/docs/policy/public-transport/)** | ✅ | 🟡 3 / 5 | ⬜ | ⬜ |
| **[Political accountability](./site/src/content/docs/policy/political-accountability/)** | ✅ | ⬜ | ⬜ | ⬜ |
| **[Citizens first](./site/src/content/docs/policy/citizens-first/)** | ✅ | ⬜ | ⬜ | ⬜ |
| **[Open government data](./site/src/content/docs/policy/open-government-data/)** | ✅ | ⬜ | ⬜ | ⬜ |
| **[Environmental quality — air & noise](./site/src/content/docs/policy/environmental-quality/)** | ✅ | ⬜ | ⬜ | ⬜ |

✅ complete · 🟡 in progress · ⬜ not started

### Findings worth reading first

- **The cost of moving is the fastest-growing burden on Israeli tenants.** CBS's brokerage/contract/insurance sub-index rose **73.4%** over the decade to Nov 2025, against **17.9%** general inflation — four times faster. [Evidence](./site/src/content/docs/policy/rental-market/research/04-data.md)
- **The 2017 Fair Rental Law's broker-fee provision failed, by the government's own admission** — a Ministry of Justice survey said so. [Evidence](./site/src/content/docs/policy/rental-market/research/02-israeli-law.md)
- **The counter-evidence we did not bury:** ~80% of renters reported satisfaction with their dwelling in 2022. [How we reconcile it](./site/src/content/docs/policy/rental-market/research/04-data.md)

## What this is *not*

- ❌ A real political party (no, Claude is not running for Knesset)
- ❌ An endorsement of any existing party or bloc
- ❌ A claim that AI should make policy — the human sets the values and priorities; the AI helps with research, drafting, and stress-testing

Think of it as **civic engagement by other means**: instead of casting a blank protest ballot, writing down — rigorously — what a platform worth voting for would actually contain.

## Working on the site

```bash
cd site
npm install
npm run dev      # local preview
npm run build    # type-check, build, and fail on any broken internal link
```

Requires Node 22+. The site deploys to GitHub Pages automatically on push to `main`.

## Contributing

This is a personal experiment, but it's a public repo for a reason. Issues and pull requests with corrections, better data, or counterarguments are welcome. Disagreement is especially welcome if it comes with sources.

## License & disclaimer

Content is provided as-is for discussion and educational purposes. Drafted collaboratively with AI assistance; all errors are the human's responsibility, and all opinions are the repository owner's alone.
