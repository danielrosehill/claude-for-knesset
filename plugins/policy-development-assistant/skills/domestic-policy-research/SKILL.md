---
name: domestic-policy-research
description: Method for researching the Israeli domestic record on a policy problem — what governments, ministries, committees and parties have proposed, legislated, piloted, shelved or repealed over the years, and why each attempt succeeded or failed. Load when building the domestic half of a policy evidence base, when asked "has this been tried here before" or "what do the parties say about this", or when writing policy/<area>/research/05-domestic-record.md.
---

# Domestic policy research

The comparative review asks *has anyone solved this?* This one asks the harder question: **has Israel already tried, and what happened?**

Almost every policy idea worth proposing has a domestic history — a private member's bill that died in first reading, a ministerial committee whose report was shelved, a pilot that ran in three cities and was quietly discontinued, a reform passed and then hollowed out by exemptions. A proposal written in ignorance of that history is not a proposal; it is a re-run. The purpose of this stage is that when we write our own recommendation, the failure modes are already baked in.

Follows the evidence standards in the `policy-methodology` skill. Everything there applies here.

## Outputs

```
policy/<area>/research/
├── 05-domestic-record.md        the synthesis — attempts, outcomes, why they failed
└── domestic/
    ├── <attempt-slug>.md        one file per significant attempt, where the detail warrants it
    └── ...
```

Cross-reference, do not duplicate: `02-israeli-law.md` covers the law **as it stands today**; this covers **everything that was tried**, including what never became law and what was repealed. Party *campaign* positions belong in `context/parties/` and the matrix produced by `/compare-parties`; this document covers what parties and governments actually *did* — and links to the matrix rather than restating it.

## What to look for

Work through each of these channels; state explicitly in the synthesis if a channel turned up nothing.

**Legislative**
- Bills on the Knesset website (חקיקה / הצעות חוק): government bills (הצעות חוק ממשלתיות) and private members' bills (הצעות חוק פרטיות), including those that fell. Record the bill number, the Knesset term, the sponsoring MKs and their parties, the stage it reached, and the vote if there was one. Bills that died at the Ministerial Committee for Legislation (ועדת השרים לענייני חקיקה) matter as much as those that passed.
- Amendments that weakened an existing law after enactment, and the exemptions written into it.
- Repeals — with the stated reason for repeal.

**Executive and administrative**
- Government decisions (החלטות ממשלה) — these are numbered, dated, published, and frequently the real instrument. Note whether the decision was implemented and funded.
- Ministry regulations, directives, tenders and licence conditions — often the lever that was available all along and never pulled.
- Public commissions and committee reports (ועדות ציבוריות) — the classic Israeli pattern of commissioning a report and shelving it. Name the committee, its chair, the year, its central recommendations, and which were implemented.
- Pilots and pilots-that-ended, especially municipal ones.

**Oversight and evaluation**
- **State Comptroller (מבקר המדינה)** reports — the single most valuable source for "the policy exists and does not work". Cite report year and chapter.
- **Knesset Research and Information Center (מרכז המחקר והמידע של הכנסת)** briefs — usually the best available synthesis, and frequently already contains the comparative work.
- Relevant Knesset committee protocols (פרוטוקולים) — where the actual objections are on the record, in the words of the officials who raised them.
- Bank of Israel and Ministry of Finance analyses, budget documents, and Treasury objections.

**Municipal**
- Where the lever is municipal (Jerusalem, Tel Aviv-Yafo, Haifa, Beersheba), the municipality's own bylaws (חוקי עזר), master plans and council decisions.

**Political**
- Which parties have owned this issue and which have blocked it, across terms — including coalition-agreement clauses, which are published and are often where a reform was traded away.
- Whether the blocking interest is a party, a ministry, a public-sector union, a regulated industry, or the Treasury. **Naming the actual veto player is the most useful output of this whole document.**

## Structure of `05-domestic-record.md`

1. **Summary of the record** — one paragraph: has this been tried, how many times, and what is the pattern of failure?
2. **Timeline table** — year, instrument (bill / decision / committee / pilot / regulation), sponsor and party, outcome (passed / fell / shelved / repealed / implemented / unfunded), source link. This table is the document's spine.
3. **Attempt-by-attempt analysis** — for each significant attempt: what was proposed, what the mechanism was, who supported and opposed it, what killed it or what it achieved, and what the evidence says about the outcome.
4. **The pattern of failure** — the recurring failure mode, named. Typical candidates: Treasury opposition on cost; no enforcement body assigned or funded; coalition trade-away; municipal-versus-national jurisdiction stalemate; regulated industry capture; passed but never brought into force (commencement deferred repeatedly); implemented without the accompanying budget line.
5. **Veto players and enablers** — who must be neutralised or recruited for anything here to pass, with evidence for each.
6. **What is already live** — anything currently in the pipeline: pending bills, unimplemented government decisions, deferred commencement dates. Proposing something already in force is the most avoidable error available to us.
7. **Implications for our proposal** — the design constraints this history imposes. Each one should be traceable to a specific failure above.

## Rules specific to domestic work

- **Hebrew sources are primary here.** The Knesset site, government decisions, Comptroller reports and committee protocols are authoritative in Hebrew; English coverage is partial and lags. Quote the Hebrew name and give the English translation.
- **Verify current status.** A bill "passed a first reading" is not law. A law with a deferred commencement date is not in force. State the status and the date checked.
- **Distinguish record from platform**, per `context/README.md`. What a party said in a campaign and what it did in office are separate claims and go in separate columns.
- **Do not paraphrase an objection into a strawman.** If the Treasury opposed a measure, find its stated reason and quote it. That objection is the one our paper has to answer.
- **A shelved report is evidence, not an embarrassment.** Its recommendations are usually good and already costed; the finding is the shelving, and the useful question is who shelved it and why.
- Anything unsourced is marked `[UNVERIFIED — verify before publication]` and blocks stage advancement, exactly as elsewhere.
