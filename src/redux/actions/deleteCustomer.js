export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export function deleteCustomer(id) {
  return {
    type: DELETE_CUSTOMER,
    id,
  };
}
