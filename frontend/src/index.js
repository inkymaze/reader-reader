import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';
import { BrowserRouter } from 'react-router-dom';
import { fetchPosts, fetchPost } from './utils/api';
import {Provider} from 'react-redux'
import { receivePosts } from './actions/posts_actions';




document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
    rootReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // TEST START ****
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  window.fetchPosts = fetchPosts;
  window.fetchPost = fetchPost;
  window.receivePosts = receivePosts;
  // window.receivePost = receivePost;
  // window.requestPosts = requestPosts;
  // window.requestPost = requestPost;
  // TEST END ****
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});
