---
title: The Claude Code plugin
description: policy-development-assistant — the Claude Code plugin that runs this pipeline, with a command per stage, three method skills, and direct tool access to Israeli CBS statistics.
sidebar:
  label: The Claude Code plugin
  order: 3
---

The pipeline is not a document describing how the work *should* be done. It is executable:
every stage is a [Claude Code](https://claude.com/claude-code) slash command, shipped in
this repository as a plugin called **policy-development-assistant**.

That matters for the experiment. If the methodology lives only in prose, nothing enforces
it and the evidence bar erodes under deadline. If it lives in a command, the bar is
applied on every run, to every policy area, whether or not anyone is watching.

## Install it

```
/plugin marketplace add danielrosehill/MK-Claude
/plugin install policy-development-assistant@mk-claude
```

The plugin is not Israel-specific in structure — the stage model, the evidence rules and
the comparative method transfer to any jurisdiction. The statistics server and the source
hierarchy are.

## Commands

| Command | Stage | What it does |
|---------|:-----:|--------------|
| `/capture-testimony` | 1 | Turns a raw dictation or transcript into a dated, cleaned, redacted testimony. Enforces the redaction and frontmatter rules, updates the index, and creates the policy-area tracker. |
| `/research-policy <area>` | 2 | Builds the five-document evidence base. Web research, not recall — every quantitative claim is sourced or marked `[UNVERIFIED]`. |
| `/draft-paper <area>` | 3 | Compiles the evidence into a Typst policy paper against the house template, with costed proposals and a steelmanned trade-offs section. Refuses to run on an incomplete evidence base. |
| `/update-platform` | 4 | Rolls the completed papers into the program for government, checking cross-plank coherence. Skips any area without a compiled paper. |
| `/compare-parties <area>` | — | Builds the [comparison matrix](../context/matrices/index.md) for an area: what every party proposes, what they did in office, and where our proposal sits — rated on the same scale as everyone else's. |

## Skills

Three skills carry the method, loaded automatically when the relevant work starts:

- **`policy-methodology`** — the stage model, the artifacts, the frontmatter schemas, and
  the [evidence rules](./evidence-rules.md).
- **`comparative-policy-research`** — how to choose comparators for *mechanism* rather
  than prestige, and how to write a per-jurisdiction case study that includes the
  failures and the transferability caveats.
- **`domestic-policy-research`** — how to establish what has already been tried in Israel,
  why each attempt failed, and who the veto player was.

## The statistics server

The plugin bundles an MCP server —
[israel-statistics-mcp](https://github.com/reuvenaor/israel-statistics-mcp) — giving Claude
direct tool access to Israeli Central Bureau of Statistics (הלשכה המרכזית לסטטיסטיקה) index
data: price indices, time series, and the official inflation-linkage calculator. No API key
is required.

This is what makes the difference between an evidence base and a plausible-sounding one.
The headline finding in the [rental market](../policy/rental-market/index.md) area — that
transaction costs have risen four times faster than general inflation — is a chained
calculation across three CBS index series, done with CBS's own linkage calculator. It is
not a figure anyone could recall, and it is not a figure a language model should be trusted
to invent.

## Source

The plugin lives at
[`plugins/policy-development-assistant/`](../../../../../plugins/policy-development-assistant/)
in the repository. Its commands and skills are plain Markdown — worth reading if you want
to see exactly what standards are being enforced, or to argue that they are the wrong ones.
