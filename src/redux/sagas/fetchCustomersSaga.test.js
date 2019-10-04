import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_CUSTOMERS,
  setCustomers,
  showErrorNotification,
} from '../actions';
import { fetchCustomers as fetchCustomersApi } from '../../api/customerApi';
import {
  fetchCustomersHandlerSaga,
  fetchCustomersSaga,
} from './fetchCustomersSaga';

describe('Fetch Customer Sagas', () => {
  it('should handle every FETCH_CUSTOMERS action', () => {
    const gen = fetchCustomersHandlerSaga();

    expect(gen.next().value).toEqual(
      takeEvery(FETCH_CUSTOMERS, fetchCustomersSaga)
    );
    expect(gen.next().done).toBeTruthy();
  });

  it('should fetch all customers and call setCustomer action if fetch customers api call is completed succesfully', () => {
    const data = [
      { id: 1, firstName: 'First', lastName: 'Last', city: 'London' },
    ];

    const gen = fetchCustomersSaga();

    expect(gen.next().value).toEqual(call(fetchCustomersApi));
    expect(gen.next({ success: true, data }).value).toEqual(
      put(setCustomers(data))
    );
    expect(gen.next().done).toBeTruthy();
  });

  it('should emit ERROR_NOTIFICATION action if fetch customers api call is failed', () => {
    const message = 'message';
    const gen = fetchCustomersSaga();

    expect(gen.next().value).toEqual(call(fetchCustomersApi));
    expect(gen.next({ message, error: true }).value).toEqual(
      put(showErrorNotification(message))
    );
    expect(gen.next().done).toBeTruthy();
  });
});
