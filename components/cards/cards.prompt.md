Four editorial card types. Compose them in asymmetric grids — never a centered row of three identical cards.

```jsx
<ServiceCard icon="droplets" title="Water & flood claims" href="/services/water">
  We document hidden moisture, value the loss correctly, and handle the insurer.
</ServiceCard>

<BenefitCard number="01" title="We work for you">
  Adjustly's licensed public adjusters represent property owners — never insurers.
</BenefitCard>

<ArticleCard category="Guide" title="What to do in the first 48 hours after water damage"
  excerpt="Document first, mitigate second, call your adjuster third." readTime="6 min read"
  markSrc="assets/logo/adjustly-mark.png" href="/guides/water-48h" />

<SpecialtyCard icon="cloud-lightning" title="Storm & hurricane" tag="Nationwide network">
  Wind, hail, and named-storm damage assessed by local restoration specialists.
</SpecialtyCard>
```

- **ServiceCard** — primary offerings; icon tile + serif title; hover top-accent.
- **BenefitCard** — value props or numbered process steps; top hairline rule; `inverse` on navy.
- **ArticleCard** — education/guides; supply real cool-toned photography via `image`, else `markSrc` watermark.
- **SpecialtyCard** — restoration-network perils; compact, left sky rule.
- Keep tags factual — no invented coverage numbers or outcomes.
