import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { FormField } from '../../presentation/form';

export class NewCustomerFormDisplay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      /* eslint-disable react/no-unused-state */
      firstName: '',
      lastName: '',
      city: '',
      /* eslint-disable react/no-unused-state */
    };

    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputTextChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  handleSubmit(evnt) {
    evnt.preventDefault();
    const customer = this.state;
    const { addCustomer } = this.props;
    addCustomer(customer);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField
          name="firstName"
          tag="Fist Name"
          onChange={this.onInputTextChange}
        />
        <FormField
          name="lastName"
          tag="Last Name"
          onChange={this.onInputTextChange}
        />
        <FormField name="city" tag="City" onChange={this.onInputTextChange} />
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

NewCustomerFormDisplay.propTypes = {
  addCustomer: PropTypes.func.isRequired,
};
