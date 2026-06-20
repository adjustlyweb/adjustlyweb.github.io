import React from 'react';
import { Field } from './Field.jsx';
import { Button } from '../actions/Button.jsx';

const CSS = `
.adj-leadform {
  background: var(--surface-card); border: var(--border-1); border-radius: var(--radius-lg);
  padding: clamp(20px, 3vw, 36px); box-shadow: var(--shadow-md);
}
.adj-leadform--inverse { background: var(--navy-800); border-color: var(--border-on-inverse); box-shadow: none; }
.adj-leadform__eyebrow { font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: var(--ls-eyebrow);
  text-transform: uppercase; color: var(--accent-strong); display:flex; align-items:center; gap:8px; margin-bottom: 10px; }
.adj-leadform--inverse .adj-leadform__eyebrow { color: var(--sky-300); }
.adj-leadform__title { font-family: var(--font-display); font-size: var(--fs-h3); font-weight: 600; color: var(--text-brand);
  margin: 0 0 6px; line-height: 1.15; }
.adj-leadform--inverse .adj-leadform__title { color: #fff; }
.adj-leadform__sub { color: var(--slate-600); margin: 0 0 var(--space-5); font-size: var(--fs-base); }
.adj-leadform--inverse .adj-leadform__sub { color: var(--text-on-inverse-muted); }
.adj-leadform__grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
.adj-leadform__grid > .adj-field--full { grid-column: 1 / -1; }
.adj-leadform__actions { margin-top: var(--space-5); display: flex; flex-direction: column; gap: var(--space-3); }
.adj-leadform__note { font-size: var(--fs-xs); color: var(--slate-500); line-height: 1.5; }
.adj-leadform--inverse .adj-leadform__note { color: var(--text-on-inverse-muted); }
.adj-leadform__note a { color: var(--blue-500); }
.adj-leadform--inverse .adj-leadform__note a { color: var(--sky-300); }
@media (max-width: 560px){ .adj-leadform__grid { grid-template-columns: 1fr; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-leadform-css')) {
  const s = document.createElement('style'); s.id = 'adj-leadform-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Lead-capture module. Free policy review by default. Composes Field + Button.
 * Keep "free" genuinely free; include the privacy/no-obligation note.
 */
export function LeadForm({
  eyebrow = 'Free policy review',
  title = 'See what your policy really owes you',
  subtitle = 'Send a few details and a licensed public adjuster will review your situation — free, with no obligation.',
  submitLabel = 'Request my free review',
  inverse = false,
  note,
  onSubmit,
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  const handle = (e) => { e.preventDefault(); onSubmit && onSubmit(e); };
  return (
    <form className={`adj-leadform${inverse ? ' adj-leadform--inverse' : ''}`} onSubmit={handle} noValidate>
      <div className="adj-leadform__eyebrow"><i data-lucide="shield-check" aria-hidden="true"></i>{eyebrow}</div>
      <h3 className="adj-leadform__title">{title}</h3>
      <p className="adj-leadform__sub">{subtitle}</p>
      <div className="adj-leadform__grid">
        <Field label="Full name" name="name" autoComplete="name" required inverse={inverse} placeholder="Jordan Rivera" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required inverse={inverse} placeholder="(555) 010-2837" />
        <div className="adj-field--full" style={{display:'contents'}}>
          <Field label="Email" name="email" type="email" autoComplete="email" required inverse={inverse} placeholder="you@email.com" />
        </div>
        <Field label="Type of damage" name="peril" as="select" required inverse={inverse}
          options={['Select one','Storm / hurricane','Water / flood','Fire / smoke','Roof / structural','Other']} />
        <Field label="ZIP code" name="zip" autoComplete="postal-code" inverse={inverse} placeholder="33101" />
        <div className="adj-field--full" style={{gridColumn:'1 / -1'}}>
          <Field label="Tell us what happened" name="details" as="textarea" optional inverse={inverse}
            placeholder="A storm took part of the roof last night and water is coming into the upstairs bedrooms…"
            hint="The more detail you share, the better we can prepare." />
        </div>
      </div>
      <div className="adj-leadform__actions">
        <Button type="submit" variant={inverse ? 'inverse' : 'primary'} size="lg" fullWidth icon="arrow-right" iconPosition="right">{submitLabel}</Button>
        <p className="adj-leadform__note">
          {note || <>Free and no obligation. By submitting you agree to our <a href="#">privacy policy</a>. This is not legal advice.</>}
        </p>
      </div>
    </form>
  );
}
