import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import randomize from 'randomatic';
import { requestCreateComment } from '../actions/comments_actions';
import { connect } from 'react-redux';

class CommentNew extends Component {
  state = {
    id: "",
    timestamp: Date.now(),
    body: "",
    author: "",
    parentId: "",
    voteScore: 0,
    deleted: 'False',
    parentDeleted: 'False'
  };

  componentDidMount() {
    this.setState({id: randomize('a0', 16),
       parentId: this.props.match.params.postId
     })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestCreateComment(this.state)
      .then(() => this.props.history.push(`/posts/${this.state.parentId}`));

  }
  update(field) {
    return e => this.setState({[field]: e.target.value });
  }

  render() {
    console.log('comment new', this.props);
    console.log('comment new state',this.state);
    return (
      <form className='new-comment-form' onSubmit={this.handleSubmit.bind(this)}>
        <input
                type="text"
                value={this.state.body}
                placeholder="Comment Body"
                onChange={this.update("body")}/>
        <input
                type="text"
                value={this.state.author}
                placeholder="Comment Author"
                onChange={this.update("author")}/>
        <button type='submit' className='submit-btn'>Submit</button>
        <Link to={`/posts/${this.state.parentId}`} className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  requestCreateComment: (comment) => dispatch(requestCreateComment(comment))
});

export default connect(null,mapDispatchToProps)(CommentNew);
