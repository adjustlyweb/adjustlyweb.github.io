Form primitives. `Field` is the labelled control; `LeadForm` is the assembled free-policy-review module.

```jsx
<Field label="Full name" name="name" required placeholder="Jordan Rivera" />
<Field label="Type of damage" as="select" required
  options={['Storm / hurricane','Water / flood','Fire / smoke']} />
<Field label="Email" type="email" error="Enter a valid email address" />
<Field label="What happened" as="textarea" optional hint="The more detail, the better." />

<LeadForm onSubmit={handleSubmit} />
<LeadForm inverse title="Talk to a licensed adjuster" submitLabel="Request a callback" />
```

- Labels are sentence case; mark optional fields with `optional`, required with `required`.
- `inverse` renders both on navy bands.
- **Compliance:** the default note keeps the offer free + no-obligation and states "not legal advice" — keep that language. Never add an outcome promise.
