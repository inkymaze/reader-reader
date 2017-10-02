import React from 'react';
import { connect } from 'react-redux';
import { requestCategories } from '../actions/category_actions';
import { requestPosts, requestVotePost, requestDeletePost } from '../actions/posts_actions';
import _ from 'lodash';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';

class PostCategory extends React.Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    if (category) {
      this.props.requestPosts();
    }
  }

  onDeletePost(e, post) {
    e.preventDefault();
    this.props.requestDeletePost(post);
  }

  updateVoteScore(id, vote) {
    this.props.requestVotePost(id, vote);
  }

  renderCategoryPosts() {
    const category = this.props.match.params.category;

    return _.map(this.props.posts.byId, post => {
      if (post.category === category) {
      return (
        <ul className='post-info' key={post.id}>
          <PostsDetail post={post} key={post.id}/>
            <div className='vote-buttons'>
              <button onClick={() => {this.updateVoteScore(post.id, 'upVote');}}>Upvote</button>
              <button onClick={() => {this.updateVoteScore(post.id, 'downVote');}}>Downvote</button>
            </div>
        </ul>


      );
     }
    });
  }


  render () {

    return (
      <div>
        <ul>
          {this.renderCategoryPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    requestCategories: () => dispatch(requestCategories()),
    requestPosts: () => dispatch(requestPosts()),
    requestDeletePost: (post) => dispatch(requestDeletePost(post)),
      requestVotePost: (id, vote) => dispatch(requestVotePost(id, vote)),
});

export default connect(mapStateToProps,mapDispatchToProps)(PostCategory);

// <ul className='post-info'>
//   <Link to={`/${post.category}/${post.id}`} className='post-detail-link' key={post.id}>
//     <PostsDetail post={post} key={post.id}/>
//   </Link>
//     <div className='vote-buttons'>
//       <button onClick={() => {this.updateVoteScore(post.id, 'upVote');}}>Upvote</button>
//       <button onClick={() => {this.updateVoteScore(post.id, 'downVote');}}>Downvote</button>
//     </div>
//     <button onClick={(e) => (this.onDeletePost(e, {post}))}>Delete Post</button>
//
// </ul>
