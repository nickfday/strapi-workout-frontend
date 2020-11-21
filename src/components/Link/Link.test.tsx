import React from 'react';

import { render } from '../../utils/testUtils';
import * as fixtures from './fixtures';
import Link from '.';

describe('Link', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Link {...fixtures.linkDefault} />);

    expect(getByText(fixtures.linkDefault.children as string)).toBeVisible();
  });
});
