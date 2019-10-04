import {
  SUCCESS_NOTIFICATION,
  showSuccessNotification,
  ERROR_NOTIFICATION,
  showErrorNotification,
} from './notification';

describe('show notification actions', () => {
  it('should create success notification action', () => {
    const message = 'message';
    const expectedAction = {
      type: SUCCESS_NOTIFICATION,
      message,
    };

    const actualAction = showSuccessNotification(message);

    expect(actualAction).toEqual(expectedAction);
  });

  it('should create error notification action', () => {
    const message = 'error';
    const expectedAction = {
      type: ERROR_NOTIFICATION,
      message,
    };

    const actualAction = showErrorNotification(message);

    expect(actualAction).toEqual(expectedAction);
  });
});
