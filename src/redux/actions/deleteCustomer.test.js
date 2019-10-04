import { DELETE_CUSTOMER, deleteCustomer } from './deleteCustomer';

describe('deleteCustomer actions', () => {
  it('should create an action with DELETE_CUSTOMER type', () => {
    const id = 0;
    const expectedAction = {
      type: DELETE_CUSTOMER,
      id,
    };

    const actualAction = deleteCustomer(id);

    expect(actualAction).toEqual(expectedAction);
  });
});
