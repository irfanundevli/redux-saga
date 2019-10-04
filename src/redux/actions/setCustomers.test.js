import {
  SET_CUSTOMERS as SET_CUSTOMERS_ACTION_TYPE,
  setCustomers as setCustomersAction,
} from './setCustomers';

describe('set customer action', () => {
  it('should create an action to retrieve customet list', () => {
    const customers = [];
    const expectedAction = {
      type: SET_CUSTOMERS_ACTION_TYPE,
      customers,
    };

    const actualAction = setCustomersAction(customers);

    expect(expectedAction).toEqual(actualAction);
  });
});
