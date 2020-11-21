import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Link from '.';

const data = {
  url: 'https://google.com',
  children: 'This is a title',
};

export default { title: 'Link', component: Link, decorators: [withKnobs] };

export const Basic = () => <Link {...data} />;
