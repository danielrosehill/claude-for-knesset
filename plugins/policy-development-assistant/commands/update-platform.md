---
description: Roll completed policy papers up into the program for government (stage 4 of the pipeline)
argument-hint: (no arguments — processes all completed papers)
---

Update the meta-proposal at `platform/program-for-government.md` from the completed policy papers.

## Rules

1. **Only stage-3-complete areas enter the program.** Check each `policy/<area>/README.md` stage table; skip areas without a compiled paper.
2. **The program is a distillation, not a concatenation.** Each policy area gets a section of roughly one page: the problem in two or three sentences, then the recommendations (numbered, cross-referenced to the paper, e.g. "PP-001 §5.2"), then a one-line honest note on cost and losers. Readers who want the evidence go to the paper.
3. **Coherence check across planks** — this is the step's real value:
   - Do any two areas' proposals conflict (fiscally, administratively, ideologically)?
   - Do the combined costs exceed any plausible budget envelope? Keep a running "total fiscal impact" table.
   - Does every promise still have a mechanism? No aspirational language that a paper doesn't back.
   Record conflicts found in a "Open tensions" section at the end of the program rather than papering over them.
4. **Structure of the program document**: preamble (what this program is and how it was built, linking to `PIPELINE.md`) → one section per policy area, ordered by the priority the papers justify → fiscal summary table → open tensions.
5. Finish by updating each included area's stage table (stage 4 ✅) and, if the program's priorities changed, noting why in the commit message.
