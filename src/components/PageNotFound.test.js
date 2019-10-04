import React from 'react';
import { shallow } from 'enzyme';
import { PageNotFound } from './PageNotFound';

describe('Page Not Found Component', () => {
  it('should contain h1 element', () => {
    const wrapper = shallow(<PageNotFound />);

    const result = wrapper.find('h1');

    expect(result).toHaveLength(1);
    expect(result.text()).toEqual('Page Not Found');
  });
});
