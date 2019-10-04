import React from 'react';
import { shallow } from 'enzyme';
import { Form, Button } from 'semantic-ui-react';
import { NewCustomerFormDisplay } from './NewCustomerFormDisplay';
import { FormField } from '../../presentation/form';

describe('CustomerFormDisplay Component', () => {
  let wrapper;

  beforeAll(() => {
    const addCustomer = () => {};
    wrapper = shallow(<NewCustomerFormDisplay addCustomer={addCustomer} />);
  });

  it('should render a form', () => {
    const result = wrapper.find(Form);
    expect(result).toHaveLength(1);
  });

  it('should contain three input text inside form component', () => {
    const result = wrapper.find(FormField);

    expect(result).toHaveLength(3);
    expect(
      result
        .first()
        .parent()
        .is(Form)
    ).toBeTruthy();
    expect(
      result
        .last()
        .parent()
        .is(Form)
    ).toBeTruthy();
  });

  it('should contain a submit button inside form component', () => {
    const result = wrapper.find(Button);

    expect(result).toHaveLength(1);
    expect(result.parent().is(Form)).toBeTruthy();
    expect(result.props().type).toEqual('submit');
  });
});
