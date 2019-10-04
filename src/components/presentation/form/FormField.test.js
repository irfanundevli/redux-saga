/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'semantic-ui-react';
import { FormField } from './FormField';

describe('InputText Component', () => {
  let wrapper;
  const name = 'name';
  const placeholder = 'placeHolder';
  const tag = 'tag';
  const onChange = () => {};

  beforeAll(() => {
    wrapper = shallow(
      <FormField
        name={name}
        tag={tag}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  });

  it('should be wrapped by a form field component with 5 width', () => {
    const formField = wrapper.find(Form.Field);

    expect(formField).toHaveLength(1);
    expect(formField.props().width).toEqual('5');
  });

  it('should render a label field with prop inside form field', () => {
    const result = wrapper.find('label');

    expect(result).toHaveLength(1);
    expect(result.parent().is(Form.Field)).toBeTruthy();
    expect(result.text()).toEqual(tag);
    expect(result.first().props().htmlFor).toEqual(name);
  });

  it('should render a input field with props inside label', () => {
    const result = wrapper.find('input');

    expect(result).toHaveLength(1);
    expect(result.parent().is('label')).toBeTruthy();
    expect(result.first().props().id).toEqual(name);
    expect(result.first().props().name).toEqual(name);
    expect(result.first().props().placeholder).toEqual(placeholder);
    expect(result.first().props().onChange).toEqual(onChange);
  });
});
