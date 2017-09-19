import React from 'react';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchPosts, fetchPost, fetchCategories} from '../utils/api';
class PostsIndex extends React.Component {
  // state = {
  //   categories: [],
  //   posts: {
  //     byId:{},
  //     allIds:[]
  //   },
  //   comments: {
  //     byId:{},
  //     allIds:[]
  //   }
  // }

//   componentDidMount() {
//     fetchPosts().then((data) => { this.setState({ posts: {byId: data} }) });
//     fetchCategories().then((data) => { this.setState({ categories: data });
//   });
// }

  renderPosts() {
    return _.map(this.props.posts.byId, post => {
      return (
        <div className='list-group-item' key={post.id}>
         <Link to={`/posts/${post.id}`} className='post-detail-link'>
           <ul className='post-info'>
             <PostsDetail postId={post.id} />

           </ul>
         </Link>
       </div>
      );
    });
  }
// must have buttons to filter through categories
  render () {
    console.log(this.props);
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
