import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../utils/api';



class PostsDetail extends React.Component {
  state = {
    post: {}
  }
componentDidMount() {
  console.log(this.props);
  // fetchPost(id).then((data) => { this.setState({ post: {byId: data} }) });
}

render (){
  const {postId, posts} = this.props;
  console.log(this.props.byId);
  return (
    <div>
      <Link to="/">Homepage</Link>
      <div>
        <h2>{posts.title}</h2>
        <h5>Category: {posts.category}</h5>
        <h6>{posts.author}</h6>
        <p>{posts.body}</p>
        <Link to={`/form/${postId}`}>Edit Post</Link>
      </div>

    </div>
  );
}
}

export default PostsDetail;
