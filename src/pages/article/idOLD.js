import React, { useEffect, useState } from 'react';
import { ArticleSinglePage } from 'components/Article/page';

const Page = (props) => {
  const [slug, setCount] = useState('');
  useEffect(() => {
    setCount(window.location.pathname.split('/').pop());
  }, []);

  return <ArticleSinglePage slug={slug} />;
};

export default Page;
