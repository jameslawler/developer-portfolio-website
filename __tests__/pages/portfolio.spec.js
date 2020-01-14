import React from 'react';
import renderer from 'react-test-renderer';

import Portfolio from '../../pages/portfolio';

describe('With Snapshot Testing', () => {
  it('Portfolio component should render', () => {
    const result = renderer.create(<Portfolio />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
