import React from 'react';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';
import _ from 'lodash';
class PostsIndex extends React.Component {




  renderPosts() {
    return _.map(this.props.posts.byId, post => {
      return (
        <li className='list-group-item' key={post.id}>
         <Link to={`/posts/${post.id}`}>
           {post.title}
         </Link>
        </li>
      );
    });
  }
// must have buttons to filter through categories
  render () {
    const posts = this.props;
    console.log(posts);
    return (
      <div>
        <ul className='posts-list'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default PostsIndex;
