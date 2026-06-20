import * as React from 'react';

export interface FaqItemData { q: React.ReactNode; a: React.ReactNode; }

/**
 * Accessible FAQ accordion (ARIA expanded/controls, animated height). Single-open
 * by default; set allowMultiple to let several stay open.
 *
 * @startingPoint section="Navigation" subtitle="FAQ accordion" viewport="760x420"
 */
export interface FaqAccordionProps {
  items: FaqItemData[];
  allowMultiple?: boolean;
  /** Indices open on mount. */
  defaultOpen?: number[];
}
export function FaqAccordion(props: FaqAccordionProps): JSX.Element;
