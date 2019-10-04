import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';

export class CustomerListDisplay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { fetchCustomers } = this.props;
    fetchCustomers();
  }

  handleDelete(id, e) {
    e.preventDefault();
    const { deleteCustomer } = this.props;
    deleteCustomer(id);
  }

  render() {
    const { customers } = this.props;
    const fetched = customers.length > 0;
    const customersList = customers.map(customer => (
      <Table.Row key={customer.id}>
        <Table.Cell>{customer.firstName}</Table.Cell>
        <Table.Cell>{customer.lastName}</Table.Cell>
        <Table.Cell>{customer.city}</Table.Cell>
        <Table.Cell>
          <Button
            icon
            labeledposition="left"
            color="red"
            onClick={e => {
              this.handleDelete(customer.id, e);
            }}
          >
            <Icon name="delete" />
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ));

    return (
      <>
        {fetched ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>{customersList}</Table.Body>
          </Table>
        ) : (
          <h1>Please wait...</h1>
        )}
      </>
    );
  }
}

CustomerListDisplay.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      city: PropTypes.string,
    })
  ).isRequired,
  fetchCustomers: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
};
