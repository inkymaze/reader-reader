import React from 'react';
import { connect } from 'react-redux';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';
import CommentDetail from './CommentDetail';
import _ from 'lodash';
import { requestComments } from '../actions/comments_actions';




class CommentsIndex extends React.Component {

  componentDidMount() {
    this.props.requestComments(this.props.postId);
  }

  renderComments() {
    // let order = this.state.order
    // const sortedPosts = _.sortBy(this.props.posts.byId, this.state.sort).reverse();
    // let sortedPosts = this.props.posts.sort(sortBy('timestamp'))
    // console.log('sortedPosts', sortedPosts);
    return _.map(this.props.comments.byId, comment => {

      return (
           <ul className='comment-info' key={comment.id} >
             <CommentDetail comment={comment} />
           </ul>
      );
    });
  }

  render() {
    console.log('comments idx', this.props);
    return (
      <div>
        <div className='comment-header'>Comments:</div>
          <ul className='posts-list'>
            {this.renderComments()}
          </ul>

      </div>
    );
  }

}

const mapStateToProps = ({comments}) => ({
  comments
});

const mapDispatchToProps = dispatch => ({
    requestComments: (postId) => dispatch(requestComments(postId))

});

export default connect(mapStateToProps,mapDispatchToProps)(CommentsIndex);
