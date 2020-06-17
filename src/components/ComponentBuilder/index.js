import React from 'react';
import dynamic from 'next/dynamic';

const CtaBanner = dynamic(() => import('components/CtaBanner'));
const CardGroup = dynamic(() => import('components/CardGroup'));
const HeroBanner = dynamic(() => import('components/HeroBanner'));
const Markdown = dynamic(() => import('components/Markdown'));

const reactComponents = {
  ComponentGlobalCard: CardGroup,
  ComponentGlobalCtaBanner: CtaBanner,
  ComponentGlobalPageBanner: HeroBanner,
  ComponentGlobalRichText: Markdown,
};

const ComponentBuilder = ({ components }) => {
  return components.map((property) => {
    if (
      Object.prototype.hasOwnProperty.call(reactComponents, property.__typename)
    ) {
      return React.createElement(reactComponents[property.__typename], {
        ...property,
      });
    } else {
      return null;
    }
  });
};

export default ComponentBuilder;
