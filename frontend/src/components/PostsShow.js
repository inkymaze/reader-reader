import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../utils/api';

class PostsShow extends React.Component {
  state = {
    post: {}
  }

componentDidMount() {
  fetchPost(this.props.match.params.id).then((data) => { this.setState({ post: data} )} );
}

onDeletePost(e) {
  e.preventDefault();
  deletePost(this.state.post)
  .then(() => this.props.history.push('/'));;
}

render (){

  const {post} = this.state;

  return (
    <div>
      <div>
        <h3>Title:{post.title}</h3>
        <h5>Category: {post.category}</h5>
        <h5>Author:{post.author}</h5>
        <p>Body:{post.body}</p>
        <Link to={`/posts/${post.id}/edit`}>Edit Post</Link>
        <button onClick={(e) => (this.onDeletePost(e))}>Delete Post</button>
      </div>


    </div>
  );
}
}

export default PostsShow;
