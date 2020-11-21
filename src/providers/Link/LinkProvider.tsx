import React, { createContext } from 'react';

export interface LinkContextValue {
  type: 'NEXT';
  Link: any;
}
export const LinkContext = createContext<undefined | LinkContextValue>(
  undefined,
);

export const LinkProvider: React.FC<{ value: LinkContextValue }> = ({
  children,
  value,
}) => {
  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};

export default LinkProvider;
