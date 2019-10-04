import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { PageNotFound } from '../../PageNotFound';
import { Header } from '../header';
import { NewCustomerFormContainer } from '../../containers/newCustomer';
import { CustomerListContainer } from '../../containers/customerList';

export const Main = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: '5em' }}>
        <Switch>
          <Route exact path="/" component={CustomerListContainer} />
          <Route path="/customer" component={NewCustomerFormContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </>
  );
};
