import React from 'react';

const CSS = `
.adj-faq { border-top: var(--border-1); }
.adj-faq__item { border-bottom: var(--border-1); }
.adj-faq__btn { width: 100%; background: none; border: 0; cursor: pointer; text-align: left;
  display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-4);
  padding: var(--space-5) 0; font-family: var(--font-display); font-weight: 600; font-size: var(--fs-h4);
  color: var(--text-brand); line-height: 1.28; font-variation-settings:"opsz" 36; }
.adj-faq__btn:hover { color: var(--blue-600); }
.adj-faq__btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 3px; border-radius: var(--radius-xs); }
.adj-faq__icon { flex: none; width: 30px; height: 30px; border: 1px solid var(--line-200); border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center; color: var(--blue-500); margin-top: 3px;
  transition: transform var(--dur-base) var(--ease-out), background var(--dur-fast), border-color var(--dur-fast); }
.adj-faq__icon svg { width: 18px; height: 18px; }
.adj-faq__item--open .adj-faq__icon { transform: rotate(45deg); background: var(--ice-100); border-color: var(--sky-300); }
.adj-faq__panel { overflow: hidden; height: 0; transition: height var(--dur-base) var(--ease-out); }
.adj-faq__panel-inner { padding: 0 calc(30px + var(--space-4)) var(--space-5) 0; color: var(--slate-600);
  font-size: var(--fs-base); line-height: 1.62; max-width: 64ch; }
.adj-faq__panel-inner p { margin: 0 0 0.7em; }
.adj-faq__panel-inner p:last-child { margin-bottom: 0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-faq-css')) {
  const s = document.createElement('style'); s.id = 'adj-faq-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

function FaqItem({ q, a, open, onToggle, id }) {
  const panelRef = React.useRef(null);
  const [h, setH] = React.useState(0);
  React.useEffect(() => { setH(open && panelRef.current ? panelRef.current.scrollHeight : 0); }, [open, a]);
  return (
    <div className={`adj-faq__item${open ? ' adj-faq__item--open' : ''}`}>
      <button className="adj-faq__btn" aria-expanded={open} aria-controls={`${id}-panel`} id={`${id}-btn`} onClick={onToggle}>
        <span>{q}</span>
        <span className="adj-faq__icon"><i data-lucide="plus" aria-hidden="true"></i></span>
      </button>
      <div className="adj-faq__panel" id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`} style={{ height: h }}>
        <div className="adj-faq__panel-inner" ref={panelRef}>
          {typeof a === 'string' ? <p>{a}</p> : a}
        </div>
      </div>
    </div>
  );
}

/** Accessible single-or-multi-open FAQ accordion. Keyboard + ARIA wired. */
export function FaqAccordion({ items = [], allowMultiple = false, defaultOpen = [] }) {
  const [openSet, setOpenSet] = React.useState(() => new Set(defaultOpen));
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  const toggle = (i) => setOpenSet((prev) => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  return (
    <div className="adj-faq">
      {items.map((it, i) => (
        <FaqItem key={i} id={`adj-faq-${i}`} q={it.q} a={it.a} open={openSet.has(i)} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}
