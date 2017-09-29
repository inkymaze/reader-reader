import React from 'react';
import { Link } from 'react-router-dom';
import { requestUpdateComment,
         requestComment } from '../actions/comments_actions';
import { connect } from 'react-redux';


class CommentForm extends React.Component {

componentDidMount() {
  this.props.requestComment(this.props.commentId)
    .then(() => { this.setState(this.props.comment);});
}

handleSubmit(e) {
  e.preventDefault();
  this.props.requestUpdateComment(this.state)
    .then(() => this.props.history.push(`/posts/${this.state.parentId}`));
}

update(field) {
  return e => this.setState({ [field]: e.target.value });
}

  render() {
    const singleComment = this.props.comment;
    if (!singleComment) return null;

    return(

      <form className='new-comment-form' onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder={singleComment.body}
          onChange={this.update("body")}/>
        <input
          type="text"
          placeholder={singleComment.author}
          onChange={this.update("author")}/>
        <button type='submit' className='submit-btn'>Submit</button>
        <Link to='/'>Cancel</Link>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  commentId: ownProps.match.params.commentId,
  comment: state.comments.byId[ownProps.match.params.commentId]
});


const mapDispatchToProps = dispatch => ({
  requestComment:     (id) => dispatch(requestComment(id)),
  requestUpdateComment: (comment) => dispatch(requestUpdateComment(comment))
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);
