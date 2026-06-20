import * as React from 'react';

/**
 * Network-specialty card — one peril/specialty the nationwide restoration network
 * covers (left sky-blue rule, icon, title, short description, optional coverage tag).
 */
export interface SpecialtyCardProps {
  icon?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Small uppercase pill, e.g. "Nationwide network". Never invent statistics. */
  tag?: string;
}
export function SpecialtyCard(props: SpecialtyCardProps): JSX.Element;
