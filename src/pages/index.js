import React from 'react';
import ComponentBuilder from 'components/ComponentBuilder';
import { getExercises, getComponentBuilder } from '../../lib/api';

const Homepage = (componentBuilder) => {
  console.log(componentBuilder.componentBuilder);
  return (
    <>
      <ComponentBuilder {...componentBuilder.componentBuilder} />
    </>
  );
};

export async function getStaticProps({ preview = null }) {
  const componentBuilder = (await getComponentBuilder(preview)) || [];
  console.log(componentBuilder);
  return {
    props: { componentBuilder, preview },
  };
}

export default Homepage;
