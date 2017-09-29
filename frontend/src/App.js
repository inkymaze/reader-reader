import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostForm from './components/PostForm';
import PostNew from './components/PostNew';
import PostsShow from './components/PostsShow';
import PostCategory from './components/PostCategory';
import CommentNew from './components/CommentNew';
import Header from './components/Header';
import CommentForm from './components/CommentForm';


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

        <Header />
        
        <Switch>
          <Route exact path='/' component={PostsIndex}/>
          <Route exact path='/form' component={PostNew}/>
          <Route exact path='/comments/:postId/new' component={CommentNew}/>
          <Route exact path='/:category' component={PostCategory}/>
          <Route exact path='/:category/:id' component={PostsShow}/>
          <Route exact path='/posts/:id/edit' component={PostForm}/>
          <Route exact path='/comments/:commentId/edit' component={CommentForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;
