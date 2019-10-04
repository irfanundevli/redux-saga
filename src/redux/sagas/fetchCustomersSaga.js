import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CUSTOMERS } from '../actions/fetchCustomers';
import { setCustomers } from '../actions/setCustomers';
import { fetchCustomers as fetchCustomersApi } from '../../api/customerApi';
import { showErrorNotification } from '../actions';

export function* fetchCustomersSaga() {
  const response = yield call(fetchCustomersApi);
  const { success, data, message } = response;

  if (success) {
    yield put(setCustomers(data));
  } else {
    yield put(showErrorNotification(message));
  }
}

export function* fetchCustomersHandlerSaga() {
  yield takeEvery(FETCH_CUSTOMERS, fetchCustomersSaga);
}
