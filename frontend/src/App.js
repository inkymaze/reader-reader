import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostForm from './components/PostForm';
import PostsDetail from './components/PostsDetail';
import PostCategory from './components/PostCategory';

import './App.css';

class App extends Component {
  state = {
    categories: [],
    posts: {
      byId:{},
      allIds:[]
    },
    comments: {
      byId:{},
      allIds:[]
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (<PostsIndex/>)}/>
        <Route path='/form' component={<PostForm />}/>
        <Route path='/posts/:id' component={<PostsDetail />}/>
        <Route path='/:category/posts' component={<PostCategory/>}/>
      </div>
    );
  }
}

export default App;
