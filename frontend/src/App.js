import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostForm from './components/PostForm';
import PostNew from './components/PostNew';
import PostsShow from './components/PostsShow';
// import PostCategory from './components/PostCategory';
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


  // handleFetchPost(id) {
  //   console.log(id);
  //   return (
  //     this.state.posts.byId[id]
  //   )
  // }


  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (<PostsIndex posts={this.state.posts} />)}/>
          <Route exact path='/posts/:id' component={PostsShow}/>
          <Route exact path='/posts/:id/edit' component={PostForm}/>
          <Route exact path='/form' component={PostNew}/>

        </Switch>
      </div>
    );
  }
}
// <Route exact path='/form/:id' render={(post) => (<PostForm post={post} />)}/>

export default App;

// post={this.handleFetchPost(id)}
