import { fromJS } from 'immutable';
import * as actions from '../actions';

const initialValue = fromJS([]);

export function customersReducer(state = initialValue, action) {
  switch (action.type) {
    case actions.SET_CUSTOMERS:
      return fromJS(action.customers);
    default:
      return state;
  }
}
