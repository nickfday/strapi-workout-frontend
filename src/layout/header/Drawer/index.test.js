import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TemporaryDrawer from '.';
import storyData from './storiesData';

afterEach(cleanup);

describe('TemporaryDrawer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TemporaryDrawer {...storyData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<TemporaryDrawer {...storyData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('toggles open/close correctly', () => {
    const { asFragment, debug } = render(<TemporaryDrawer {...storyData} />);
    debug();

    expect(document.querySelector('.MuiDrawer-paper')).toBe(null);

    fireEvent.click(document.querySelector('.menu-toggle'));

    expect(document.querySelector('.MuiDrawer-paper')).toBeTruthy;

    fireEvent.keyDown(document.body, { key: 'Tab', code: '9' });
    fireEvent.keyDown(document.body, { key: 'Shift', code: 'ShiftLeft' });

    expect(document.querySelector('.MuiDrawer-paper')).toBeTruthy;

    fireEvent.keyDown(document.body, { key: 'Escape', code: '27' });

    debug();

    // fireEvent.keyDown(document.querySelector('.MuiBackdrop-root'), { key: 'Escape', code: '27' });

    // fireEvent.click(document.querySelector('.MuiBackdrop-root'));

    // expect(document.querySelector('.MuiDrawer-paperAnchorLeft')).toBe(null);

    // expect(document.querySelector('a').href).toBe('http://localhost/exercises');
    // fireEvent.click(document.querySelector("button"));
    // expect(asFragment('getByLabelText')).toBe('menu');
  });
});
