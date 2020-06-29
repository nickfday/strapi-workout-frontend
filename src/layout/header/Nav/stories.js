import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Nav from '.';

import items from './storiesData';

export default { title: 'Nav', component: Nav, decorators: [withKnobs] };

export const Basic = () => <Nav {...items} />;
