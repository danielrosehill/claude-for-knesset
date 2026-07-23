---
policy-area: rental-market
document: 04-data
status: PARTIAL — salvaged from interrupted research run, 2026-07-23
last-verified: 2026-07-23
---

# Statistical annex — rental market

> **Status: incomplete.** This annex holds what was verified before the research run was stopped. It does **not** yet meet the stage-2 gate. Topics with no findings below were never reached, not searched-and-found-empty. See "Verification debt" and "Not yet researched".

## Verification debt

Nothing in the "Verified" sections below is invented; every figure carries a source. The debt is **coverage**, not accuracy:

- No CBS primary-series figures yet. The CBS MCP server is wired up and confirmed working, but only a headline-index sanity call was made (see §3). The rent-component series has not been pulled.
- Figures marked `[CONTEXT UNVERIFIED]` are correctly transcribed but their surrounding qualifiers (period, population, geography) were not confirmed. Do not cite these until checked against the source PDF.
- Several figures below come from a single secondary source (the Knesset RIC report). They are high-quality, but the underlying CBS tables have not been independently pulled.

---

## Primary source recovered

**Liran Kosman, *Analysis of the rental market of young people and young families* (ניתוח שוק השכירות של צעירים ושל משפחות צעירות), Knesset Research and Information Center (מרכז המחקר והמידע של הכנסת), 9 October 2024** (ז' בתשרי תשפ"ה). Approved by Ami Tzadik, Director of the Budgetary Oversight Department. Prepared at the request of MK Naama Lazimi, chair of the Special Committee for Youth Affairs, ahead of a committee discussion on 5 November 2024.
Full text retrieved: `https://fs.knesset.gov.il/globaldocs/MMM/d91230a8-2769-ef11-8163-005056aa4246/2_d91230a8-2769-ef11-8163-005056aa4246_11_20688.pdf`

This is a source of exactly the type the methodology prefers (Knesset RIC), and it is recent. Most figures below are from it — cited as **RIC 2024**.

---

## 1. Renter households — VERIFIED

| Figure | Value | Source |
|---|---|---|
| Share of Israeli households renting, 2022 | **28.1%** | RIC 2024 |
| OECD average, comparable basis | **~23.5%** | RIC 2024 |
| Share renting, 2013 | **24.3%** | RIC 2024 |
| Rented dwellings, absolute | **815,000** (~28.1% of all dwellings) | RIC 2024 |
| Share of renters aged ≤34 | **~39%** | RIC 2024 |
| Young families (head ≤34) renting | **~42%** | RIC 2024 |
| Non-young families renting | **~19%** | RIC 2024 |

**The trend is the headline finding: renting rose from 24.3% (2013) to 28.1% (2022)** — Israel moved from below to above the OECD average within a decade. This directly supports the testimony's framing that renting is not a transitional phase for a shrinking minority.

`[CONTEXT UNVERIFIED]` A figure of **28.6% for 2023** appears alongside a reference to declining rental yield; the exact referent needs checking against the PDF.

## 2. Rent burden — PARTIAL

| Figure | Value | Source |
|---|---|---|
| Share of income spent on rent, young renters | **~42%** | RIC 2024 |
| Highest rent, 2.5–3 room apartment, Tel Aviv, early 2024 | **~₪6,800/month** | RIC 2024 |

`[CONTEXT UNVERIFIED]` Annual rent increases cited as ~8.1% (Kfar Saba), ~7% (Jerusalem and Tel Aviv), ~6% (national average) — the period these cover was not confirmed.

**Not found yet:** national average rent; Jerusalem average rent; OECD housing-cost-overburden comparison; rent burden for non-young renters (needed as the comparator that makes the 42% meaningful).

### 2a. Rent burden — triangulation (REQUIRED ANALYSIS, NOT YET DONE)

The single 42% figure is a survey self-report from one source. It should not carry the paper alone. The more defensible approach is to estimate rent burden by **independent routes and compare them** — where the estimates converge, confidence is high; where they diverge, the divergence is itself a finding about who is being measured.

**Route A — direct survey.** CBS Household Expenditure Survey: reported rent expenditure ÷ reported net income, for renter households. (RIC 2024's 42% for young renters is a derivative of this route.)

**Route B — computed from market rents and incomes.** Median market rent for a given dwelling size and city ÷ median net household income for a comparable household in that city. Uses CBS rent levels and CBS income data as separate inputs.

**Route C — index divergence over time.** The CBS rent index versus a wage or household-income index, both rebased to a common year. This measures *change* in burden rather than its level, and it is the cheapest route — both series are retrievable, and the rent index is available directly through the CBS MCP server.

Routes A and B answer "how heavy is the burden"; route C answers "is it getting heavier". The paper needs both.

**The arithmetic constraint that makes this checkable.** Burden, rent, and income form an identity: `burden = rent ÷ income`. Any two pin the third. So a stated burden and a stated rent imply an income, and that implied income can be sanity-checked against known income data. If the implied income is implausible, one of the inputs is measuring a different population than assumed.

**The trap to avoid.** Do not mix a national burden figure with a city-specific rent — e.g. combining RIC's national 42% for young renters with the ~₪6,800 Tel Aviv figure implies a household income that describes neither population. Every triangulation must hold **geography, household type, and year** constant across its inputs, and state them.

**Interpreting divergence.** If routes A and B disagree materially, candidate explanations, each testable:
- Survey income is net and self-reported; market-rent data is gross and listing-based — a definitional gap, not a real one.
- Listing rents lead sitting-tenant rents, since in-tenancy increases lag new-lease rents. **This gap is itself the finding**: it measures what a tenant loses by being forced to move, which is precisely the testimony's claim. A large A–B divergence would be direct evidence for the paper's core argument rather than a nuisance.
- Undeclared rental income depresses reported rent in surveys — plausible in Israel given the tax exemption threshold, and a reason to treat route A as a *lower* bound.

**Data still required:** CBS net household income by decile, household type, and city; CBS median market rents by city and dwelling size; a wage or income index spanning the same 2008–2024 window as the rent index. None of these were obtained. Route C is the cheapest to complete first and should be attempted next, since the rent index is already one MCP call away.

## 3. Rent and price trends — PARTIAL

| Figure | Value | Source |
|---|---|---|
| Rent index growth, 2008–2024 | **~61%** | RIC 2024 |
| Housing price index growth, 2008–2024 | **~195%** | RIC 2024 |

That divergence — prices rising roughly three times as fast as rents over sixteen years — is the central macro fact for this policy area, and it cuts in a direction the testimony does not anticipate. It means the *purchase* market, not the rental market, is where the price explosion happened. A paper arguing rents are the crisis must engage with this honestly: the tenant's problem is better characterised as **insecurity and transaction costs** than as rent levels outrunning everything else.

### 3a. Transaction costs of renting — CBS PRIMARY DATA — **KEY FINDING**

Retrieved directly from the CBS index API via the `israel-statistics` MCP server, using CBS's **official linkage calculator** (`get_index_calculator`), which chains across base-period changes. Window: **15 January 2015 → 15 November 2025**. The end date deliberately precedes the provisional window (2025-12 to 2026-05) flagged by CBS, so these are final values.

| Index | CBS code | Change over the decade |
|---|---|---|
| **Other housing expenses — brokerage, contract, insurance etc.** (הוצאות דיור אחרות) | **120510** | **+73.4%** |
| Housing (דיור) | 120450 | +35.4% |
| Consumer Price Index — General | 120010 | +17.9% |

*Calculator internals for reproducibility: for 120510, CBS linked from index date 2014-11 (value 106) to 2025-09 (value 114.4), chaining coefficient 1.607, base "Average 2012"; ₪100 → ₪173.44.*

**Why this matters more than any other figure gathered.** The CPI sub-index that measures precisely what the testimony describes — brokerage fees, contract costs, insurance, the overheads of *entering* a tenancy rather than occupying one — rose **more than four times faster than general inflation** and **more than twice as fast as housing costs generally**.

This reframes the policy area on primary data rather than anecdote. Combined with RIC 2024's finding that rents (+61%) badly lagged purchase prices (+195%) over 2008–2024, the picture is consistent and specific:

> The Israeli tenant's worsening position over the last decade is driven less by the monthly rent than by **the cost of the transaction** — and the transaction recurs every time a tenancy ends. A policy that reduces forced moves, or reduces the cost of each move, attacks the fastest-growing component of the burden directly.

That is a sharper and better-evidenced thesis than "rents are too high", and it is the argument the paper should make.

**Caveats to state when citing.** The sub-index bundles brokerage with contract and insurance costs and CBS does not decompose it publicly here, so it cannot be attributed to broker fees alone. Its CPI weight is small, so it moves the headline index very little — this is a statement about *the cost of moving*, not about aggregate inflation. And it is an index of prices, not of how often households pay them; frequency of moves is still unmeasured (see §4).

**Also confirmed** (headline snapshot, `get_main_indices`, retrieved 2026-07-23, June 2026 data, base average 2024): general CPI `120010` = 104.8; index excluding housing `110040` = 103.7. Annual changes to June 2026: `120510` **+7.6%**, `120450` +4.2% — the transaction-cost gap is still widening, not a historical artefact.

## 4. Mobility / tenure — NOT RESEARCHED

No data gathered. The RIC report does describe the *mechanism* qualitatively (see `02-israeli-law.md`), but no figures on tenancy duration, moving frequency, or involuntary moves were obtained. **This is the weakest link in the evidence base and the one most load-bearing for the testimony**, whose core claim is six moves in ten years. Expect this data to be thin or absent — if Israel does not collect it, that absence is itself a finding worth stating.

## 5. Landlord structure — PARTIAL

| Figure | Value | Source |
|---|---|---|
| Institutional rental as share of all rental dwellings | **<2%** | RIC 2024 |
| Long-term rental as share of dwelling marketing | **~6%** | RIC 2024 `[CONTEXT UNVERIFIED]` |
| Institutional programme: share let to eligible non-owners at 20% below market | **25% of units** | RIC 2024 |

**Not found yet:** households owning 2+ dwellings; Tax Authority rental-income data; the 2026 rental-income exemption threshold.

## 6. Jerusalem specifics — NOT RESEARCHED

Municipality Arnona pages were fetched but not yet mined. No rate comparison, no payment-terms confirmation.

## 7. Transaction costs of moving — NOT RESEARCHED

No figures. VAT rate at 18% (from January 2025) not independently confirmed in this run.

## 8. Supply — PARTIAL, JOURNALISM ONLY

Ministry of Construction and Housing plan reported as targeting **40,000 new rental units by 2030**, with the rental sector described as serving about a third of the public (~2 million renters) and worth ~₪46bn/year.
**Source: journalism (Calcalist / Israel Hayom), flagged as such.** The ~2 million and ~₪46bn figures are press characterisations and should not be cited until traced to the ministry's own document.

---

## Counter-evidence — must be carried into the paper

**~80% of renters reported satisfaction with their dwelling in 2022, with no notable difference between young and non-young renters (RIC 2024).**

This is the strongest single piece of evidence against the paper's thesis and the methodology requires it in the main text, not a footnote. Reconciling it honestly is the paper's central analytical task. Candidate reconciliations, none yet evidenced:

- Satisfaction with the *dwelling* is not security of *tenure* — the survey may not ask what the paper is about.
- Survivorship: tenants in bad tenancies move, and are surveyed in their new, better dwelling.
- The harm is concentrated in a minority; 80% satisfaction is compatible with 20% of ~815,000 households — roughly 160,000 — in difficulty.

The third framing is likely the honest one, and it *weakens* the "everyone is suffering" register of the testimony while leaving a serious problem intact at a still-large scale. The paper should make that trade explicitly rather than quietly dropping the 80%.

---

## Not yet researched

Topics 4, 6, 7 entirely; the CBS rent series; all Bank of Israel sources; OECD housing-cost overburden. The OECD *Housing Sector Country Snapshot: Israel* was retrieved but not mined.

## Sources

- Kosman, Liran. *ניתוח שוק השכירות של צעירים ושל משפחות צעירות*. Knesset RIC, 9 October 2024. [PDF](https://fs.knesset.gov.il/globaldocs/MMM/d91230a8-2769-ef11-8163-005056aa4246/2_d91230a8-2769-ef11-8163-005056aa4246_11_20688.pdf)
- OECD, *Affordable Housing Database*, Indicator PH6.1 (Rental regulation), updated 26 June 2024 — cited by RIC 2024; not independently retrieved.
- OECD, *Housing Sector Country Snapshot: Israel* — retrieved, not yet mined.
- CBS (הלמ"ס) index API via `israel-statistics` MCP: `get_main_indices`, retrieved 2026-07-23, indices dated June 2026.
- Calcalist / Israel Hayom coverage of the Housing Ministry rental plan — **journalism**.
