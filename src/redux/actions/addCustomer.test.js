import { ADD_CUSTOMER, addCustomer } from './addCustomer';

describe('Add customer action', () => {
  it('should create an action object', () => {
    const customer = {};
    const expectedAction = {
      type: ADD_CUSTOMER,
      customer,
    };

    const action = addCustomer(customer);

    expect(action).toEqual(expectedAction);
  });
});
