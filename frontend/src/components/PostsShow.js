import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../utils/api';



class PostsShow extends React.Component {
  state = {
    post: {}
  }
componentDidMount() {
  fetchPost(this.props.postId.match.params.id).then((data) => { this.setState({ post: data} )} );
}

render (){
  console.log(this.props);
  const {post} = this.state;

  return (
    <div>
      <div>
        <h3>Title:{post.title}</h3>
        <h5>Category: {post.category}</h5>
        <h5>Author:{post.author}</h5>
        <p>Body:{post.body}</p>
        <Link to={`/form/${post.id}`}>Edit Post</Link>
      </div>


    </div>
  );
}
}

export default PostsShow;
