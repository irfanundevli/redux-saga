import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const TopMenu = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="div" name="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item as="div" name="customer">
            <Link to="/customer">New Customer</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
