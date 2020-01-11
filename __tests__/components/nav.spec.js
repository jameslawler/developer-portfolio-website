import React from 'react';
import renderer from 'react-test-renderer';

import Nav from '../../components/nav';

describe('With Snapshot Testing', () => {
  it('Nav component should render', () => {
    const result = renderer.create(<Nav />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
