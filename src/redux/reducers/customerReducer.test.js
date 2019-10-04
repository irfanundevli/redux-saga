import { fromJS } from 'immutable';
import { customersReducer as reducer } from './customersReducer';
import * as actions from '../actions';

describe('customer reducer', () => {
  it('should return initial state if given action is not handled ', () => {
    const initialState = fromJS([]);
    const action = {
      type: 'none',
    };

    const actualState = reducer(initialState, action);

    expect(actualState).toEqual(initialState);
  });

  it('should handle SET_CUSTOMERS action', () => {
    const customerList = [
      { id: 0, firstName: 'first', lastName: 'last', city: 'city' },
    ];
    const initialState = fromJS([]);
    const action = {
      type: actions.SET_CUSTOMERS,
      customers: customerList,
    };

    const actualState = reducer(initialState, action);

    expect(actualState).toEqual(fromJS(customerList));
  });
});
