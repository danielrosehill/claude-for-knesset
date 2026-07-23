# Policy area: Open government data & transparency

**Pipeline stage:** 1 — testimony captured. Research not yet started.

| Stage | Status |
|-------|--------|
| 1. Testimony | ✅ [2026-07-23 — The Data the Government Chooses to Publish](../../testimonies/2026-07-23-open-government-data.md) |
| 2. Research (`research/`) | ⬜ pending — run `/research-policy open-government-data` |
| 3. Paper (`paper/`) | ⬜ pending |
| 4. Platform section | ⬜ pending |

## Framing note

The complaint here is **not** that Israel has no open data policy. It has one: a freedom of information statute, a national data portal, published licensing terms. The complaint is that the portfolio of what gets published is decoupled from what anyone would use — that the state has built the infrastructure of transparency and stocked it with datasets that hold no one to account.

That makes this a **supply-and-demand mismatch problem**, not a technology problem, and the research must be framed accordingly. The deliverable is not "build a better portal." Israel already has a portal. The deliverable is a mechanism that forces publication of high-value data — a statutory duty, a designated list, a named official who answers for gaps, and a standing channel to the actual user community.

This area also sits directly beside [political accountability](../political-accountability/): data you cannot get is a lever you cannot pull. Cross-reference the two rather than duplicating them — accountability covers *who answers to whom*, this area covers *what they must show*.

## Scope notes for the research stage

Carried over from the testimony — the research must cover at minimum:

**The Israeli system as it stands**
- **Freedom of Information Law, 5758-1998** (חוק חופש המידע) — scope, the exemptions in ss. 8–9, response deadlines, fees, and the appeal route. Cite provisions precisely. Note which bodies are *not* covered.
- The **Freedom of Information Unit** at the Ministry of Justice (היחידה לחופש המידע) — its powers, whether they are advisory or binding, and its annual reports on request volumes, refusals, and deadline compliance.
- The **government open-data resolution(s)** and the legal status of `data.gov.il` — whether publication is a statutory duty or an administrative undertaking. `[VERIFY]` the specific government decision numbers and years before citing.
- The **Government ICT Authority / Digital Israel** mandate over the portal, and which body owns dataset selection. Whether any published methodology governs what gets listed.
- Licensing terms in force on published datasets — whether they meet an open-licence standard or impose reuse restrictions.
- **CBS** (הלמ"ס) as a parallel and generally stronger channel: what it publishes, at what geographic granularity, and where its API and this platform's own [israel-statistics MCP server](../../plugins/policy-development-assistant/) already provide better access than the open-data portal does. The contrast is itself a finding.

**Quantified problem** *(testimony is evidence of experience, not prevalence — every claim below needs data)*
- **Audit the portal's actual contents.** This is the central empirical task: pull the full dataset inventory from `data.gov.il`, and code it by publishing ministry, subject, last-update date, format (machine-readable vs. PDF), and download/usage counts where exposed. The testimony's examples — Steimatzky branches, businesses operating at Ben Gurion Airport — are `[UNVERIFIED]` until confirmed against the live catalogue, and should be reported as illustrations only if they survive checking. The defensible finding is the *distribution*: what share of datasets are stale, non-machine-readable, or trivial.
- **Name the absences.** Build the negative list: budget execution at line-item granularity, ministry procurement and contract awards, tender outcomes, planning and building permits, municipal finances, health system performance, education outcomes by school, court and enforcement statistics. For each, state whether it is unpublished, published in unusable form, or published elsewhere. `[UNVERIFIED]` until checked.
- **The Jerusalem case.** The testimony's specific ask — jobs created, number of firms, startups, venture capital flows, at city level. Establish what exists (CBS business demography, Israel Innovation Authority reports, Jerusalem municipality, JVP/Start-Up Nation Central data) and what is only available commercially. The gap between "the state knows this" and "the public can get this" is the finding.
- **FOI performance data** — request volumes, refusal rates, average response time versus statutory deadline, litigation outcomes. Ministry of Justice annual reports and the Movement for Freedom of Information (התנועה לחופש המידע) are the sources; the latter is an advocacy body and should be flagged as such.
- **International benchmarking** — Israel's placement in the OECD **OURdata Index**, the Global Open Data Index / Open Data Barometer, and any relevant OECD *Government at a Glance* series.
- **State Comptroller reports** on government information management and FOI compliance — likely the strongest domestic source for stage `05-domestic-record.md`.

**Comparative review** — how other democracies force publication rather than requesting it
- **European Union — Open Data Directive (2019/1024) and the High-Value Datasets Implementing Regulation.** The single most transferable instrument: a *legally designated list* of dataset categories (geospatial, earth observation, meteorological, statistics, companies, mobility) that member states must publish free, machine-readable, and via API. This is the answer to "who decides what's worth publishing."
- **United States — OPEN Government Data Act (2018, Title II of the Foundations for Evidence-Based Policymaking Act).** Statutory default of open and machine-readable, mandatory agency data inventories, and a named Chief Data Officer per agency. The accountable-official model.
- **United Kingdom** — Companies House free company data, ONS geographic granularity, and `data.gov.uk`. Also the instructive partial failure: portal proliferation and dataset rot.
- **Estonia / Ukraine** — a small-state model and a high-corruption-pressure model respectively; Ukraine's ProZorro procurement transparency is the clearest case of open data used as an anti-corruption instrument rather than a publishing exercise.
- **At least one instructive failure** is required by the stage gate. Candidates: portals with high dataset counts and negligible use; open-data initiatives that lapsed when political sponsorship ended. Establish *why* they failed — almost always no statutory duty and no user constituency.

**Reform options to evaluate (each costed and steelmanned)**
- A **statutory high-value dataset list** on the EU model, set in regulation and revised on a fixed cycle — publication by default, exemption by justification.
- A **named accountable official** per ministry (Chief Data Officer equivalent) with a published inventory and an annual compliance report to the Knesset.
- **Machine-readability and API standards** with a deadline, ending PDF-as-publication.
- A **standing user council** — journalists, think tanks, academics, civil society — with a formal role in setting the publication list. This is the direct answer to the testimony's core point that nobody asked the users.
- **Geographic granularity as a requirement**, so city-level economic data exists for Jerusalem and everywhere else, not only national aggregates.
- **FOI reform** — narrowing exemptions, fee caps, deadline enforcement with consequences, and a binding information commissioner rather than an advisory unit.
- **Publish-by-default for spending**: budget execution, contracts, and tenders as structured data at source, on the ProZorro logic.
- Levers available **without primary legislation** — a government resolution, ministry-level directives, or a Knesset committee reporting requirement — since passability is the binding constraint.

**Trade-offs that must be answered**
- **Security and the exemptions.** Israel has a genuinely larger legitimate secrecy domain than most comparators. A serious proposal states where the line falls and accepts that some categories stay closed — rather than pretending the exemptions are all pretextual.
- **Privacy and re-identification.** Granular municipal, health, and education data is exactly the data that re-identifies people. The proposal must carry a disclosure-control standard, not wave at one.
- **Cost and capacity.** Machine-readable publication at scale is real ongoing expenditure in small ministries with weak IT. Cost it, and say who pays.
- **Gaming.** Published performance metrics get managed rather than met — school-level results and hospital outcomes are the standard cautionary cases.
- **Who actually benefits.** Open data disproportionately serves well-resourced users — commercial analysts, large NGOs, national media. The equity objection is that transparency reform can be a subsidy to the already-capable; answer it or accept it explicitly.
- **The passability question.** Publication mandates constrain the ministries that would have to implement them, and this platform's own framing says governments do not volunteer accountability. Say why this would pass, and what the minimum viable version is if it does not.
