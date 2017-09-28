import React from 'react';
import { Link } from 'react-router-dom';
import { requestUpdateComment, requestComment } from '../actions/comments_actions';
import { connect } from 'react-redux';


class CommentForm extends React.Component {
  // state = {
  //   // comments: {
  //   //   byId:{},
  //   //   allIds:[]
  //   // }
  // }

componentDidMount() {
  // note this is just an API call
  // fetchPost(this.props.match.params.id).then((comment) => { this.setState(comment);} );
  // this.props.requestPost(this.props.match.params.id)
  //   .then((data) => { this.setState({ comments: {byId: data} }); });
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
//   return e => this.setState((state) => {
//   const comment = state[this.props.match.params.id];
//   const updatedValue = e.target.value;
//   return {
//     [this.props.match.params.id]: {
//       ...comment,
//       [field]: updatedValue
//     }
//   };
// });
}

  render() {

    console.log('COmment edit form',this.props);
    console.log('State',this.state);
    // const singleComment = this.props.comments.byId[this.props.match.params.id];
    const {comment} = this.props
    const singleComment = this.props.comment
    if (!singleComment) return null;
    console.log('SingleComment',comment.author);

    return(

      <form className='new-comment-form' onSubmit={this.handleSubmit.bind(this)}>

        <input  type="text"
                placeholder={singleComment.body}
                onChange={this.update("body")}
              />

        <input
                type="text"
                placeholder={singleComment.author}
                onChange={this.update("author")}/>
        <button type='submit' className='submit-btn'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>

    );
  }
}


// const mapStateToProps = (state, ownProps) => ({
//   comment: state.comments[ownProps.match.params.id]
//
// });

const mapStateToProps = (state, ownProps) => ({
  commentId: ownProps.match.params.commentId,
  comment: state.comments.byId[ownProps.match.params.commentId],
  comments: state.comments



});


const mapDispatchToProps = dispatch => ({
  requestComment:     (id) => dispatch(requestComment(id)),
  requestUpdateComment: (comment) => dispatch(requestUpdateComment(comment))
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);
