import React from 'react';
import { connect } from 'react-redux';
import CommentDetail from './CommentDetail';
import _ from 'lodash';
import { requestComments,
         requestDeleteComment,
         requestVoteComment } from '../actions/comments_actions';

class CommentsIndex extends React.Component {

  componentDidMount() {
    this.props.requestComments(this.props.postId);
  }

  renderComments() {

    return _.map(this.props.comments.byId, comment => {
        return (
          <ul className='comment-info' key={comment.id} >
            <CommentDetail
              comment={comment}
              deleteComment={this.props.requestDeleteComment}
              requestVoteComment={this.props.requestVoteComment}/>
          </ul>
        );
    });
  }

  render() {

    return (
      <div>
        <div className='comment-header'>Comments({this.props.comments.allIds.length}):</div>
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
    requestComments: (postId) => dispatch(requestComments(postId)),
    requestDeleteComment: (comment) => dispatch(requestDeleteComment(comment)),
    requestVoteComment: (id, vote) => dispatch(requestVoteComment(id, vote)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentsIndex);
