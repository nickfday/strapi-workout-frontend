import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { ArticleTeaser } from 'components/Article';
import { ArticleDetail } from './detail';
import { ArticleTeaser } from './teaser';
import { ArticleList, ArticleListProps } from './list';

// Group Page

const ARTICLE_FRAGMENT = gql`
  fragment Articles on Article {
    id
    title
    body
    slug
    media {
      url
      formats
    }
    link {
      title
      url
    }
  }
`;

const ARTICLE_GROUP_QUERY = gql`
  query articles {
    articles(limit: 3, sort: "created_at:desc") {
      ...Articles
    }
  }
  ${ARTICLE_FRAGMENT}
`;

const ArticleGroupFetch = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data);

  return <ArticleList {...data} />;
};

const ArticleGroupPage = graphql(ARTICLE_GROUP_QUERY)(ArticleGroupFetch);

export { ArticleGroupPage };

// Single Page

const ARTICLE_SINGLE_QUERY = gql`
  query articles($slug: String) {
    articles(where: { slug: $slug }) {
      ...Articles
    }
  }
  ${ARTICLE_FRAGMENT}
`;

const ArticleSingleFetch = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  console.log(data);

  return <ArticleDetail {...data.articles[0]} />;
};

const ArticleSinglePage = graphql(ARTICLE_SINGLE_QUERY, {
  options: (props) => ({
    variables: {
      slug: props.slug,
    },
  }),
})(ArticleSingleFetch);

export { ArticleSinglePage };

// teaser

const ARTICLE_TEASER_QUERY = gql`
  query articles {
    articles(limit: 3, sort: "created_at:desc") {
      ...Articles
    }
  }
  ${ARTICLE_FRAGMENT}
`;

const ArticleTeaserFetch = ({ data }) => {
  console.log(data);
  if (data.loading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <p>Error!</p>;
  }

  // set first item as featured

  console.log(data);

  return <ArticleTeaser {...data} />;
};

const ArticleTeaserPage = graphql(ARTICLE_TEASER_QUERY)(ArticleTeaserFetch);

export { ArticleTeaserPage };
