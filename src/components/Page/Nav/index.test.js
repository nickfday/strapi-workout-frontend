import React from 'react';
import ReactDOM from 'react-dom';

import items from './storiesData';
import Nav from '.';

describe('CardGroup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav {...items} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
