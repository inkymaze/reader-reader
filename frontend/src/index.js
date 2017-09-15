import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer
);

ReactDOM.render(
  <BrowserRouter store={store}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
