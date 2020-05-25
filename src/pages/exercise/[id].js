import React, { useEffect, useState } from 'react';
import ExerciseSinglePage from 'components/Exercise/ExerciseSingle/page';

const Page = (props) => {
  const [slug, setCount] = useState('');
  useEffect(() => {
    setCount(window.location.pathname.split('/').pop());
  }, []);

  return <ExerciseSinglePage slug={slug} />;
};

export default Page;
