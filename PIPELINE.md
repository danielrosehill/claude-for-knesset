# The Policy Development Pipeline

How raw experience becomes a program for government. Every policy area moves through the same stages, each with a defined artifact and quality bar. The stages are automated by the [policy-development-assistant plugin](./plugins/policy-development-assistant/).

```
raw testimony (private)
      │  /capture-testimony
      ▼
testimonies/YYYY-MM-DD-<area>.md          dated, cleaned, redacted
      │  /research-policy <area>
      ▼
policy/<area>/research/                   evidence base
      ├── 01-problem-statement.md         testimony synthesized with quantified data
      ├── 02-israeli-law.md               the legislation that exists, and why it fails
      ├── 03-comparative.md + comparative/ how other countries handle it, case by case
      ├── 04-data.md                      CBS & other statistics, with sources
      └── 05-domestic-record.md           what Israel has already tried, and why it failed
      │  /draft-paper <area>
      ▼
policy/<area>/paper/                      the think-tank product
      ├── <area>.typ                      Typst source (house template)
      └── <area>.pdf                      compiled policy paper
      │  /update-platform
      ▼
platform/program-for-government.md        the meta-proposal, rolled up from all papers
```

## The context layer

Running alongside the four stages, `context/` records the political ground truth the platform is written against — the election, the outgoing Knesset, the parties running, and what they propose. It is not a pipeline stage; it is the baseline that makes gap analysis possible.

```
context/
├── election-2026/    date, trigger, procedure, polling
├── knesset-25/       outgoing composition, coalition, legislative record
├── parties/          one profile per party/list
└── matrices/         policy comparison matrices, one per area  ← /compare-parties <area>
```

A matrix answers the question a policy paper cannot answer about itself: *is this proposal actually needed, actually distinctive, and actually passable?* Proposals that turn out to be already law, already promised by four other parties, or dead on arrival with a blocking bloc get reframed or dropped. See `context/README.md` for the evidence rules, which include rating our own column on the same scale as everyone else's.

## Stage gates

A policy area does not advance until its current stage meets the bar:

| Stage | Artifact | Bar |
|-------|----------|-----|
| 1. Testimony | Dated markdown in `testimonies/` | Cleaned, redacted, frontmatter complete |
| 2. Research | Five research docs | Every quantitative claim sourced or marked `[UNVERIFIED]`; legislation cited by name, year, and provision; ≥3 comparison countries incl. ≥1 instructive failure; domestic record covers prior attempts and names the veto player |
| 3. Paper | Typst source + PDF | Compiles clean; follows house template; contains costed proposals and a steelmanned trade-offs section |
| 4. Platform | Section in the program | Consistent with other planks; no promise without a mechanism |

## Evidence rules (non-negotiable)

- **No invented numbers.** A statistic without a source is marked `[UNVERIFIED — verify before publication]` and blocks stage advancement.
- **Preferred sources**, in order: CBS (הלשכה המרכזית לסטטיסטיקה), Bank of Israel, Knesset Research and Information Center (המרכז למחקר ומידע), State Comptroller reports, OECD, peer-reviewed research, quality journalism (last resort, flagged).
- **Legislation is cited precisely**: official name, year, amendment number, and the specific sections relied on.
- **Testimony is evidence of experience, not of prevalence.** Prevalence claims require data.
- **Trade-offs are mandatory.** Every proposal names its losers and answers the strongest objection, not the weakest.
