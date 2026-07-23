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
      ├── 03-comparative.md               how other countries handle it
      └── 04-data.md                      CBS & other statistics, with sources
      │  /draft-paper <area>
      ▼
policy/<area>/paper/                      the think-tank product
      ├── <area>.typ                      Typst source (house template)
      └── <area>.pdf                      compiled policy paper
      │  /update-platform
      ▼
platform/program-for-government.md        the meta-proposal, rolled up from all papers
```

## Stage gates

A policy area does not advance until its current stage meets the bar:

| Stage | Artifact | Bar |
|-------|----------|-----|
| 1. Testimony | Dated markdown in `testimonies/` | Cleaned, redacted, frontmatter complete |
| 2. Research | Four research docs | Every quantitative claim sourced or marked `[UNVERIFIED]`; legislation cited by name, year, and provision; ≥3 comparison countries |
| 3. Paper | Typst source + PDF | Compiles clean; follows house template; contains costed proposals and a steelmanned trade-offs section |
| 4. Platform | Section in the program | Consistent with other planks; no promise without a mechanism |

## Evidence rules (non-negotiable)

- **No invented numbers.** A statistic without a source is marked `[UNVERIFIED — verify before publication]` and blocks stage advancement.
- **Preferred sources**, in order: CBS (הלשכה המרכזית לסטטיסטיקה), Bank of Israel, Knesset Research and Information Center (המרכז למחקר ומידע), State Comptroller reports, OECD, peer-reviewed research, quality journalism (last resort, flagged).
- **Legislation is cited precisely**: official name, year, amendment number, and the specific sections relied on.
- **Testimony is evidence of experience, not of prevalence.** Prevalence claims require data.
- **Trade-offs are mandatory.** Every proposal names its losers and answers the strongest objection, not the weakest.
