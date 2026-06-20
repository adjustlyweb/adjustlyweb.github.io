import React from 'react';

const CSS = `
.adj-track { display: grid; gap: var(--space-5); }
.adj-track--horizontal { grid-auto-flow: column; grid-auto-columns: 1fr; }
.adj-track__step { position: relative; display: flex; gap: var(--space-4); }
.adj-track--horizontal .adj-track__step { flex-direction: column; }
.adj-track__rail { flex: none; display: flex; flex-direction: column; align-items: center; }
.adj-track--horizontal .adj-track__rail { flex-direction: row; width: 100%; }
.adj-track__dot { width: 44px; height: 44px; flex: none; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-weight: 600; font-size: var(--fs-sm);
  border: 1.5px solid var(--navy-700); color: var(--navy-700); background: #fff; z-index: 1; }
.adj-track__dot svg { width: 20px; height: 20px; }
.adj-track__line { flex: 1; background: var(--line-200); }
.adj-track--vertical .adj-track__line { width: 2px; min-height: 18px; margin: 4px 0; }
.adj-track--horizontal .adj-track__line { height: 2px; margin: 0 8px; align-self: center; }
.adj-track__step--done .adj-track__dot { background: var(--navy-700); color: #fff; }
.adj-track__step--active .adj-track__dot { border-color: var(--blue-500); color: var(--blue-500);
  box-shadow: 0 0 0 4px rgba(46,108,166,0.14); }
.adj-track__step--done .adj-track__line, .adj-track__step--active .adj-track__line { background: var(--blue-500); }
.adj-track__body { padding-bottom: var(--space-3); }
.adj-track--horizontal .adj-track__body { padding-bottom: 0; padding-top: var(--space-3); }
.adj-track__eyebrow { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--slate-500); margin-bottom: 4px; }
.adj-track__title { font-family: var(--font-display); font-weight: 600; font-size: var(--fs-h4); color: var(--text-brand);
  margin: 0 0 6px; line-height: 1.2; font-variation-settings:"opsz" 36; }
.adj-track__desc { color: var(--slate-600); font-size: var(--fs-sm); line-height: 1.55; margin: 0; max-width: 42ch; }
.adj-track--inverse .adj-track__dot { background: transparent; border-color: var(--sky-500); color: var(--sky-300); }
.adj-track--inverse .adj-track__step--done .adj-track__dot { background: var(--sky-500); color: var(--navy-900); }
.adj-track--inverse .adj-track__line { background: var(--border-on-inverse); }
.adj-track--inverse .adj-track__title { color: #fff; }
.adj-track--inverse .adj-track__desc { color: var(--text-on-inverse-muted); }
.adj-track--inverse .adj-track__eyebrow { color: var(--sky-300); }
@media (max-width: 760px){ .adj-track--horizontal { grid-auto-flow: row; grid-auto-columns: auto; }
  .adj-track--horizontal .adj-track__step { flex-direction: row; }
  .adj-track--horizontal .adj-track__rail { flex-direction: column; width: auto; }
  .adj-track--horizontal .adj-track__line { width: 2px; height: auto; min-height: 18px; margin: 4px 0; }
  .adj-track--horizontal .adj-track__body { padding-top: 0; padding-bottom: var(--space-3); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-track-css')) {
  const s = document.createElement('style'); s.id = 'adj-track-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/** Process / step tracker. Steps: {eyebrow,title,desc,icon}. `current` index marks active. */
export function ProcessTracker({ steps = [], current = 0, orientation = 'vertical', inverse = false }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div className={`adj-track adj-track--${orientation}${inverse ? ' adj-track--inverse' : ''}`}>
      {steps.map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'active' : 'todo';
        return (
          <div className={`adj-track__step adj-track__step--${state}`} key={i}>
            <div className="adj-track__rail">
              <span className="adj-track__dot">
                {state === 'done' ? <i data-lucide="check" aria-hidden="true"></i>
                  : (s.icon ? <i data-lucide={s.icon} aria-hidden="true"></i> : String(i + 1).padStart(2, '0'))}
              </span>
              {i < steps.length - 1 && <span className="adj-track__line"></span>}
            </div>
            <div className="adj-track__body">
              {s.eyebrow && <div className="adj-track__eyebrow">{s.eyebrow}</div>}
              <h4 className="adj-track__title">{s.title}</h4>
              {s.desc && <p className="adj-track__desc">{s.desc}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
