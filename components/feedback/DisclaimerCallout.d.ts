import * as React from 'react';

/**
 * Compliance disclaimer / fine-print callout — left rule + icon + small text.
 * Required wherever claims advice appears (not legal advice, free=free, we
 * represent owners not insurers, experience attributed to the licensed principal).
 */
export interface DisclaimerCalloutProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'info' | 'warning' | 'inverse';
  /** Override the Lucide icon. */
  icon?: string;
}
export function DisclaimerCallout(props: DisclaimerCalloutProps): JSX.Element;
