import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostForm from './components/PostForm';
import PostNew from './components/PostNew';
import PostsShow from './components/PostsShow';
import PostCategory from './components/PostCategory';
import CommentNew from './components/CommentNew';
import Header from './components/Header';
// import { fetchPosts, fetchCategories} from './utils/api';

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

  //   componentDidMount() {
  //     fetchPosts().then((data) => { this.setState({ posts: {byId: data} }) });
  //     fetchCategories().then((data) => { this.setState({ categories: data });
  //   });
  // }

  render() {
    return (
      <div className="App">

        <Header />
        <Switch>
          <Route exact path='/' component={PostsIndex}/>
          <Route exact path='/form' component={PostNew}/>
            <Route exact path='/comments' component={CommentNew}/>

          <Route exact path='/posts/:postId/comments/' component={CommentNew}/>
          <Route exact path='/:category' component={PostCategory}/>
          <Route exact path='/:category/:id' component={PostsShow}/>
          <Route exact path='/posts/:id/edit' component={PostForm}/>

        </Switch>
      </div>
    );
  }
}

export default App;
