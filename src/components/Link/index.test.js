import { render, cleanup } from '@testing-library/react';

import Link from '.';

const testProps = {
  title: 'exercises',
  url: '/exercises',
};

afterEach(cleanup);

it('renders props correctly', () => {
  const { getByTestId } = render(<Link {...testProps}>Exercises</Link>);
  expect(getByTestId('anchor').textContent).toBe('Exercises');
  expect(document.querySelector('a').href).toBe('http://localhost/exercises');
});
