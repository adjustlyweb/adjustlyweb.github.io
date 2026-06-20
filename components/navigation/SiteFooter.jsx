import React from 'react';
import { LicenseBadge } from '../feedback/LicenseBadge.jsx';

const CSS = `
.adj-footer { background: var(--navy-900); color: var(--text-on-inverse-muted); }
.adj-footer__inner { max-width: var(--container-wide); margin-inline: auto; padding: var(--space-9) var(--gutter) var(--space-6); }
.adj-footer__top { display: grid; grid-template-columns: 1.6fr repeat(3, 1fr); gap: var(--space-7); }
.adj-footer__brand img { height: 40px; width: auto; display: block; margin-bottom: var(--space-4); }
.adj-footer__tag { color: var(--text-on-inverse-muted); max-width: 34ch; font-size: var(--fs-sm); line-height: 1.6; margin: 0 0 var(--space-5); }
.adj-footer__col h4 { font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: var(--ls-eyebrow);
  text-transform: uppercase; color: var(--sky-300); font-weight: 500; margin: 0 0 var(--space-4); }
.adj-footer__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-3); }
.adj-footer__col a { color: #C7D6E6; text-decoration: none; font-size: var(--fs-sm);
  transition: color var(--dur-fast) var(--ease-out); }
.adj-footer__col a:hover { color: #fff; }
.adj-footer__rule { border: 0; border-top: 1px solid var(--border-on-inverse); margin: var(--space-7) 0 var(--space-5); }
.adj-footer__disc { font-size: var(--fs-xs); line-height: 1.7; color: #8AA3BF; max-width: 90ch; margin: 0 0 var(--space-5); }
.adj-footer__bottom { display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center; justify-content: space-between; }
.adj-footer__legal { display: flex; gap: var(--space-5); flex-wrap: wrap; }
.adj-footer__legal a { color: #8AA3BF; text-decoration: none; font-size: var(--fs-xs); }
.adj-footer__legal a:hover { color: #fff; }
.adj-footer__copy { font-size: var(--fs-xs); color: #6F88A4; font-family: var(--font-mono); letter-spacing: 0.03em; }
@media (max-width: 820px){ .adj-footer__top { grid-template-columns: 1fr 1fr; } .adj-footer__brand { grid-column: 1 / -1; } }
@media (max-width: 520px){ .adj-footer__top { grid-template-columns: 1fr; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-footer-css')) {
  const s = document.createElement('style'); s.id = 'adj-footer-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const DEFAULT_COLS = [
  { title: 'Company', links: [['How it works','#'],['Our network','#'],['About us','#'],['Careers','#'],['Contact','#']] },
  { title: 'Services', links: [['Storm & hurricane','#'],['Water & flood','#'],['Fire & smoke','#'],['Roof & structural','#']] },
  { title: 'Learn', links: [['Claim guides','#'],['Before a loss','#'],['Glossary','#'],['FAQ','#']] },
];

/** Navy site footer using the white logo lockup, with a verifiable license badge + disclaimer. */
export function SiteFooter({
  logoSrc = 'assets/logo/adjustly-logo-white.png',
  tagline = 'Licensed public adjusters and a nationwide restoration network who represent property owners — never insurance companies.',
  columns = DEFAULT_COLS,
  licenseNumber = 'PA-1098842',
  licenseState = 'Florida Public Adjuster',
  disclaimer,
}) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  const year = new Date().getFullYear();
  return (
    <footer className="adj-footer">
      <div className="adj-footer__inner">
        <div className="adj-footer__top">
          <div className="adj-footer__brand">
            <img src={logoSrc} alt="Adjustly — Property Damage Advocacy Group" />
            <p className="adj-footer__tag">{tagline}</p>
            <LicenseBadge inverse number={licenseNumber} state={licenseState} />
          </div>
          {columns.map((c) => (
            <div className="adj-footer__col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>{c.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <hr className="adj-footer__rule" />
        <p className="adj-footer__disc">
          {disclaimer || `Adjustly Property Damage Advocacy Group represents property owners and policyholders only — never insurance companies. Public-adjusting services are provided by the licensed public adjuster named above; advocacy and experience are attributed to the licensed principal and our second-generation family of adjusters. Content on this site is educational and is not legal advice. We do not guarantee any claim outcome. Free services are provided at no cost and with no obligation.`}
        </p>
        <div className="adj-footer__bottom">
          <div className="adj-footer__legal">
            <a href="#">Privacy policy</a><a href="#">Terms of use</a><a href="#">Licensing & disclosures</a><a href="#">Accessibility</a>
          </div>
          <span className="adj-footer__copy">© {year} Adjustly PDAG</span>
        </div>
      </div>
    </footer>
  );
}
