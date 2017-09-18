import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';
import { BrowserRouter } from 'react-router-dom';
import { fetchPosts } from './utils/api';




document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
    rootReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // TEST START ****
  window.getState = store.getState;
  window.fetchPosts = fetchPosts;
  // TEST END ****
  ReactDOM.render(
    <BrowserRouter store={store}>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
});
