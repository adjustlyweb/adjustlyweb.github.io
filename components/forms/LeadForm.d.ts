import * as React from 'react';

/**
 * Lead-capture module (default: free policy review). Composes Field + Button.
 * Compliance: keep "free" genuinely free, include the no-obligation note, and
 * never promise an outcome.
 *
 * @startingPoint section="Forms" subtitle="Free policy-review lead form" viewport="560x620"
 */
export interface LeadFormProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  submitLabel?: string;
  /** Style for navy bands/footers. */
  inverse?: boolean;
  /** Override the fine-print note under the submit button. */
  note?: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}
export function LeadForm(props: LeadFormProps): JSX.Element;
