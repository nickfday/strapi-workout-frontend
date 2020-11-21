import React, { useContext } from 'react';
import {
  LinkContext,
  LinkContextValue,
} from '../../providers/Link/LinkProvider';
/**
 *
 * Uses whatever link component is found in the link context
 * This might be Next / Reach or something else
 */
export interface LinkProps {
  href: string;
  useMz?: boolean;
  className?: string; // allow styled wrapping
  target?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  useMz,
  className,
  target,
}) => {
  const linkContext = useContext<LinkContextValue | undefined>(LinkContext);
  const mzProps = useMz
    ? {
        'data-mz': true,
        'data-type': `open_${href?.substr(1)}`,
      }
    : {};
  if (linkContext) {
    const LinkComponent = linkContext.Link;
    // note we're assuming there is only one type of Link component at the moment and that is Next.
    // when others are needed such as Reach we must add an if linkContext.type === 'NEXT else ... here
    return (
      <LinkComponent href={href} className={className}>
        <a {...mzProps} target={target}>
          {children}
        </a>
      </LinkComponent>
    );
  }
  return (
    <a href={href} {...mzProps} className={className} target={target}>
      {children}
    </a>
  );
};

export default Link;
