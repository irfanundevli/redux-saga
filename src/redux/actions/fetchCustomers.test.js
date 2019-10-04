import { FETCH_CUSTOMERS, fetchCustomers } from './fetchCustomers';

describe('fetch customer action', () => {
  it('should create an action to fetch customer list', () => {
    const expectedAction = {
      type: FETCH_CUSTOMERS,
    };

    const actualAction = fetchCustomers();

    expect(actualAction).toEqual(expectedAction);
  });
});
