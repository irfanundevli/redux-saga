import { createSelector } from 'reselect';

const customersBasicSelector = state => state.get(`customers`);

export const customersSelector = createSelector(
  customersBasicSelector,
  customers => customers.toJS()
);
