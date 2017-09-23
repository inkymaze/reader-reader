import React from 'react';
import { connect } from 'react-redux';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// import { fetchPosts, fetchCategories} from '../utils/api';
import { requestPosts } from '../actions/posts_actions';

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
    // fetchPosts().then((data) => { this.setState({ posts: {byId: data} }) });
    // fetchCategories().then((data) => { this.setState({ categories: data });
    this.props.requestPosts().then((data) => { this.setState({ posts: {byId: data} }) });
  };

  renderPosts() {
    return _.map(this.props.posts.byId, post => {
      return (

         <Link to={`/posts/${post.id}`} className='post-detail-link' key={post.id}>
           <ul className='post-info'>
             <PostsDetail post={post} key={post.id}/>
           </ul>
         </Link>

      );
    });
  }
// must have buttons to filter through categories
  render () {
    // console.log('Postsindex', this.props);
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

const mapStateToProps = ({posts}) => ({
  posts
});

const mapDispatchToProps = dispatch => ({
    requestPosts:     () => dispatch(requestPosts())

});

export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);
