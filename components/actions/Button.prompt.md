Adjustly's button — primary (Adjustly Blue fill) for the single most important action, secondary (navy outline) for alternatives, text for quiet inline actions, inverse (white) on navy sections.

```jsx
<Button variant="primary" icon="arrow-right" iconPosition="right" href="/start">
  Get a free policy review
</Button>
<Button variant="secondary">How it works</Button>
<Button variant="text" icon="phone">Talk to an adjuster</Button>
```

- Labels are verb-first and sentence case. Never shout, never use exclamation marks.
- One primary button per view; pair with a secondary or text button, not two primaries.
- `icon` takes a Lucide name; the page must load Lucide and the button auto-calls `createIcons()`.
- Sizes: `sm` / `md` (default) / `lg` (hero CTAs). `fullWidth` for mobile and form submits.
- Use `variant="inverse"` inside navy bands/footer.
