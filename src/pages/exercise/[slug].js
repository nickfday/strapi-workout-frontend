// import React, { useEffect, useState } from 'react';
// import ExerciseSinglePage from 'components/Exercise/ExerciseSingle/page';

// const Page = (props) => {
//   const [slug, setCount] = useState('');
//   useEffect(() => {
//     setCount(window.location.pathname.split('/').pop());
//   }, []);

//   return <ExerciseSinglePage slug={slug} />;
// };

// export default Page;

import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import ExerciseSingle from 'components/Exercise/ExerciseSingle';

import { getExerciseDetail, getAllExercisesWithSlug } from '../../../lib/api';

const Page = (exerciseDetail) => {
  const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  // console.log(exerciseDetail.exerciseDetail[0]);

  return (
    <>
      {exerciseDetail.exerciseDetail && (
        <ExerciseSingle {...exerciseDetail.exerciseDetail[0]} />
      )}
    </>
  );
};

export async function getStaticProps({ params, preview = null }) {
  const exerciseDetail = await getExerciseDetail(params.slug, preview);

  return {
    props: {
      preview,
      exerciseDetail,
    },
  };
}

export async function getStaticPaths() {
  const allExercises = await getAllExercisesWithSlug();
  return {
    paths: allExercises?.map((exercise) => `/exercise/${exercise.slug}`) || [],
    fallback: true,
  };
}

export default Page;
