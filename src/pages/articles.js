// import React from 'react';
// import ComponentBuilderPage from 'components/ComponentBuilder/page';

// const Page = () => {
//   return <ComponentBuilderPage id={4} />;
// };

// export default Page;

// import React from 'react';
// import ComponentBuilderPage from 'components/ComponentBuilder/page';

// const Page = () => {
//   return <ComponentBuilderPage id={3} />;
// };

// export default Page;

import React from 'react';
import ComponentBuilder from 'components/ComponentBuilder';
import { ArticleList } from 'components/Article/list';
import { getComponentBuilder, getArticles } from '../../lib/api';

const Page = (articlesList) => {
  return (
    <>
      <ArticleList articles={articlesList.articlesList} />
    </>
  );
};

export async function getStaticProps() {
  const articlesList = (await getArticles()) || [];

  return {
    props: { articlesList },
  };
}

export default Page;
