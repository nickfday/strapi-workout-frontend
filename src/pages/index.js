import React from 'react';
import ComponentBuilder from 'components/ComponentBuilder';
import { ArticleTeaser } from 'components/Article/teaser';

import { fetchAPI } from '../../lib/api';

async function getHomepage(id) {
  const data = await fetchAPI(
    `query componentsAndTeaser($id: ID!) {
      page(id: $id) {
        id
        slug
        components {
          __typename         
          ...ctaBanners          
          ...cards         
        }
      }
      articles(limit: 3, sort: "created_at:desc") {
        ...Articles
      }
    }

    fragment ctaBanners on ComponentGlobalCtaBanner {
      ctaBanners {
        id
        title
        body
        media {
          url
          formats
        }
        link {
          title
          url
        }
        backgroundPositionX
        backgroundPositionY
      }
    }

    fragment cards on ComponentGlobalCard {
      cardGroup {
        title
        body
        id
        media {
          url
          formats
        }
        link {
          title
          url
        }
      }
    }

  

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
    }`,
    {
      variables: {
        id: id,
      },
    },
  );
  return data;
}

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
