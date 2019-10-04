import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { configure as configureStore } from '../redux/store';
import { Main } from './presentation/main';

const store = configureStore();
export const App = () => (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
        <ToastContainer autoClose={2000} draggable={false} />
      </BrowserRouter>
    </Provider>
  </div>
);
