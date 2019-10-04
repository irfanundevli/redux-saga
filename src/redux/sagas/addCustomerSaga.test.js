import { takeEvery, call, put } from 'redux-saga/effects';
import { addCustomerSaga, addCustomerHandlerSaga } from './addCustomerSaga';
import { ADD_CUSTOMER, fetchCustomers } from '../actions';
import { addCustomer as addCustomerApi } from '../../api/customerApi';
import {
  showSuccessNotification,
  showErrorNotification,
} from '../actions/notification';

describe('Add Customer Sagas', () => {
  it('should handle every ADD_CUSTOMER action', () => {
    const gen = addCustomerHandlerSaga();

    expect(gen.next().value).toEqual(takeEvery(ADD_CUSTOMER, addCustomerSaga));
  });

  it('should success notification and fetch all customer if customer is saved succesfully', () => {
    const customer = {
      firstName: 'name',
      lastName: 'phone',
      city: 'Deneme',
    };
    const action = {
      customer,
    };
    const message = 'Success';

    const gen = addCustomerSaga(action);

    expect(gen.next({ customer }).value).toEqual(
      call(addCustomerApi, customer)
    );
    expect(gen.next({ message, status: 200 }).value).toEqual(
      put(showSuccessNotification(message))
    );
    expect(gen.next().value).toEqual(put(fetchCustomers()));
    expect(gen.next().done).toBeTruthy();
  });

  it('should error notification if customer save operation is failed', () => {
    const customer = {};
    const action = {
      customer,
    };
    const message = 'error';

    const gen = addCustomerSaga(action);

    expect(gen.next({ customer }).value).toEqual(
      call(addCustomerApi, customer)
    );
    expect(gen.next({ message, status: 400 }).value).toEqual(
      put(showErrorNotification(message))
    );
  });
});
