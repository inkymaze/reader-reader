import React from 'react';
import { Link } from 'react-router-dom';


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
  render (){
    const {post} = this.props;

    return (
      <div>
        <div>
          <h3>Title:{post.title}</h3>
          <h5>Category: {post.category}</h5>
          <h5>Author:{post.author}</h5>
          <h5>{this.timeConverter(this.props.post.timestamp)}</h5>
          <p>Body:{post.body}</p>
          <Link to={`/posts/${post.id}`}>Edit Post</Link>
        </div>
      </div>
    );
  }
}

export default PostsDetail;
