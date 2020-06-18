import React from 'react';
import ComponentBuilder from 'components/ComponentBuilder';
import { getComponentBuilder } from '../../lib/api';

const Disclaimer = ({ pageData }) => {
  return (
    <>
      <h1>{pageData.title}</h1>
      <ComponentBuilder {...pageData} />
    </>
  );
};

export async function getStaticProps({ id = 6 }) {
  const pageData = (await getComponentBuilder(id)) || [];
  return {
    props: { pageData },
  };
}

export default Disclaimer;
