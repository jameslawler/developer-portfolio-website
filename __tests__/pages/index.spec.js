import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../pages/index';

describe('With Snapshot Testing', () => {
  it('Home component should render', () => {
    const result = renderer.create(<Home />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
