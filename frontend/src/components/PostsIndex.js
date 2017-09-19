import React from 'react';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchPosts, fetchPost, fetchCategories} from '../utils/api';
class PostsIndex extends React.Component {
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




  renderPosts() {
    return _.map(this.state.posts.byId, post => {
      return (
        <div className='list-group-item'>
         <Link to={`/posts/${post.id}`} className='post-detail-link'>
           <ul className='post-info'>
             <PostsDetail post={post} key={post.id}/>

           </ul>
         </Link>
       </div>
      );
    });
  }
// must have buttons to filter through categories
  render () {
    console.log('PRops', this.props);
    console.log('State', this.state);
    return (
      <div>
        <Link className='form-link' to='/form' >Create New Post</Link>
        <ul className='posts-list'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default PostsIndex;
