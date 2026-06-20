import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'inverse';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary CTA / secondary / text button for Adjustly. Verb-first, sentence-case labels.
 * Renders an anchor when `href` is provided, otherwise a native button.
 *
 * @startingPoint section="Actions" subtitle="Primary, secondary & text buttons" viewport="700x140"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label — verb-first, sentence case (e.g. "Get a free policy review"). */
  children?: React.ReactNode;
  /** Visual emphasis. `inverse` is the white button for navy sections. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Lucide icon name (e.g. "arrow-right", "shield-check"). Requires lucide on the page. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  /** When set, renders an <a>. */
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
