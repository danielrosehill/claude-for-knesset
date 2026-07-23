---
title: Policy comparison matrices
description: One matrix per policy area, comparing every party’s proposal — and their record in office — against ours, on the same scale.
sidebar:
  label: Comparison matrices
  order: 2
---

One matrix per policy area, comparing what each party running in the election proposes — and what they did when they had the chance — against our proposal.

## File format

`<policy-area>.md`, matching the `policy/<area>/` slug. Frontmatter:

```yaml
---
policy-area: rental-market
election: 2026
last-verified: 2026-07-23
sources-cutoff: 2026-07-23   # party platforms published after this date are not reflected
---
```

## Required sections

1. **Scope** — the specific questions the matrix compares on (the rows). Chosen *before* filling in the columns, so the rows are not gerrymandered to favour a predetermined winner.
2. **Rating scale** — if cells are rated, the scale defined explicitly. Suggested default:

   | Symbol | Meaning |
   |--------|---------|
   | ●● | Concrete commitment with a named mechanism (bill, regulation, budget line) |
   | ● | Commitment stated, mechanism unspecified |
   | ○ | Mentioned as an aspiration only |
   | — | No stated position |
   | ✗ | Actively opposes |

   The distinction that does the work is **●● vs ●**: "we will protect tenants" is `●`; "we will amend §X of law Y to do Z" is `●●`. Most manifesto text is `●` or `○`, and the matrix should show that plainly rather than inflating it.
3. **The matrix** — rows are the scope questions, columns are the parties plus a final column for this project. Cells carry the rating and a short quoted or closely-paraphrased position, with a footnote to the source document.
4. **Record vs platform** — a second, smaller matrix for parties that have held the relevant ministry or coalition position: what they actually advanced (bills passed, regulations issued, budgets allocated) versus what they now promise.
5. **Gap analysis** — the payoff section. Which of our proposals are:
   - **Already law or already funded** → drop or reframe as enforcement
   - **Already promised by others** → not distinctive; either adopt their framing and credit it, or explain what ours adds
   - **Genuinely unaddressed** → the core of the paper
   - **Actively opposed by a bloc** → costed politically; the paper needs to answer their objection specifically

   Also the inverse: proposals *other* parties make that we have not considered and should.
6. **Sources** — every party position traced to a document (platform PDF, party website, Knesset bill, ministerial statement) with URL and access date. Where a party has published no housing platform, say so explicitly — absence of policy is a finding, not a blank cell.

## Honesty constraints

- Fill in every party's column from its **own published material** first. Journalistic characterisation of a party's position is a fallback, flagged as such.
- Read the Hebrew original where one exists; English party materials are frequently softened for foreign audiences.
- A party you disagree with on everything else may have the best instrument in one row. Record it.
