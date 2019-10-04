export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export function addCustomer(customer) {
  return {
    type: ADD_CUSTOMER,
    customer,
  };
}
