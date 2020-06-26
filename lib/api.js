import { HEROBANNER_FRAGMENT } from 'components/HeroBanner';
import { CTABANNER_FRAGMENT } from 'components/CtaBanner';
import { CARD_FRAGMENT } from 'components/CardGroup';

export async function fetchAPI(query, { variables } = {}) {
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

export async function getHomepage(id) {
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

export async function getExercises() {
  const data = await fetchAPI(
    `query exercises { 
      exercises(sort: "title:asc") {
        id
        title
        primaryMuscle {
          title
        }
        equipment {
          title
        }
        slug
        type 
      }
    }`,
  );
  return data?.exercises;
}

export async function getComponentBuilder(id) {
  const data = await fetchAPI(
    `query page($id: ID!) {
      page(id: $id) {
        id
        slug
        title
        components {
          __typename         
          ...ctaBanners          
          ...cards
          ...richText     
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

    fragment richText on ComponentGlobalRichText {
      id
      body
    } 
   `,
    {
      variables: {
        id: id,
      },
    },
  );
  return data?.page;
}

export async function getRoutines() {
  const data = await fetchAPI(
    `query routines {
      routines(limit: 3, sort: "created_at:desc") {
        ...Routines
      }
    }

    fragment Routines on Routine {
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
    `,
  );
  return data?.routines;
}

export async function getArticles() {
  const data = await fetchAPI(
    `query articles {
      articles(limit: 3, sort: "created_at:desc") {
        ...Articles
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
    }
    `,
  );
  return data?.articles;
}

export async function getExerciseDetail(slug) {
  const data = await fetchAPI(
    `query exerciseSingle($slug: String) {
      exercises(where: { slug: $slug }) {
        id
        title
        slug
        primaryMuscle {
          title
          abbreviation
          bodyArea
        }
        secondaryMuscle {
          title
        }
        videoUrl
        equipment {
          title
        }
        type
        body
        image {
          formats
          url
        }
        videoMedia {
          url
        }
        variationExercise {
          title
          slug
        }
      }
    }
   `,
    {
      variables: {
        slug: slug,
      },
    },
  );
  return data?.exercises;
}

export async function getAllExercisesWithSlug() {
  const data = fetchAPI(`
    {
      exercises {
        title
        slug
      }
    }
  `);
  return data?.exercises;
}

export async function getArticleDetail(slug) {
  const data = await fetchAPI(
    `query articles($slug: String) {
      articles(where: { slug: $slug }) {
        ...Articles
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
    }
   `,
    {
      variables: {
        slug: slug,
      },
    },
  );
  return data?.articles;
}

export async function getAllArticlesWithSlug() {
  const data = fetchAPI(`
    {
      articles {
        title
        slug
      }
    }
  `);
  return data?.articles;
}

export async function getRoutineDetail(slug) {
  const data = await fetchAPI(
    `query routines($slug: String) {
      routines(where: { slug: $slug }) {
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
        session {
          title
          body
          date
          session {
            title
            sets
            reps
            exercise {
              title
              slug
            }
          }
        }
      }
    }
   `,
    {
      variables: {
        slug: slug,
      },
    },
  );
  return data?.routines;
}

export async function getAllRoutinesWithSlug() {
  const data = fetchAPI(`
    {
      routines {
        title
        slug
      }
    }
  `);
  return data?.routines;
}
