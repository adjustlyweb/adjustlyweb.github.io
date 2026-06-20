import React from 'react';
import { Button } from '../actions/Button.jsx';

const CSS = `
.adj-header { position: sticky; top: 0; z-index: var(--z-header); background: rgba(255,255,255,0.92);
  border-bottom: var(--border-1); transition: box-shadow var(--dur-base) var(--ease-out), background var(--dur-base); }
@supports (backdrop-filter: blur(8px)) { .adj-header { backdrop-filter: saturate(1.1) blur(10px); } }
.adj-header--scrolled { box-shadow: var(--shadow-sm); }
.adj-header__bar { max-width: var(--container-wide); margin-inline: auto; padding: 0 var(--gutter);
  height: 74px; display: flex; align-items: center; gap: var(--space-6); }
.adj-header__logo { display: inline-flex; align-items: center; flex: none; }
.adj-header__logo img { height: 34px; width: auto; display: block; }
.adj-header__nav { display: flex; align-items: center; gap: var(--space-6); margin-left: var(--space-4); }
.adj-header__link { font-family: var(--font-sans); font-weight: 500; font-size: var(--fs-sm); color: var(--navy-700);
  text-decoration: none; padding: 6px 0; position: relative; letter-spacing: 0.005em; }
.adj-header__link::after { content:""; position:absolute; left:0; right:0; bottom:-2px; height:2px; background: var(--sky-500);
  transform: scaleX(0); transform-origin: left; transition: transform var(--dur-fast) var(--ease-out); }
.adj-header__link:hover { color: var(--blue-600); }
.adj-header__link:hover::after, .adj-header__link[aria-current="page"]::after { transform: scaleX(1); }
.adj-header__spacer { flex: 1; }
.adj-header__actions { display: flex; align-items: center; gap: var(--space-4); flex: none; }
.adj-header__phone { font-family: var(--font-mono); font-size: var(--fs-sm); font-weight: 500; color: var(--navy-700);
  text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
.adj-header__phone:hover { color: var(--blue-600); }
.adj-header__phone svg { width: 16px; height: 16px; }
.adj-header__burger { display: none; background: none; border: 1px solid var(--line-200); border-radius: var(--radius-sm);
  width: 42px; height: 42px; align-items: center; justify-content: center; color: var(--navy-700); cursor: pointer; }
.adj-header__burger svg { width: 22px; height: 22px; }
.adj-header__mobile { display: none; border-top: var(--border-1); background: #fff; padding: var(--space-4) var(--gutter) var(--space-6); }
.adj-header__mobile a { display: block; padding: 12px 0; font-weight: 500; color: var(--navy-700);
  text-decoration: none; border-bottom: var(--border-1); }
.adj-header__mobile .adj-btn { margin-top: var(--space-4); }
@media (max-width: 900px) {
  .adj-header__nav, .adj-header__phone, .adj-header__actions .adj-btn { display: none; }
  .adj-header__burger { display: inline-flex; }
  .adj-header__mobile--open { display: block; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-header-css')) {
  const s = document.createElement('style'); s.id = 'adj-header-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const DEFAULT_LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Services', href: '#services' },
  { label: 'Learn', href: '#learn' },
  { label: 'Our network', href: '#network' },
  { label: 'About', href: '#about' },
];

/** Sticky marketing header: logo, nav, phone, primary CTA, mobile menu. */
export function SiteHeader({
  logoSrc = 'assets/logo/adjustly-logo-navy.png',
  links = DEFAULT_LINKS,
  phone = '(800) 555-0142',
  ctaLabel = 'Free policy review',
  ctaHref = '#start',
  currentHref,
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    if (window.lucide) window.lucide.createIcons();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [open]);
  return (
    <header className={`adj-header${scrolled ? ' adj-header--scrolled' : ''}`}>
      <div className="adj-header__bar">
        <a className="adj-header__logo" href="#top" aria-label="Adjustly home"><img src={logoSrc} alt="Adjustly" /></a>
        <nav className="adj-header__nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} className="adj-header__link" href={l.href}
               aria-current={currentHref === l.href ? 'page' : undefined}>{l.label}</a>
          ))}
        </nav>
        <span className="adj-header__spacer"></span>
        <div className="adj-header__actions">
          {phone && <a className="adj-header__phone" href={`tel:${phone.replace(/[^\d]/g,'')}`}><i data-lucide="phone" aria-hidden="true"></i>{phone}</a>}
          <Button variant="primary" size="sm" href={ctaHref} icon="arrow-right" iconPosition="right">{ctaLabel}</Button>
          <button className="adj-header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <i data-lucide={open ? 'x' : 'menu'} aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className={`adj-header__mobile${open ? ' adj-header__mobile--open' : ''}`}>
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <Button variant="primary" size="md" fullWidth href={ctaHref}>{ctaLabel}</Button>
      </div>
    </header>
  );
}
