# Policy area: Environmental quality — air, noise & monitoring

**Pipeline stage:** 1 — testimony captured. Research not yet started.

| Stage | Status |
|-------|--------|
| 1. Testimony | ✅ [2026-07-23 — The Air We Breathe and the Noise We Live In](../../testimonies/2026-07-23-environmental-quality.md) |
| 2. Research (`research/`) | ⬜ pending — run `/research-policy environmental-quality` |
| 3. Paper (`paper/`) | ⬜ pending |
| 4. Platform section | ⬜ pending |

## Framing note

Three claims sit inside this testimony, and they are not the same kind of claim. The research must keep them apart:

1. **Air quality is worse than it should be, and some causes are known and controllable.** This is an emissions and transport-policy question — and it overlaps directly with [public transport](../public-transport/), where the modal-shift case is already being built. The Shabbat traffic drop is the natural-experiment hook.
2. **Construction noise is an unmanaged health hazard with no procedural transparency.** This is the strongest and most distinctive plank: not "noise is bad" but that a resident subjected to months of excavation cannot find out what was permitted, what mitigation was conditioned on the permit, or whether anyone checks. That is a **process failure**, and process failures have cheap fixes.
3. **Monitoring data is too coarse and too closed.** This is the same argument as [open government data](../open-government-data/), applied to a specific dataset the testimony actually wants. Handle the general access principle there; handle the environmental instrument here, and cross-reference rather than duplicate.

The deliverable to aim at is a **permit-to-monitor-to-publish chain**: a construction noise consent regime with published conditions, monitoring that produces data at a useful resolution, and that data available by open API. Each link is weak today; the plank is only credible if all three are proposed together.

## Scope notes for the research stage

Carried over from the testimony — the research must cover at minimum:

**The Israeli system as it stands**
- **Clean Air Law, 5768-2008** (חוק אוויר נקי) — target and threshold values, the national plan duty, permit conditions for emitting facilities, and enforcement powers. Cite provisions precisely; `[VERIFY]` the current values against the operative regulations rather than the original text.
- **Abatement of Nuisances Law, 5721-1961** (החוק למניעת מפגעים, "Kanovich Law") and its noise regulations — in particular the unreasonable-noise regulations and the **construction-site noise** regulations (permitted hours, decibel limits, and what actually triggers enforcement). `[VERIFY]` regulation names, years, and current limits.
- **Planning and Building Law, 5725-1965** — how a building or excavation permit is issued, whether noise mitigation can be conditioned on it, whether those conditions are published, and what a neighbouring resident is entitled to be told or to object to. This is the crux of the Jerusalem complaint and must be nailed down precisely.
- **Enforcement architecture** — the split between the Ministry of Environmental Protection, municipal environmental units / environmental associations (איגודי ערים לאיכות הסביבה), and the police. Who is actually on the hook for a noisy excavation at 06:30, and how many enforcement actions result. The likely finding is a responsibility gap, not an absent rule.
- **The national air monitoring array** (המערך הארצי לניטור אוויר) — station count and geographic coverage, pollutants measured, temporal resolution, and how data is exposed. Test the access claim directly: is there a documented public API, does it require registration, is bulk historical download possible, are the terms machine-agent-friendly? Record the answer with evidence, since the testimony's core factual assertion is about access.
- **The emissions register / PRTR** (Environmental Protection (Emissions and Transfers to the Environment Register) Law, 5772-2012) — what it covers and its access terms. `[VERIFY]` name and year.
- **Noise monitoring** — establish whether any systematic national or municipal noise monitoring exists at all. If it does not, that absence is itself the headline finding and should be stated plainly.
- **The open-banking comparison the testimony draws** — Israel's financial-information-service regime (Financial Information Service Law, 5782-2021, `[VERIFY]`) as a domestic precedent that the state *can* mandate standardised, authenticated-but-open API access when it chooses to. This is a strong internal-consistency argument: the standard exists; it was simply never applied to environmental data.

**Quantified problem** *(testimony is evidence of experience, not prevalence — every claim below needs data)*
- **The comparison claim.** Israel vs. European cities vs. New York on PM2.5, PM10, NO₂ and ozone, using like-for-like sources (EEA, WHO ambient air quality database, national monitoring). `[UNVERIFIED]` and genuinely uncertain: Israeli PM levels are heavily influenced by natural dust events, and the honest finding may be that Israel is worse on PM but comparable or better on some traffic-linked pollutants. **Report what the data says, including if it undercuts the testimony** — separating natural dust from anthropogenic sources is the analytically serious move and strengthens rather than weakens the traffic argument.
- **The Shabbat natural experiment.** Weekday-vs-Shabbat pollutant differentials at Jerusalem monitoring stations, ideally with the Yom Kippur near-zero-traffic case as the extreme point. There is existing Israeli literature on this; find it before generating anything. This is the single most persuasive domestic evidence available for the traffic-emissions link and deserves its own worked-up section.
- **Health burden** — attributable mortality and morbidity from air pollution in Israel, and the health effects of chronic noise exposure (cardiovascular, sleep, cognitive development in children). WHO, OECD, Ministry of Health, and the WHO *Environmental Noise Guidelines for the European Region* (2018) are the anchors.
- **Construction intensity in Jerusalem** — housing starts, active permits, and excavation volume, plus the light-rail and major-infrastructure works. CBS construction statistics and the Jerusalem municipality. This substantiates "most of the country, especially Jerusalem."
- **Complaint data** — noise complaints to the municipality, the environmental unit, and the police; how many produce an enforcement action. The gap between complaints and actions is the process-failure metric.
- **Monitoring coverage** — stations per capita and per km² against comparators; how many Jerusalem neighbourhoods are more than *n* km from a station.

**Comparative review**
- **EU Environmental Noise Directive (2002/49/EC)** — the most transferable instrument on this side: mandatory strategic **noise maps** and public **action plans** for large agglomerations, reviewed every five years, with public consultation built in. It converts noise from a complaint into a planning obligation.
- **United Kingdom — Control of Pollution Act 1974, ss. 60–61.** The specific mechanism the testimony is missing: a contractor can seek **prior consent** for construction works specifying hours, methods and noise limits, and the local authority can impose them. Consents are on a public register. This is the direct answer to "no clarity about authorisation or mitigation." `[VERIFY]` section numbers and current practice.
- **New York City Noise Code and construction noise mitigation plans** — every site must have a plan, on site and available. Useful because the testimony explicitly benchmarks against New York.
- **Hong Kong construction noise permits** — a dense-city permit regime with published conditions; a good comparator for Jerusalem's density and topography.
- **EU Ambient Air Quality Directive** (2008/50/EC and the 2024 revision) — binding limit values, mandatory air quality plans when exceeded, and, critically, **public information duties including real-time data**. Also the enforcement precedent: member states have been taken to the CJEU over persistent exceedances. A duty with a remedy attached.
- **Access models to copy directly** — the EEA air quality download service, **OpenAQ**, Breathe London, and the US EPA AirNow API. These establish that unauthenticated bulk access to national air data is normal practice, not a radical ask.
- **At least one instructive failure** is required by the stage gate. Candidates: low-emission zones that shifted rather than reduced emissions, noise action plans produced and then shelved without funding, or monitoring networks whose coverage was too sparse to support enforcement.

**Reform options to evaluate (each costed and steelmanned)**
- **A construction noise consent regime** on the s.61 model: no major excavation without published, enforceable conditions on hours, methods, and limits — with the permit, its conditions, and its duration published on a public register searchable by address before works begin.
- **A duty to notify affected residents** — defined radius, defined lead time, named contact, expected end date. Cheap, and it addresses the testimony's actual grievance, which is as much about being kept in the dark as about the noise.
- **Mandatory continuous noise monitoring at large sites**, at the developer's expense, streamed publicly. Polluter-pays, and it removes the enforcement-capacity objection.
- **Strategic noise maps and action plans** for Jerusalem, Tel Aviv and Haifa on the EU model, on a statutory cycle.
- **Denser air monitoring** with a stated coverage standard, including low-cost sensor networks as a supplement — with an explicit position on their accuracy limits, since this is where such proposals are usually attacked.
- **An open API mandate for environmental data**: unauthenticated read access, documented, versioned, bulk historical download, open licence, explicitly permitting automated and AI-agent access — drafted to the standard already imposed on the banks. Cross-reference [open government data](../open-government-data/); this should be the worked example there.
- **Traffic-side measures** carried over from the Shabbat finding: low-emission zones, freight and bus fleet standards, and modal shift — coordinate with [public transport](../public-transport/) rather than proposing separately.

**Trade-offs that must be answered**
- **Housing supply.** Israel has a housing shortage and this platform already argues the rental market is broken. Constraining construction hours and methods raises build costs and slows delivery. This is the strongest objection to the noise plank and it must be met head-on, with a cost estimate — not by asserting that both goals are compatible.
- **Infrastructure works are the loudest and the most valuable.** Light rail and grid works are exactly what a pro-public-transport platform wants built. Say how the regime treats them: no exemption, a time-limited exemption with compensation, or something else.
- **Natural dust confounds the air quality story.** If a large share of PM is regional dust, policy levers do less than the headline number implies. State the anthropogenic share and set targets against that, or the whole plank is attackable.
- **The Shabbat finding is politically loaded.** The evidence is about traffic volume, not about religious observance, and must be framed strictly as a natural experiment. Any proposal that reads as restricting weekday driving on a Shabbat analogy will be attacked from several directions at once; the defensible use is *causal evidence for modal shift*, nothing more.
- **Open environmental data enables litigation and NIMBYism.** Publishing permit conditions and live monitoring will be used to block projects, including projects this platform supports. That is a real cost of transparency and should be accepted openly rather than denied.
- **Monitoring costs and who pays.** Denser networks and site-level monitoring are recurring expenditure. Developer-funded monitoring raises a credibility problem — self-reported data — which needs an audit answer.
- **The unauthenticated-access ask needs an operational answer.** Rate limits, abuse, and cost recovery are the standard objections to no-auth public APIs. The response is that these are solved problems at the CDN layer, and that authentication is a policy choice not a technical necessity — but the paper has to say so explicitly.
