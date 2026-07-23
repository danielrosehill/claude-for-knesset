---
description: Build the evidence base for a policy area — data, legislation, comparative and domestic research (stage 2 of the pipeline)
argument-hint: <policy-area>
---

Build the research evidence base for the policy area: **$ARGUMENTS**. Follow the `policy-methodology` skill's evidence rules strictly — this stage exists to ground testimony in verifiable fact, and its credibility is the whole project.

## Inputs

- The cleaned testimony (or testimonies) for this area in `testimonies/`
- The scope notes and research hooks in `policy/$ARGUMENTS/README.md`

## Outputs

Create these documents in `policy/$ARGUMENTS/research/`. Use web search and web fetch extensively; this stage is research, not recall.

1. **`01-problem-statement.md`** — What is broken, synthesizing the testimony (evidence of *experience*) with quantified data (evidence of *prevalence*). Every "how big / how many / how much" claim needs a number with a source.
2. **`02-israeli-law.md`** — The legislation that exists *today*: official name, year, amendment number, the specific provisions relevant here, what the law promised, and — with evidence — where enforcement fails on the ground. Include Knesset Research and Information Center reports and State Comptroller findings where they exist.
3. **`03-comparative.md`** + **`comparative/<jurisdiction>.md`** — How other countries have tackled this. **Load the `comparative-policy-research` skill and follow its method**: comparators selected for mechanism not prestige, one case-study file per comparator, at least one instructive failure, and an explicit transferability judgement for each.
4. **`04-data.md`** — The statistical annex: every dataset used, with source, year, exact figure, and a link. Preferred sources in order: CBS (הלמ"ס), Bank of Israel, Knesset RIC, State Comptroller, OECD, peer-reviewed research, quality journalism (flagged as such). The `israel-statistics` MCP server gives direct access to CBS indices.
5. **`05-domestic-record.md`** (+ `domestic/` case files where warranted) — What has already been tried here: bills that passed and bills that fell, government decisions, shelved committee reports, pilots, repeals, and which parties and ministries backed or blocked each. **Load the `domestic-policy-research` skill and follow its method.** Its most important outputs are the named veto player and the recurring failure mode.

Documents 3 and 5 are two halves of the same question — *what has worked elsewhere* and *what has already failed here* — and the policy paper cannot be written honestly without both.

## Rules

- A number you cannot source gets written as `[UNVERIFIED — verify before publication]` and listed in a "Verification debt" section at the top of `04-data.md`. The area cannot advance to stage 3 with verification debt outstanding.
- Prefer primary sources in Hebrew where they are authoritative; quote the Hebrew name alongside the English.
- Steelman the counter-evidence: if the data complicates the testimony's narrative, record that prominently rather than burying it.
- Finish by updating the stage table in `policy/$ARGUMENTS/README.md` and summarizing the strongest three facts found and the weakest link in the evidence base.
