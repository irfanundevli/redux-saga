import { fromJS } from 'immutable';
import { customersSelector } from './customersSelector';

describe('Customer Selector', () => {
  it('should select customer list', () => {
    const customers = [
      { id: 0, firstName: 'first', lastName: 'last', city: 'city' },
    ];
    const state = fromJS({
      customers,
    });

    const result = customersSelector(state);

    expect(result).toEqual(customers);
  });
});
