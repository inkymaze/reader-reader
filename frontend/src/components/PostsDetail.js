import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestDeletePost } from '../actions/posts_actions';
import { requestComments } from '../actions/comments_actions';

class PostsDetail extends React.Component {

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



  onDeletePost(e) {
    e.preventDefault();
    this.props.requestDeletePost(this.props.post);
  }

  render (){

    const {post} = this.props;

    return (
      <div>
        <div>
          <Link to={`/${post.category}/${post.id}`}

            className='post-detail-link' key={post.id}>
          <h3>Title:{post.title}</h3>
          <h5>Category: {post.category}</h5>
          <h5>Author:{post.author}</h5>
          <h5>{this.timeConverter(this.props.post.timestamp)}</h5>
          <p>Body:{post.body}</p>
          <h5>({this.props.count}) comments on this post</h5>
          </Link>
          <h5>Score:{post.voteScore}</h5>
            <Link to={`/posts/${post.id}/edit`}>Edit Post</Link>
            <button onClick={(e) => (this.onDeletePost(e))}>Delete Post</button>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  requestDeletePost: (post) => dispatch(requestDeletePost(post)),
  requestComments: (postId) => dispatch(requestComments(postId))
});

export default connect(null,mapDispatchToProps)(PostsDetail);
