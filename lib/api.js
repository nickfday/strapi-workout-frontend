import { HEROBANNER_FRAGMENT } from 'components/HeroBanner';
import { CTABANNER_FRAGMENT } from 'components/CtaBanner';
import { CARD_FRAGMENT } from 'components/CardGroup';

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(
    `https://strapi-workout-backend.herokuapp.com/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getExercises() {
  const data = await fetchAPI(
    `query exercises {
      exercises {
        id
        title
        primaryMuscle {
          title
        }
        equipment
        slug
        type
      }
    }`,
  );
  return data?.exercises;
}

export async function getComponentBuilder(id) {
  const data = await fetchAPI(
    `query page {
      page(id: 1) {
        id
        slug
        components {
          __typename         
          ...ctaBanners          
          ...cards         
        }
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
  
   `,
  );
  return data?.page;
}
