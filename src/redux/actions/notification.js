export const SUCCESS_NOTIFICATION = 'SUCCESS_NOTIFICATION';
export const ERROR_NOTIFICATION = 'ERROR_NOTIFICATION';

export function showSuccessNotification(message) {
  return {
    type: SUCCESS_NOTIFICATION,
    message,
  };
}

export function showErrorNotification(message) {
  return {
    type: ERROR_NOTIFICATION,
    message,
  };
}
