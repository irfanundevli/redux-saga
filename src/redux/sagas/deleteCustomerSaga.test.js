import { takeEvery, call, put } from 'redux-saga/effects';
import {
  deleteCustomerHandlerSaga,
  deleteCustomerSaga,
} from './deleteCustomerSaga';
import {
  DELETE_CUSTOMER,
  showSuccessNotification,
  showErrorNotification,
  fetchCustomers,
} from '../actions';
import { deleteCustomer as deleteCustomerApi } from '../../api/customerApi';

describe('deleteCustomer saga', () => {
  it('should handle  every DELETE_CUSTOMER action', () => {
    const gen = deleteCustomerHandlerSaga();

    expect(gen.next().value).toEqual(
      takeEvery(DELETE_CUSTOMER, deleteCustomerSaga)
    );
    expect(gen.next().done).toBeTruthy();
  });

  it('should show success message and fetch new customer list when delete operation is completed successfully', () => {
    const id = 0;
    const message = 'message';
    const action = {
      id,
    };

    const gen = deleteCustomerSaga(action);

    expect(gen.next({ id }).value).toEqual(call(deleteCustomerApi, id));
    expect(gen.next({ message, status: 204 }).value).toEqual(
      put(showSuccessNotification(message))
    );
    expect(gen.next({ status: 200 }).value).toEqual(put(fetchCustomers()));
    expect(gen.next().done).toBeTruthy();
  });

  it('should show error message  when delete operation is failed', () => {
    const id = 0;
    const message = 'error';
    const action = {
      id,
    };

    const gen = deleteCustomerSaga(action);

    expect(gen.next({ id }).value).toEqual(call(deleteCustomerApi, id));
    expect(gen.next({ message, status: 400 }).value).toEqual(
      put(showErrorNotification(message))
    );

    expect(gen.next().done).toBeTruthy();
  });
});
