import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should match snapshot', () => {
    const getWrapper = () => shallow(
      <NavBar/>
    );
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});