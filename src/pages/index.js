import React from 'react';
import ComponentBuilder from 'components/ComponentBuilder';
import { ArticleTeaser } from 'components/Article/teaser';

import { getHomepage } from '../../lib/api';

const Homepage = ({ homePageData }) => {
  return (
    <>
      <ComponentBuilder {...homePageData.page} />{' '}
      <ArticleTeaser {...homePageData} />
    </>
  );
};

export async function getStaticProps({ id = 1 }) {
  const homePageData = (await getHomepage(id)) || [];
  return {
    props: { homePageData },
  };
}

export default Homepage;
