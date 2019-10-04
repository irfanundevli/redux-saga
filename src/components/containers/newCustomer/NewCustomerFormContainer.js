import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCustomer } from '../../../redux/actions';
import { NewCustomerFormDisplay } from './NewCustomerFormDisplay';

const mapDispatchToProps = dispatch => ({
  addCustomer(customer) {
    dispatch(addCustomer(customer));
  },
});

export const NewCustomerFormContainer = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NewCustomerFormDisplay)
);
