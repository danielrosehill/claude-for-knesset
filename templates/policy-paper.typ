// Claude for Knesset — policy paper house template
// Usage (from a paper's .typ file):
//   #import "../../../templates/policy-paper.typ": policy-paper, recommendation, tradeoff
//   #show: policy-paper.with(
//     title: [Fixing the Rental Market],
//     subtitle: [A program for tenancy-law reform],
//     paper-no: "PP-001",
//     date: datetime(year: 2026, month: 7, day: 23),
//     abstract: [One-paragraph executive framing.],
//     key-findings: ([Finding one], [Finding two]),
//   )

#let brand = rgb("#1a3a5c")     // deep institutional blue
#let accent = rgb("#c8a25a")    // muted gold rule
#let ink = rgb("#1c1c1c")

// IBM Plex first (includes Hebrew coverage via Plex Sans Hebrew), then fallbacks
#let serif-stack = ("IBM Plex Serif", "IBM Plex Sans Hebrew", "Libertinus Serif", "Noto Serif", "DejaVu Serif")
#let sans-stack = ("IBM Plex Sans", "IBM Plex Sans Hebrew", "Noto Sans", "DejaVu Sans")

#let policy-paper(
  title: [Untitled paper],
  subtitle: none,
  paper-no: "PP-000",
  date: none,
  series: [Claude for Knesset · Policy Papers],
  abstract: none,
  key-findings: (),
  body,
) = {
  let datefmt = if date != none { date.display("[day padding:none] [month repr:long] [year]") } else { "" }

  set document(title: title, author: "Claude for Knesset")
  set text(font: serif-stack, size: 10.5pt, fill: ink)
  set par(justify: true, leading: 0.72em)

  set page(
    paper: "a4",
    margin: (top: 2.6cm, bottom: 2.4cm, x: 2.4cm),
    header: context {
      if counter(page).get().first() > 1 {
        set text(size: 8pt, fill: brand.lighten(20%), tracking: 0.08em)
        upper(series)
        h(1fr)
        upper(paper-no)
        v(-0.5em)
        line(length: 100%, stroke: 0.5pt + accent)
      }
    },
    footer: context {
      set text(size: 8pt, fill: ink.lighten(35%))
      line(length: 100%, stroke: 0.5pt + silver)
      v(-0.6em)
      [Draft for public comment — not the platform of any registered party]
      h(1fr)
      counter(page).display("1")
    },
  )

  set heading(numbering: "1.1")
  show heading.where(level: 1): it => {
    v(1.2em)
    block(text(font: sans-stack, size: 14pt, weight: "bold", fill: brand, it))
    v(0.2em)
  }
  show heading.where(level: 2): it => {
    v(0.8em)
    block(text(font: sans-stack, size: 11.5pt, weight: "bold", fill: brand.lighten(15%), it))
  }
  show link: set text(fill: brand)

  // ── Title block ──────────────────────────────────────────────
  block(width: 100%)[
    #set text(font: sans-stack)
    #text(size: 8.5pt, fill: brand, tracking: 0.14em)[#upper(series) · #upper(paper-no) · #upper(datefmt)]
    #v(0.4em)
    #line(length: 100%, stroke: 2.5pt + brand)
    #v(0.9em)
    #text(size: 24pt, weight: "bold", fill: brand)[#title]
    #if subtitle != none [
      #v(0.35em)
      #text(size: 13pt, fill: ink.lighten(25%), style: "italic")[#subtitle]
    ]
    #v(0.6em)
    #line(length: 30%, stroke: 1.5pt + accent)
  ]
  v(1.2em)

  // ── Executive summary ────────────────────────────────────────
  if abstract != none {
    block(
      width: 100%,
      fill: brand.lighten(94%),
      stroke: (left: 3pt + accent),
      inset: (x: 1.1em, y: 0.9em),
      radius: (right: 3pt),
    )[
      #text(font: sans-stack, size: 9pt, weight: "bold", fill: brand, tracking: 0.1em)[EXECUTIVE SUMMARY]
      #v(0.4em)
      #abstract
      #if key-findings.len() > 0 [
        #v(0.5em)
        #for f in key-findings [
          #box(baseline: -0.1em, circle(radius: 2pt, fill: accent)) #h(0.5em) #f \
        ]
      ]
    ]
    v(1.4em)
  }

  body
}

// Boxed, numbered recommendation
#let rec-counter = counter("recommendation")
#let recommendation(body) = {
  rec-counter.step()
  block(
    width: 100%,
    stroke: 0.75pt + brand,
    inset: (x: 1em, y: 0.8em),
    radius: 3pt,
    breakable: false,
  )[
    #text(font: sans-stack, size: 9pt, weight: "bold", fill: brand)[RECOMMENDATION #context rec-counter.display()]
    #v(0.3em)
    #body
  ]
}

// Steelmanned objection + response
#let tradeoff(objection, response) = block(
  width: 100%,
  fill: luma(97%),
  inset: (x: 1em, y: 0.8em),
  radius: 3pt,
)[
  #text(weight: "bold", style: "italic")[Objection: ] #emph(objection)
  #v(0.4em)
  #text(weight: "bold")[Response: ] #response
]
