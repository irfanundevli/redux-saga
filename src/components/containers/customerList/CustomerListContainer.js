import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CustomerListDisplay } from './CustomerListDisplay';
import { customersSelector } from '../../../redux/selector';
import { fetchCustomers, deleteCustomer } from '../../../redux/actions';

const mapStateToProps = state => {
  const customers = customersSelector(state);
  return {
    customers,
  };
};

const mapDispatchToProps = {
  fetchCustomers,
  deleteCustomer,
};

export const CustomerListContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomerListDisplay)
);
