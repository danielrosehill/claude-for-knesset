---
description: Build or refresh a policy comparison matrix for an area — what every party proposes, what they did in office, and where our gaps are
argument-hint: <policy-area>
---

Build the policy comparison matrix for: **$ARGUMENTS**. Output goes to `context/matrices/$ARGUMENTS.md`, following the format defined in `context/matrices/README.md`. Follow the `policy-methodology` skill's evidence rules — a comparison matrix is a factual claim about other people's positions, and getting one wrong is the fastest way to lose the project's credibility.

## Inputs

- `context/election-<year>/` and `context/parties/` — who is running, and their published material
- `policy/$ARGUMENTS/research/` — our evidence base, if it exists
- `policy/$ARGUMENTS/paper/` — our proposals, if the paper is drafted

## Method

1. **Fix the rows first.** Write the scope questions before looking at any party's position. Rows chosen after reading the platforms get gerrymandered toward a predetermined winner — decide what matters, then see who addresses it.
2. **Fill each column from the party's own published material.** Platform PDF, party website policy page, Knesset bills its MKs sponsored, ministerial record. Read the Hebrew original; English party material is routinely softened for foreign audiences. Journalistic characterisation is a fallback and gets flagged as such.
3. **Record absence explicitly.** "No published housing platform as of <date>" is a finding and belongs in the cell. Never leave a blank that reads as unknown when it is actually nothing.
4. **Separate record from platform.** Build the second matrix for any party that has held the relevant ministry or coalition position: bills passed, regulations issued, budgets allocated — versus what it now promises.
5. **Rate on a stated scale**, applied identically to every column including ours. The load-bearing distinction is a concrete mechanism (named bill, section, regulation, budget line) versus a stated aspiration.
6. **Write the gap analysis.** For each of our proposals: already law or funded / already promised by others / genuinely unaddressed / actively opposed by a bloc. Then the inverse — proposals other parties make that we have not considered and should.

## Rules

- Every party position traces to a document with a URL and an access date.
- Frontmatter carries `last-verified`; polling and party-list facts decay within weeks and every claim states *as of* when.
- Include our own column and rate it honestly. If another party's instrument is better than ours on a row, say so in the matrix and flag it for the policy paper to address — that flag is the entire point of the exercise.
- Finish by reporting: which of our proposals survive the gap analysis as genuinely distinctive, which are duplicative, and which need a political answer because a bloc opposes them.
