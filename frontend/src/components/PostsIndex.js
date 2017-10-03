import React from 'react';
import { connect } from 'react-redux';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { requestPosts, requestVotePost } from '../actions/posts_actions';
import { requestCategories } from '../actions/category_actions';
import { requestComments } from '../actions/comments_actions';

class PostsIndex extends React.Component {
  state = {
    sort: 'title'
  }

  componentDidMount() {
    this.props.requestCategories()
    this.props.requestPosts()


  };

  updateVoteScore(id, vote) {
    this.props.requestVotePost(id, vote);
  }

  commentCount(postId) {
    let count = 0;
    if (this.props.comments){
      _.map(this.props.comments.byId, comment => {

      if (comment.parentId === postId) {
        count += 1
        console.log(count);
      }
    }
      )
    }
      return count
  }

  renderPosts() {
    console.log('index props', this.props);
    const sortedPosts = _.sortBy(this.props.posts.byId, this.state.sort).reverse();

    return _.map(sortedPosts, post => {

      return (
        <ul className='post-info' key={post.id}>
          <PostsDetail post={post} key={post.id} count={this.commentCount(post.id)}/>
            <div className='vote-buttons'>
              <button onClick={() => {this.updateVoteScore(post.id, 'upVote');}}>Upvote</button>
              <button onClick={() => {this.updateVoteScore(post.id, 'downVote');}}>Downvote</button>
            </div>
        </ul>
      );

    });
  }

  renderCategoryButtons() {
    return _.map(this.props.categories.categories, cat => {
      return (
         <Link to={`/${cat.path}`} className='post-detail-link' key={cat.name}>
           <ul className='post-info'>
             <li>{cat.name}</li>
           </ul>
         </Link>
      );
    });
  }


  render () {
    console.log(this.props);
    if (!this.props.posts) return null;

    return (
      <div className='postsIndex'>
        <Link className='form-link' to='/form' >Create New Post</Link>
        <div className='filter-list'>
          <h3>Filter By Category</h3>
          <ul className="cateogry-group">
            {this.renderCategoryButtons()}
          </ul>
        </div>
        <ul className='posts-list'>
          {this.renderPosts()}
        </ul>
        <div className='filter-list'>
          Sort By:
          <button className='submit-btn' onClick={() => this.setState({sort: 'timestamp'})}>Date</button>
          <button className='submit-btn' onClick={() => this.setState({sort: 'voteScore'})}>Score</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({posts, categories, comments}) => ({
  posts,
  categories,
  comments
});

const mapDispatchToProps = dispatch => ({
    requestPosts:     () => dispatch(requestPosts()),
    requestCategories: () => dispatch(requestCategories()),
    requestVotePost: (id, vote) => dispatch(requestVotePost(id, vote)),
    requestComments: (postId) => dispatch(requestComments(postId))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);
