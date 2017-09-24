import React from 'react';

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
    console.log(this.props);
    return (
      <div>
        <div>
          <h3>Title:{post.title}</h3>
          <h5>Category: {post.category}</h5>
          <h5>Author:{post.author}</h5>
          <h5>{this.timeConverter(this.props.post.timestamp)}</h5>
          <p>Body:{post.body}</p>

        </div>
      </div>
    );
  }
}

export default PostsDetail;
