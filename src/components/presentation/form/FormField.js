import React from 'react';
import { Form } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

export const FormField = ({ name, tag, placeholder, onChange }) => {
  return (
    <Form.Field width="5">
      <label htmlFor={name}>
        {tag}
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </Form.Field>
  );
};

FormField.defaultProps = {
  placeholder: '',
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
