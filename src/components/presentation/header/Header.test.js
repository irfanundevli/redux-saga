import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { TopMenu } from '../menu';

describe('HeaderDisplay Component', () => {
  it('should contain only one TopMenu', () => {
    const wrapper = shallow(<Header />);

    const result = wrapper.find(TopMenu);

    expect(result).toHaveLength(1);
  });
});
