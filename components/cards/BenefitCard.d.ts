import * as React from 'react';

/**
 * Benefit / value-proposition card or numbered step. A top hairline accent rule,
 * an icon OR a step number, serif title, body. Use `inverse` on navy bands.
 */
export interface BenefitCardProps {
  /** Lucide icon name (mutually exclusive with `number`). */
  icon?: string;
  /** Step numeral e.g. "01" (mutually exclusive with `icon`). */
  number?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  inverse?: boolean;
}
export function BenefitCard(props: BenefitCardProps): JSX.Element;
