import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentDetail from './CommentDetail';
import _ from 'lodash';
import { requestComments, requestDeleteComment } from '../actions/comments_actions';




class CommentsIndex extends React.Component {

  componentDidMount() {
    this.props.requestComments(this.props.postId);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps',nextProps);

      if (this.props.comments !== nextProps.comments)
       {

        // this.props.requestComments(this.props.postId);
      }
    }

  renderComments() {
    return _.map(this.props.comments.byId, comment => {
      if (comment.parentId === this.props.postId && comment.deleted === false) {
        return (
          <ul className='comment-info' key={comment.id} >
            <CommentDetail
              comment={comment}
              deleteComment={this.props.requestDeleteComment}/>
          </ul>
        );
      }
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
    requestComments: (postId) => dispatch(requestComments(postId)),
    requestDeleteComment: (comment) => dispatch(requestDeleteComment(comment))

});

export default connect(mapStateToProps,mapDispatchToProps)(CommentsIndex);
