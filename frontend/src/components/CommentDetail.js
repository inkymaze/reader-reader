import React from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteComment } from '../actions/comments_actions';
import { connect } from 'react-redux';



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

  onDeleteComment(e) {
    e.preventDefault();
    this.props.requestDeleteComment(this.props.comment)
     .then(() => console.log('hi'));
  }

  render (){
    const {comment} = this.props;
    console.log('comment props',this.props);
    if (!comment) return null;

    return (
      <div>
        <div>
          <h5>Author:{comment.author}</h5>
          <h5>{this.timeConverter(comment.timestamp)}</h5>
          <p>Body:{comment.body}</p>
          <h5>Score:{comment.voteScore}</h5>
          <Link to={`/comments/${comment.id}/edit`}>Edit Comment</Link>
          <button onClick={(e) => (this.onDeleteComment(e))}>Delete Comment</button>
        </div>
      </div>
    );
  }
}




const mapDispatchToProps = dispatch => ({
    requestDeleteComment: (comment) => dispatch(requestDeleteComment(comment))
});

export default connect(null,mapDispatchToProps)(CommentDetail);
