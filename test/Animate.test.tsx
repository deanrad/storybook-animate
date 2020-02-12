import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Animate } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Animate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
