import React from 'react';

const CSS = `
.adj-field { display: flex; flex-direction: column; gap: 6px; }
.adj-field__label { font-family: var(--font-sans); font-size: var(--fs-sm); font-weight: 600;
  color: var(--text-brand); letter-spacing: 0.005em; }
.adj-field__req { color: var(--blue-500); margin-left: 2px; }
.adj-field__opt { color: var(--slate-500); font-weight: 400; font-size: var(--fs-xs); margin-left: 4px; }
.adj-field__control {
  font-family: var(--font-sans); font-size: var(--fs-base); color: var(--text-primary);
  background: var(--white); border: 1px solid var(--slate-300); border-radius: var(--radius-sm);
  padding: 0.72em 0.85em; width: 100%; line-height: 1.4;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
textarea.adj-field__control { resize: vertical; min-height: 120px; }
select.adj-field__control { appearance: none; background-image:
  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round'><path d='M4 6l4 4 4-4'/></svg>");
  background-repeat: no-repeat; background-position: right 0.85em center; padding-right: 2.4em; }
.adj-field__control::placeholder { color: var(--slate-500); }
.adj-field__control:hover { border-color: var(--slate-500); }
.adj-field__control:focus { outline: none; border-color: var(--blue-500); box-shadow: var(--focus-shadow); }
.adj-field--error .adj-field__control { border-color: var(--danger-600); }
.adj-field--error .adj-field__control:focus { box-shadow: 0 0 0 3px rgba(180,35,24,0.18); }
.adj-field__hint { font-size: var(--fs-xs); color: var(--slate-500); line-height: 1.45; }
.adj-field__error { font-size: var(--fs-xs); color: var(--danger-600); font-weight: 500; display:flex; gap:5px; align-items:center; }
.adj-field__error svg { width: 14px; height: 14px; }
.adj-field--inverse .adj-field__label { color: #fff; }
.adj-field--inverse .adj-field__control { background: rgba(255,255,255,0.06); border-color: var(--border-on-inverse); color: #fff; }
.adj-field--inverse .adj-field__control::placeholder { color: #8AA3BF; }
.adj-field--inverse .adj-field__hint { color: var(--text-on-inverse-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-field-css')) {
  const s = document.createElement('style'); s.id = 'adj-field-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

let _id = 0;
/** Labelled form field wrapping input / textarea / select, with hint + error. */
export function Field({
  label, type = 'text', as = 'input', name, placeholder, value, defaultValue,
  onChange, required = false, optional = false, hint, error, options = [], children,
  inverse = false, autoComplete, ...rest
}) {
  React.useEffect(() => {
    if (error && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [error]);
  const id = React.useMemo(() => name || `adj-f-${++_id}`, [name]);
  const cls = `adj-field${error ? ' adj-field--error' : ''}${inverse ? ' adj-field--inverse' : ''}`;
  const shared = {
    id, name, value, defaultValue, onChange, placeholder,
    'aria-invalid': !!error, 'aria-describedby': error ? `${id}-err` : (hint ? `${id}-hint` : undefined),
    className: 'adj-field__control', autoComplete, ...rest,
  };
  return (
    <div className={cls}>
      {label && (
        <label className="adj-field__label" htmlFor={id}>
          {label}{required && <span className="adj-field__req" aria-hidden="true">*</span>}
          {optional && <span className="adj-field__opt">(optional)</span>}
        </label>
      )}
      {as === 'textarea'
        ? <textarea {...shared} required={required} />
        : as === 'select'
        ? <select {...shared} required={required}>{children || options.map(o =>
            <option key={typeof o === 'string' ? o : o.value} value={typeof o === 'string' ? o : o.value}>
              {typeof o === 'string' ? o : o.label}</option>)}</select>
        : <input type={type} {...shared} required={required} />}
      {hint && !error && <span className="adj-field__hint" id={`${id}-hint`}>{hint}</span>}
      {error && <span className="adj-field__error" id={`${id}-err`}><i data-lucide="alert-circle" aria-hidden="true"></i>{error}</span>}
    </div>
  );
}
