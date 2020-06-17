import React from 'react';
import { Container } from '@material-ui/core';
import ComponentBuilder from 'components/ComponentBuilder';
import { getComponentBuilder } from '../../lib/api';

const Disclaimer = ({ homePageData }) => {
  console.log(homePageData);
  return (
    <Container>
      <h1>{homePageData.title}</h1>
      <ComponentBuilder {...homePageData} />
    </Container>
  );
};

export async function getStaticProps({ id = 5 }) {
  const homePageData = (await getComponentBuilder(id)) || [];
  return {
    props: { homePageData },
  };
}

export default Disclaimer;
