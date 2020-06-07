import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { ArticleDetail } from 'components/Article/detail';

import { getArticleDetail, getAllArticlesWithSlug } from '../../../lib/api';

const Page = (articleDetail) => {
  const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  console.log(articleDetail.articleDetail[0]);

  return (
    <>
      {articleDetail.articleDetail && (
        <ArticleDetail {...articleDetail.articleDetail[0]} />
      )}
    </>
  );
};

export async function getStaticProps({ params, preview = null }) {
  const articleDetail = await getArticleDetail(params.slug, preview);

  return {
    props: {
      preview,
      articleDetail,
    },
  };
}

export async function getStaticPaths() {
  const allArticles = await getAllArticlesWithSlug();
  return {
    paths: allArticles?.map((article) => `/article/${article.slug}`) || [],
    fallback: true,
  };
}

export default Page;
