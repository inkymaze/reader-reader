import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostForm from './components/PostForm';
import PostsDetail from './components/PostsDetail';
import PostCategory from './components/PostCategory';
import { fetchPosts } from './utils/api';

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
    let allPosts = fetchPosts();
    console.log(fetchPosts);
    this.setState({ posts: {allPosts} });

  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Route exact path='/' render={() => (<PostsIndex posts={this.state.posts} />)}/>

      </div>
    );
  }
}

export default App;
