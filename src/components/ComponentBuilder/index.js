import React from 'react';
import dynamic from 'next/dynamic';

const CtaBanner = dynamic(() => import('components/CtaBanner'));
const CardGroup = dynamic(() => import('components/CardGroup'));
const HeroBanner = dynamic(() => import('components/HeroBanner'));
const FetchExercise = dynamic(() => import('components/Exercise/page'));
const Article = dynamic(() =>
  import('components/Article/page').then((item) => item.ArticleGroupPage),
);
const Routine = dynamic(() =>
  import('components/Routine/page').then((item) => item.RoutineGroupPage),
);

const reactComponents = {
  ComponentGlobalCard: CardGroup,
  ComponentGlobalCtaBanner: CtaBanner,
  ComponentGlobalPageBanner: HeroBanner,
  ComponentGlobalExercise: FetchExercise,
  ComponentGlobalArticle: Article,
  ComponentGlobalRoutine: Routine,
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
