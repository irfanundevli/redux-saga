import { takeEvery, call, put } from 'redux-saga/effects';
import {
  DELETE_CUSTOMER,
  showSuccessNotification,
  fetchCustomers,
  showErrorNotification,
} from '../actions';
import { deleteCustomer as deleteCustomerApi } from '../../api/customerApi';

export function* deleteCustomerSaga(action) {
  const { id } = action;
  const response = yield call(deleteCustomerApi, id);
  const { status, message } = response;
  if (status >= 200 && status < 300) {
    yield put(showSuccessNotification(message));
    yield put(fetchCustomers());
  } else {
    yield put(showErrorNotification(message));
  }
}

export function* deleteCustomerHandlerSaga() {
  yield takeEvery(DELETE_CUSTOMER, deleteCustomerSaga);
}
