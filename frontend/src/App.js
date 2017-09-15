import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostForm from './components/PostForm';
import PostsDetail from './components/PostsDetail';
import PostCategory from './components/PostCategory';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/posts' render={() => (
            <PostsIndex
              posts={this.state.posts}
              />
          )} />
        <Route path='/form' render={() => (
            <PostForm />
          )}/>
        <Route path='/posts/:id' render={() => (
            <PostsDetail  />
          )}/>
          <Route path='/:category/posts' render={() => (
              <PostCategory  />
            )}/>
      </div>
    );
  }
}

export default App;
