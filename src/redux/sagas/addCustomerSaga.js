import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_CUSTOMER } from '../actions/addCustomer';
import { addCustomer as addCustomerApi } from '../../api/customerApi';
import { fetchCustomers } from '../actions';
import {
  showSuccessNotification,
  showErrorNotification,
} from '../actions/notification';

export function* addCustomerSaga(action) {
  const { customer } = action;
  const response = yield call(addCustomerApi, customer);
  const { status, message } = response;
  if (status === 200 || status === 201) {
    yield put(showSuccessNotification(message));
    yield put(fetchCustomers());
  } else {
    yield put(showErrorNotification(message));
  }
}

export function* addCustomerHandlerSaga() {
  yield takeEvery(ADD_CUSTOMER, addCustomerSaga);
}
