import axios from 'axios';

export function fetchCustomers() {
  return axios.get('http://localhost:3001/customers').then(
    response => {
      return {
        success: true,
        data: response.data,
      };
    },
    error => {
      const { status, data } = error.response;
      return {
        status,
        message: `Error occured: ${status} - ${data}`,
      };
    }
  );
}

export function addCustomer(customer) {
  return axios.post('http://localhost:3001/customers', customer).then(
    response => {
      const { status } = response;
      return {
        status,
        message: 'Customer is saved sucessfully!',
      };
    },
    error => {
      const { status, data } = error.response;
      return {
        status,
        message: data,
      };
    }
  );
}

export function deleteCustomer(id) {
  return axios.delete(`http://localhost:3001/customers/${id}`).then(
    response => {
      const { status } = response;
      return {
        status,
        message: 'Customer is deleted sucessfully!',
      };
    },
    error => {
      const { status, data } = error.response;
      return {
        status,
        message: data,
      };
    }
  );
}
