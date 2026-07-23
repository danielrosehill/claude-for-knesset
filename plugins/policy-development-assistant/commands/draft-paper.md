---
description: Synthesize a policy area's research into a think-tank-style Typst policy paper with compiled PDF (stage 3 of the pipeline)
argument-hint: <policy-area>
---

Draft the policy paper for: **$ARGUMENTS**. This is the think-tank product — the document a serious reader judges the project by. Follow the `policy-methodology` skill.

## Preconditions

- All four research documents exist in `policy/$ARGUMENTS/research/`
- No outstanding `[UNVERIFIED]` verification debt in `04-data.md` — if there is, stop and report it instead of drafting.

## Structure

Write `policy/$ARGUMENTS/paper/$ARGUMENTS.typ` using the house template:

```typst
#import "../../../templates/policy-paper.typ": policy-paper, recommendation, tradeoff
```

Assign the next sequential paper number (`PP-001`, `PP-002`, … — check existing papers). The paper's sections:

1. **Executive summary** (template `abstract` + `key-findings`) — the whole argument in half a page.
2. **The problem** — quantified, drawing on the problem statement; the testimony appears as a boxed or quoted case study, clearly labeled as one household's experience.
3. **The law today and why it fails** — from `02-israeli-law.md`.
4. **What works elsewhere** — from `03-comparative.md`.
5. **Proposals** — each as a `#recommendation[...]` box containing: the mechanism (what changes in law/regulation, who administers it), the cost and who pays (order-of-magnitude honest, marked as estimate), and the implementation path (what can be done by ministerial regulation vs. primary legislation).
6. **Trade-offs and objections** — each strongest objection as a `#tradeoff(objection, response)`. Steelman: argue the objection as its best advocate would.
7. **Sources** — footnotes throughout (`#footnote[...]`); every factual claim traceable.

## Build and check

1. Compile: `typst compile policy/$ARGUMENTS/paper/$ARGUMENTS.typ` — must compile with zero warnings.
2. Render page 1 to PNG (`typst compile --format png --ppi 100 ... `) and inspect it visually; fix layout problems (overflow, orphaned headings, broken boxes).
3. Commit both `.typ` and `.pdf`.
4. Update the stage table in `policy/$ARGUMENTS/README.md` and note the paper number.
