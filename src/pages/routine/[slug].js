import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { RoutineDetail } from 'components/Routine/detail';

import { getRoutineDetail, getAllRoutinesWithSlug } from '../../../lib/api';

const Page = (routineDetail) => {
  const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  //

  return (
    <>
      {routineDetail.routineDetail && (
        <RoutineDetail {...routineDetail.routineDetail[0]} />
      )}
    </>
  );
};

export async function getStaticProps({ params, preview = null }) {
  const routineDetail = await getRoutineDetail(params.slug, preview);

  return {
    props: {
      preview,
      routineDetail,
    },
  };
}

export async function getStaticPaths() {
  const allRoutines = await getAllRoutinesWithSlug();
  return {
    paths: allRoutines?.map((routine) => `/routine/${routine.slug}`) || [],
    fallback: true,
  };
}

export default Page;
