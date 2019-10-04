import React from 'react';
import { shallow } from 'enzyme';
import { Table, Button } from 'semantic-ui-react';
import { CustomerListDisplay } from './CustomerListDisplay';

describe('CustomerList Component', () => {
  const fetchCustomers = () => {};
  const deleteCustomer = () => {};

  it('should render a message if customer list is empty', () => {
    const wrapper = shallow(
      <CustomerListDisplay
        customers={[]}
        fetchCustomers={fetchCustomers}
        deleteCustomer={deleteCustomer}
      />
    );

    const messageWrapper = wrapper.find('h1');

    expect(messageWrapper).toHaveLength(1);
    expect(messageWrapper.text()).toEqual('Please wait...');
  });

  it('should render a table if customer list is not empty', () => {
    const wrapper = shallow(
      <CustomerListDisplay
        customers={[
          {
            id: 0,
            firstName: 'First Name',
            lastName: 'Last Name',
          },
        ]}
        fetchCustomers={fetchCustomers}
        deleteCustomer={deleteCustomer}
      />
    );

    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it('should render a delete button for every customer', () => {
    const customerList = [
      { id: 0, firstName: 'White', lastName: 'Country' },
      { id: 2, firsName: 'Dark', lastName: 'Country' },
    ];
    const wrapper = shallow(
      <CustomerListDisplay
        customers={customerList}
        fetchCustomers={fetchCustomers}
        deleteCustomer={deleteCustomer}
      />
    );

    const result = wrapper.find(Button);

    expect(result).toHaveLength(2);
  });

  it('should handle delete event', () => {
    const customerList = [{ id: 0, firstName: 'White', lastName: 'Country' }];
    const spy = jest
      .spyOn(CustomerListDisplay.prototype, 'handleDelete')
      .mockImplementation(() => 0);

    const wrapper = shallow(
      <CustomerListDisplay
        customers={customerList}
        fetchCustomers={fetchCustomers}
        deleteCustomer={deleteCustomer}
      />
    );

    const btn = wrapper.find(Button).first();
    btn.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
