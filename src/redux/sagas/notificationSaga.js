import { takeEvery, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SUCCESS_NOTIFICATION, ERROR_NOTIFICATION } from '../actions';

export function* showSuccessToastify(action) {
  const { message } = action;
  yield call(toast.success, message);
}

export function* showSuccessNotificationSaga() {
  yield takeEvery(SUCCESS_NOTIFICATION, showSuccessToastify);
}

export function* showErrorToastify(action) {
  const { message } = action;
  yield call(toast.error, message);
}

export function* showErrorNotificationSaga() {
  yield takeEvery(ERROR_NOTIFICATION, showErrorToastify);
}
