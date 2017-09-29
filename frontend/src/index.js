import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});
