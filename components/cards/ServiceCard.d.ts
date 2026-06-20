import * as React from 'react';

/**
 * Service offering card — icon tile, serif title, description, and an optional
 * "learn more" link. Hover reveals a sky-blue top accent rule + low lift.
 *
 * @startingPoint section="Cards" subtitle="Service / benefit / article / specialty cards" viewport="700x360"
 */
export interface ServiceCardProps {
  /** Lucide icon name. Peril services use cloud-lightning / flame / droplets. */
  icon?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  linkLabel?: string;
}
export function ServiceCard(props: ServiceCardProps): JSX.Element;
