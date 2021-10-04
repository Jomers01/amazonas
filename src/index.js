//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Componentes
import AppRouter from './routers/AppRouter';
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider >,
  document.getElementById('root')
);
