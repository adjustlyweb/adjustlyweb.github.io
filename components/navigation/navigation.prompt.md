Navigation & wayfinding: the site shell plus the journey/trust modules.

```jsx
<SiteHeader currentHref="#services" ctaLabel="Free policy review" phone="(800) 555-0142" />

<TrustBar />               // owners-not-insurers · licensed · network · free review
<TrustBar inverse center /> // on navy

<ProcessTracker current={1} steps={[
  { eyebrow:'Step 01', title:'Protect', desc:'Stabilize and document the loss safely.', icon:'shield' },
  { eyebrow:'Step 02', title:'Prepare', desc:'We build and value the full claim.', icon:'file-text' },
  { eyebrow:'Step 03', title:'Recover', desc:'We advocate until the claim is resolved.', icon:'check-circle' },
]} />

<FaqAccordion items={[
  { q:'What does a public adjuster do?', a:'We represent you — the property owner — not your insurer…' },
  { q:'Is the policy review really free?', a:'Yes. There is no cost and no obligation.' },
]} />

<SiteFooter licenseNumber="PA-1098842" licenseState="Florida Public Adjuster" />
```

- **SiteHeader / SiteFooter** are the page shell; the footer uses the WHITE logo and carries the license badge + compliance disclaimer — keep that text.
- **ProcessTracker** maps to Protect · Prepare · Recover; use `orientation="horizontal"` across a band.
- **FaqAccordion** is keyboard-accessible; answers may be strings or JSX.
- **TrustBar** — factual claims only.
