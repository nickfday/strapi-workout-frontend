import React from 'react';
import ComponentBuilderPage from 'components/ComponentBuilder/page';
import { ArticleTeaserPage } from 'components/Article/page';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';
import { getExercises } from '../../lib/api';

const Homepage = (allExercises) => {
  console.log(allExercises);
  return (
    <>
      {/* <ComponentBuilderPage id={1} />
      <ArticleTeaserPage /> */}
      Test
    </>
  );
};

export async function getStaticProps({ preview = null }) {
  const allExercises = (await getExercises(preview)) || [];
  console.log(allExercises);
  return {
    props: { allExercises, preview },
  };
}

export default Homepage;
