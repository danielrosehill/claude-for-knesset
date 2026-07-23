# Context

The political ground truth the platform is written against.

Stages 1–4 of the [pipeline](../PIPELINE.md) build *our* policy. This directory records *everyone else's* — the electoral situation, who is running, what the outgoing Knesset actually did, and what the other parties are promising. It exists for three reasons:

1. **Gap analysis.** A proposal is only worth making if it is not already law, already promised by five parties, or already tried and failed. The comparison matrices are how we check.
2. **Honest positioning.** Where another party has a good policy, we say so and adopt it. Where ours is genuinely distinct, we should be able to point at the row in the matrix that proves it.
3. **Falsifiability.** Claims about "no party is addressing X" are checkable claims. They get sourced like any other.

## Structure

```
context/
├── election-2026/         The 26th Knesset election: date, trigger, procedure, polling
├── knesset-25/            The outgoing Knesset: composition, coalition, legislative record
├── parties/               One profile per party/list: leadership, base, stated platform
└── matrices/              Policy comparison matrices, one per policy area
```

## Rules

These carry the same evidence standards as the policy research (see the `policy-methodology` skill):

- **Everything is dated.** Polling, party lists, and coalition arithmetic decay fast. Every factual claim states *as of* when, and files carry a `last-verified` date in frontmatter.
- **Party positions are quoted, not paraphrased into our framing.** If a party's housing policy is vague, the matrix cell says "vague" and quotes the vague text — it does not silently steelman or strawman it.
- **Distinguish platform from record.** What a party *says* in a campaign and what it *did* in government are separate columns. Both matter; conflating them is the standard dishonesty of political comparison.
- **No score without a criterion.** If a matrix rates positions, the rating scale is defined in the matrix file and applied identically across parties, including to our own column.

## Our own column

Every matrix includes a column for this project's proposal, held to the same standard and rated on the same scale. A comparison matrix in which the author's own policy wins every row is marketing, not analysis. Where another party's instrument is better than ours, the matrix says so and the policy paper is expected to change.
