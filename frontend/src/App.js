import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostForm from './components/PostForm';
import PostsDetail from './components/PostsDetail';
import PostCategory from './components/PostCategory';
import { fetchPosts, fetchCategories } from './utils/api';

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

  componentDidMount() {
    fetchPosts().then((data) => { this.setState({ posts: {byId: data} }) });
    fetchCategories().then((data) => { this.setState({ categories: data });
  });
}
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Route exact path='/' render={() => (<PostsIndex posts={this.state.posts} />)}/>

      </div>
    );
  }
}

export default App;
