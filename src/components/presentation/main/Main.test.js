import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Main } from './Main';
import { Header } from '../header';

describe('MainDisplay Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Main />);
  });

  it('should render a  Container', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('should contain a Switch component inside Container', () => {
    const result = wrapper.find(Switch);

    expect(result).toHaveLength(1);
    expect(result.parent().is(Container)).toBeTruthy();
  });

  it('should contain at least one Route component inside Switch component', () => {
    const result = wrapper.find(Route);

    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(
      result
        .first()
        .parent()
        .is(Switch)
    ).toBeTruthy();
    expect(
      result
        .last()
        .parent()
        .is(Switch)
    ).toBeTruthy();
  });

  it('should contain Header component', () => {
    const result = wrapper.find(Header);

    expect(result).toHaveLength(1);
  });
});
