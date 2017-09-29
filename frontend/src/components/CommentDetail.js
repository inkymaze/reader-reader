import React from 'react';
import { Link } from 'react-router-dom';

class CommentDetail extends React.Component {

  timeConverter(UNIX_timestamp){
  let a = new Date(UNIX_timestamp);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = date + '-' + month + ' ' + year + ' at ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  handleDeleteComment(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment);
  }

  updateVoteScore(id, vote) {
    this.props.requestVoteComment(id, vote);
  }

  render (){
    const {comment} = this.props;

    if (!comment) return null;

    return (
      <div>
        <div>
          <h5>Author:{comment.author}</h5>
          <h5>{this.timeConverter(comment.timestamp)}</h5>
          <p>Body:{comment.body}</p>
          <h5>Score:{comment.voteScore}</h5>
            <button onClick={() => {this.updateVoteScore(comment.id, 'upVote');}}>Upvote</button>
            <button onClick={() => {this.updateVoteScore(comment.id, 'downVote');}}>Downvote</button>
          <Link to={`/comments/${comment.id}/edit`}>Edit Comment</Link>
          <button onClick={this.handleDeleteComment.bind(this)}>Delete Comment</button>
        </div>
      </div>
    );
  }
}


export default CommentDetail;
