import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createRoot } from 'react-dom/client';
import RootReducer from '../src/components/Reduce/Reduce';
import { App } from './App';

const store = createStore(RootReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
