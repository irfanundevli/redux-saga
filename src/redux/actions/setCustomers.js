export const SET_CUSTOMERS = 'SET_CUSTOMERS';

export function setCustomers(customers) {
  return {
    type: SET_CUSTOMERS,
    customers,
  };
}
