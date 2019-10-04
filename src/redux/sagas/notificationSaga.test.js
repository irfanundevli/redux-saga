import { take, takeEvery, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SUCCESS_NOTIFICATION, ERROR_NOTIFICATION } from '../actions';
import {
  showSuccessNotificationSaga,
  showSuccessToastify,
  showErrorNotificationSaga,
  showErrorToastify,
} from './notificationSaga';

describe('Notification sagas', () => {
  describe('should handle SHOW_NOTIFICATION action', () => {
    it('should fork a saga on each ERROR_NOTIFICATION action disptached', () => {
      const gen = showSuccessNotificationSaga();

      expect(gen.next().value).toEqual(
        takeEvery(SUCCESS_NOTIFICATION, showSuccessToastify)
      );
      expect(gen.next().done).toBeTruthy();
    });

    it('should show success toastify', () => {
      const message = 'message';
      const action = {
        message,
      };

      const gen = showSuccessToastify(action);

      expect(gen.next({ message }).value).toEqual(call(toast.success, message));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('should handle ERROR_NOTIFICATION action', () => {
    it('should fork a saga on each ERROR_NOTIFICATION action disptached', () => {
      const gen = showErrorNotificationSaga();

      expect(gen.next().value).toEqual(
        takeEvery(ERROR_NOTIFICATION, showErrorToastify)
      );
      expect(gen.next().done).toBeTruthy();
    });

    it('should show error toastify', () => {
      const message = 'message';
      const action = {
        message,
      };

      const gen = showErrorToastify(action);

      expect(gen.next({ message }).value).toEqual(call(toast.error, message));
      expect(gen.next().done).toBeTruthy();
    });
  });
});
