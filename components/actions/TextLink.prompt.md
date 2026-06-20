Quiet inline link with a trailing arrow that nudges on hover — for "read more" affordances and card footers.

```jsx
<TextLink href="/guides/water-damage">Read the water-damage guide</TextLink>
<TextLink variant="inverse" icon="arrow-up-right">Verify our license</TextLink>
```

- `variant="inverse"` on navy backgrounds; `quiet` when blue would compete with a nearby CTA.
- Pass `icon=""` to drop the arrow.
