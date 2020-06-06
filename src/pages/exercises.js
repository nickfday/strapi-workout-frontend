// import React from 'react';
// import ComponentBuilderPage from 'components/ComponentBuilder/page';

// const Page = (props) => {
//   return <ComponentBuilderPage id={2} />;
// };

// export default Page;

import React from 'react';
import ComponentBuilderPage from 'components/ComponentBuilder/page';
import { ArticleTeaserPage } from 'components/Article/page';
import { MaterialAdvancedGridList } from 'components/MaterialUI/Layout/GridList/AdvancedGridList';
import { getExercises } from '../../lib/api';
import Exercise from 'components/Exercise';

const Exercises = (allExercises) => {
  const exercises = {
    exercises: allExercises,
  };
  console.log(...exercises.exercises.allExercises);
  return <Exercise exercises={exercises.exercises.allExercises} />;
};

export async function getStaticProps({ preview = null }) {
  const allExercises = (await getExercises(preview)) || [];
  console.log(allExercises);
  return {
    props: { allExercises, preview },
  };
}

export default Exercises;
