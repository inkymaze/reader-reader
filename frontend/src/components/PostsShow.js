import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../utils/api';
import { requestPost } from '../actions/posts_actions';

class PostsShow extends React.Component {
  // state = {
  //   post: {}
  // }
  // state = {
  //   categories: [],
  //   posts: {
  //     byId:{},
  //     allIds:[]
  //   },
  //   comments: {
  //     byId:{},
  //     allIds:[]
  //   }
  // }

componentDidMount() {
  this.props.requestPost(this.props.match.params.id)
    .then((data) => { this.setState({ posts: {byId: data} }); });
    // .then((post) => { this.setState(post: post);} );
  // fetchPost(this.props.match.params.id).then((data) => { this.setState({ post: data} )} );
}

onDeletePost(e) {
  e.preventDefault();
  deletePost(this.state.post)
  .then(() => this.props.history.push('/'));;
}

render (){
  console.log('Props',this.props);
  const singlePost = this.props.posts.byId;

  console.log('singlepost',singlePost);


  return (
    <div>
      <div>

        <h3>Title:{singlePost.title}</h3>
        <h5>Category: {singlePost.category}</h5>
        <h5>Author:{singlePost.author}</h5>
        <p>Body:{singlePost.body}</p>
        <Link to={`/posts/${singlePost.id}/edit`}>Edit Post</Link>
        <button onClick={(e) => (this.onDeletePost(e))}>Delete Post</button>
      </div>
    </div>
  );
 }
}

const mapStateToProps = ({posts}) => ({
  posts
});

const mapDispatchToProps = dispatch => ({
    requestPost:     (id) => dispatch(requestPost(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostsShow);

// export default PostsShow;
