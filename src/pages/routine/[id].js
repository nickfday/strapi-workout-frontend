import React, { useEffect, useState } from 'react';
import { RoutineSinglePage } from 'components/Routine/page';

const Page = (props) => {
  const [slug, setCount] = useState('');
  useEffect(() => {
    setCount(window.location.pathname.split('/').pop());
  }, []);

  return <RoutineSinglePage slug={slug} />;
};

export default Page;
