import React from 'react';
import ComponentBuilderPage from 'components/ComponentBuilder/page';
import { ArticleTeaserPage } from 'components/Article/page';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';

const Homepage = () => {
  return (
    <>
      <ComponentBuilderPage id={1} />
      <ArticleTeaserPage />
    </>
  );
};

export default Homepage;
