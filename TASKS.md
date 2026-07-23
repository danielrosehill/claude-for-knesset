# Tasks

Public project tracking for MK-Claude. Open work, verification debt, and what blocks what.

This file is public on purpose. A platform that claims to be evidence-based should show its unfinished edges — including the numbers it has not yet checked. Anything marked ⛔ is a claim the project is **not** currently entitled to make.

**Legend:** ✅ done · 🟡 in progress · ⬜ not started · ⛔ blocking a stage gate · 🔍 needs verification

Last updated: 2026-07-23

---

## Priority queue

The next things worth doing, in order. Cheap and high-value first.

| # | Task | Area | Why now |
|---|------|------|---------|
| 1 | ⛔🔍 Was Government Decision 2130 ever adopted? | rental-market | Completes the institutional-failure sequence either way. One search. |
| 2 | ⛔🔍 Are the 2026 draft model-contract regulations (חוזה מצוי) real and open for comment? | rental-market | §25ד lets the Justice Minister set default lease terms **by regulation, without primary legislation** — potentially the most actionable lever in the whole project. |
| 3 | 🔍 Rent-burden triangulation, route C (rent index vs income index) | rental-market | Both series retrievable; rent index is one MCP call away. See `04-data.md` §2a. |
| 4 | ⬜ Election 2026 context: date, trigger, parties, polling | context | Everything in `context/` and every comparison matrix depends on it. |
| 5 | ⛔🔍 Confirm from statute: no renewal obligation, no cause requirement | rental-market | The paper's central claim currently rests on an unverified negative. |

---

## Rental market & tenancy law

**Stage 2 — research, 2 of 5 documents.** [Area README](./policy/rental-market/) · [the law](./policy/rental-market/research/02-israeli-law.md) · [data](./policy/rental-market/research/04-data.md)

### Documents

| Document | Status |
|----------|--------|
| `01-problem-statement.md` | ⬜ not started |
| `02-israeli-law.md` | 🟡 partial |
| `03-comparative.md` + `comparative/` | ⬜ not started |
| `04-data.md` | 🟡 partial |
| `05-domestic-record.md` | ⬜ not started |

### Verification debt ⛔

These block advancement to stage 3.

- ⛔🔍 **Repair-timeline obligation** — section number and day-counts for urgent vs ordinary repairs, unconfirmed against statute.
- ⛔🔍 **Security-deposit cap** — section and multiple, unconfirmed.
- ⛔🔍 **Mandatory vs default provisions** — which parts of the 2017 amendment can be contracted around. Load-bearing: a right that can be waived in a lease is not a right in this market.
- ⛔🔍 **No renewal obligation / no cause requirement** — confirm from statute, not inference.
- 🔍 **Decision 2130 adoption status** — draft appeared July 2025, eleven months late; never confirmed whether adopted.
- 🔍 **2026 draft model-contract regulations** — existence and status unconfirmed.
- 🔍 ***Mishpatim* article** — full text retrieved, but author, volume and year not captured.
- 🔍 **Context-unverified figures in `04-data.md`** — the 28.6% (2023) figure, the ~6% national rent-rise figure, and the ~6% long-term-rental share all need their period/population qualifiers checked against the source PDF.
- 🔍 **Press figures** — ~2 million renters and ~₪46bn/year are journalism; trace to the ministry document or drop.

### Research gaps

- ⬜ **Mobility and tenure data** — average tenancy duration, moving frequency, involuntary moves. The testimony's core claim (six moves in ten years) has **no prevalence evidence**. Expect this to be thin; if Israel does not collect it, say so — the absence is a finding and an argument for a landlord registry.
- ⬜ **Rent burden** — national and Jerusalem average rents; burden for non-young renters as the comparator that makes the 42% meaningful; OECD housing-cost overburden.
- ⬜ **Arnona and tenants** — statutory basis for tenant liability, Jerusalem payment terms, rates vs other cities. Municipality pages fetched, never mined.
- ⬜ **Transaction costs** — moving costs, broker-fee practice, VAT at 18%.
- ⬜ **Landlord structure** — households owning 2+ dwellings, Tax Authority rental-income data, 2026 exemption threshold.
- ⬜ **Comparative** — Germany, UK/Scotland, Singapore, plus ≥1 instructive failure.
- ⬜ **Domestic record** — prior attempts, failed bills, veto player.
- ⬜ **Mine the OECD Israel housing snapshot** — retrieved, never read.

---

## Public transport & the commute

**Stage 2 — research, 3 of 5 documents.** [Area README](./policy/public-transport/)

| Document | Status |
|----------|--------|
| `01-problem-statement.md` | ✅ |
| `02-israeli-law.md` | ✅ |
| `03-comparative.md` + 4 case studies | ✅ |
| `04-data.md` | ⛔⬜ not started |
| `05-domestic-record.md` | ⛔⬜ not started |

- ✅ Instructive-failure requirement satisfied — [Vienna](./policy/public-transport/research/comparative/vienna.md), whose Klimaticket ended with the price raised to ≈€461 from 1 January 2026.
- ⬜ Statistical annex: ridership, modal share, fare burden, punctuality, car dependency.
- ⬜ Domestic record: prior fare reforms, the enforcement regime, named veto player.

---

## Political accountability

**Stage 1 — testimony captured.** [Area README](./policy/political-accountability/) · ⬜ research not started.

## Citizens first

**Stage 1 — testimony captured.** [Area README](./policy/citizens-first/) · ⬜ research not started.

---

## Context layer

[Context README](./context/) · [matrices](./context/matrices/)

- ⬜ **`election-2026/`** — election date, dissolution trigger, procedural dates, lists, polling. Blocks all matrices.
- ⬜ **`knesset-25/`** — outgoing composition, coalition vs opposition, legislative record.
- ⬜ **`parties/`** — one profile per list; housing and transport policy **quoted from Hebrew originals**, not paraphrased.
- ⬜ **`matrices/rental-market.md`** — first matrix. Rows fixed before any platform is read.
- ⬜ **`matrices/public-transport.md`**

---

## Platform

⬜ Not started. Blocked until at least one policy area reaches stage 3.

---

## Infrastructure

- ✅ CBS statistics MCP server wired into repo and plugin — no API key required.
- ✅ Five-document stage 2 with `comparative-policy-research` and `domestic-policy-research` skills.
- ✅ `/compare-parties` command and matrix format.
- ⬜ Typst house template unexercised — no paper has been compiled yet. Expect template bugs on first real use.
- ⬜ No CI. A link-checker and a Typst compile check would catch the most likely breakages.

---

## Known weaknesses

Recorded openly rather than discovered by a critic.

1. **Prevalence evidence for forced moves is missing entirely.** The rental paper's emotional core is the frequency of involuntary moves, and there is currently no data on it. If it cannot be found, the paper must say so and argue from transaction costs instead.
2. **One household's testimony is doing a lot of framing work.** The methodology guards against this — testimony is evidence of experience, not prevalence — but the guard only holds if the data sections are actually completed.
3. **Counter-evidence is thin because the research is incomplete.** Only one substantial piece of counter-evidence has surfaced (the ~80% satisfaction figure). A finished evidence base should have more. Its absence signals immaturity, not strength.
4. **No paper has been compiled.** Everything downstream of stage 2 is untested, including the template.
