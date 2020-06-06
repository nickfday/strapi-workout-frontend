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

import { getExerciseDetail } from '../../lib/api';

const Page = (exerciseDetail) => {
  const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  console.log(exerciseDetail);
  return (
    <>
      Exercise Detail
      {/* <ComponentBuilder {...componentBuilder.componentBuilder} /> */}
    </>
  );
};

export async function getStaticProps({ params }) {
  const exerciseDetail = (await getExerciseDetail(params.slug)) || [];
  console.log(exerciseDetail);
  return {
    props: { exerciseDetail, slug },
  };
}

export default Page;
