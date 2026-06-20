import * as React from 'react';

/**
 * Labelled form control wrapping input / textarea / select, with optional hint
 * and error states. Accessible: label tied to control, aria-invalid/-describedby.
 *
 * @startingPoint section="Forms" subtitle="Text field, select & textarea states" viewport="700x200"
 */
export interface FieldOption { value: string; label: string; }
export interface FieldProps {
  label?: React.ReactNode;
  /** input type when as="input". */
  type?: string;
  /** Which control to render. */
  as?: 'input' | 'textarea' | 'select';
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  optional?: boolean;
  hint?: React.ReactNode;
  /** Error message; styles the control red and links it for a11y. */
  error?: React.ReactNode;
  /** For as="select": array of strings or {value,label}. */
  options?: Array<string | FieldOption>;
  children?: React.ReactNode;
  /** Style for navy backgrounds. */
  inverse?: boolean;
  autoComplete?: string;
}
export function Field(props: FieldProps): JSX.Element;
