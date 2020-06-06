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

export async function getStaticProps({ id = 1 }) {
  const componentBuilder = (await getComponentBuilder(id)) || [];
  console.log(componentBuilder);
  return {
    props: { componentBuilder, id },
  };
}

export default Homepage;
