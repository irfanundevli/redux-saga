import { combineReducers } from 'redux-immutable';
import { customersReducer as customers } from './customersReducer';

const rootReducer = combineReducers({ customers });

export default rootReducer;
