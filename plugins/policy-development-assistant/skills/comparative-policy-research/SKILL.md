---
name: comparative-policy-research
description: Method for researching how other countries have tackled a policy problem — selecting comparators for mechanism rather than prestige, writing per-jurisdiction case studies with the instrument, the evidence of results, the failures, and the transferability caveats for Israel. Load when building the comparative half of a policy evidence base, when asked "how do other countries handle this", or when writing policy/<area>/research/03-comparative.md and its case-study files.
---

# Comparative policy research

The comparative review answers one question: **has anyone actually solved this, and by what mechanism?** It is not a tour of admired countries. A comparator earns its place because it tried a specific instrument on a recognisably similar problem and there is evidence of what happened next.

Follows the evidence standards in the `policy-methodology` skill. Everything there applies here; this skill adds the comparative-specific method.

## Outputs

```
policy/<area>/research/
├── 03-comparative.md            the synthesis — read this alone and you have the argument
└── comparative/
    ├── <country-or-city>.md     one case study per comparator
    └── ...
```

The synthesis is the deliverable; the case studies are its evidence. Do not write only a synthesis — an unfootnoted summary of five countries is exactly the artifact this project exists to avoid.

## Selecting comparators

Pick 4–6 case studies. Choose on **mechanism similarity and evidence availability**, not on GDP or reputation.

Aim for a spread across these roles, and say in the synthesis which role each comparator plays:

- **The canonical success** — the instrument worked, and there is measured evidence that it did.
- **The near-neighbour in constraints** — similar population size, density, fiscal capacity, political fragmentation, or a comparable coalition system. Israel's structural analogues are more often small dense European states than the US or UK.
- **The instructive failure** — a country that tried this and it did not work, or worked and was repealed. **At least one is mandatory.** A comparative review with no failures in it is advocacy.
- **The over-cited case** — whatever comparator gets name-checked in the domestic debate. Research it precisely so the paper can correct the record, whichever way it falls.
- **A non-Western case where relevant** — Singapore, South Korea, Chile, Estonia. Avoid the reflex of comparing Israel only to Western Europe.

Record the ones you rejected and why, in a "Comparators considered and rejected" section. Selection is an analytic choice and must be visible.

## What each case study must contain

Each file in `comparative/` uses this structure. A section with nothing in it says "no evidence found", never nothing.

1. **Frontmatter** — `jurisdiction`, `instrument`, `adopted` (year), `status` (in force / amended / repealed), `last-verified` (date), `role` (which of the roles above).
2. **The problem as they framed it** — in their terms, not ours. Framing differences are often the finding.
3. **The instrument, mechanically** — the actual law, regulation, agency, tariff or contract clause. Official name in the original language with translation, year, and the operative provisions. *Who* administers it, *how* it is enforced, *how* it is funded. This is the section the policy paper will lift from; vagueness here makes the case study useless.
4. **Adoption politics** — who proposed it, who opposed it, what coalition passed it, how long it took, and whether it required a referendum, a crisis, or a court ruling. The Israeli question is always passability, so the *how it got through* is as transferable as the policy.
5. **Evidence of results** — measured outcomes with sources and dates, before and after. Distinguish the policy's own advocates' claims from independent evaluation (audit office, national statistics agency, peer-reviewed studies). Where the evidence is contested, present both sides.
6. **What went wrong** — implementation failures, cost overruns, unintended consequences, exemptions that hollowed it out, subsequent amendments that weakened it. Every real policy has this section.
7. **Transferability to Israel** — a judgement, argued. Address at least: population and density differences; fiscal capacity; the coalition/PR system versus their governing system; administrative capacity of the relevant Israeli ministry or municipality; legal-system compatibility (civil-law statute vs. common-law precedent vs. EU-directive-driven); and any Israel-specific factor (security, religious-political constraints, Arabic/Russian/Hebrew multilingualism, periphery-centre gaps).
8. **Sources** — full list with links and access dates.

## The synthesis (`03-comparative.md`)

Structure it as an argument, not a country-by-country recital:

1. **The comparative question**, stated in one paragraph.
2. **Comparator table** — jurisdiction, instrument, year, status, one-line result, transferability verdict (high / partial / low, with the criterion stated).
3. **Findings across cases** — 3–6 numbered findings, each supported by more than one case where possible. These are the transferable claims the paper will actually make.
4. **What does not transfer, and why** — the honest constraint list.
5. **The instructive failures** — its own section, prominently placed.
6. **Comparators considered and rejected**, with reasons.

## Rules specific to comparative work

- **Never cite a country from memory.** Instruments change name, get amended, get repealed. Verify current status and date it: "as of <date>". Search and fetch; do not recall.
- **Use original-language official sources** where they are authoritative — the ministry, the statistics agency, the audit office — and quote the original name alongside the English.
- **Beware the policy-tourism source.** Advocacy NGOs, consultancy white papers and press features recycle each other's claims. Trace every headline number to a primary source or mark it `[UNVERIFIED — verify before publication]`.
- **Report effect sizes, not directions.** "Ridership rose" is not a finding; "ridership rose 3% in year one against a 1.2% national trend" is.
- **Distinguish the instrument from the context that made it work.** Vienna's fare policy sits on a network Israel does not have. Say so explicitly rather than letting the paper imply the policy alone produced the outcome.
- **Currency and units are converted** — give the original figure, then the ILS equivalent with the conversion date.
