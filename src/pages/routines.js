// import React from 'react';
// import ComponentBuilderPage from 'components/ComponentBuilder/page';

// const Page = () => {
//   return <ComponentBuilderPage id={3} />;
// };

// export default Page;

import React from 'react';
import ComponentBuilder from 'components/ComponentBuilder';
import { RoutineList } from 'components/Routine/list';
import { getComponentBuilder, getRoutines } from '../../lib/api';

const Page = (routinesList) => {
  console.log(routinesList);
  return (
    <>
      <RoutineList routines={routinesList.routinesList} />
    </>
  );
};

export async function getStaticProps({ id = 1 }) {
  const routinesList = (await getRoutines()) || [];
  console.log(routinesList);
  return {
    props: { routinesList },
  };
}

export default Page;
