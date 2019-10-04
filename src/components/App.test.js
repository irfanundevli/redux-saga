import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Main } from './presentation/main';
import { configure as configureStore } from '../redux/store';
import { ToastContainer } from 'react-toastify';

jest.mock('../redux/store');

describe('App Component', () => {
  const dummyFn = () => {};
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  beforeEach(() => {
    configureStore.mockReturnValue(dummyFn);
    configureStore.mockReset();
  });

  it('should render redux provider with a store', () => {
    const result = wrapper.find(Provider);

    expect(result).toHaveLength(1);
    expect(result.find({ store: dummyFn })).toBeTruthy();
  });

  it('should render a browser router inside provider', () => {
    const result = wrapper.find(BrowserRouter);

    expect(result).toHaveLength(1);
    expect(result.parent().is(Provider)).toBeTruthy();
  });

  it('should render main component inside a browser router', () => {
    const result = wrapper.find(Main);

    expect(result).toHaveLength(1);
    expect(result.parent().is(BrowserRouter)).toBeTruthy();
  });

  it('should render toast container component inside a browser router', () => {
    const result = wrapper.find(ToastContainer);

    expect(result).toHaveLength(1);
    expect(result.parent().is(BrowserRouter)).toBeTruthy();
  });
});
