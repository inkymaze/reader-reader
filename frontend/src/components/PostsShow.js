import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { deletePost } from '../utils/api';
import { requestPost, requestDeletePost, requestVotePost } from '../actions/posts_actions';

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

updateVoteScore(id, vote) {
  this.props.requestVotePost(id, vote);
}

componentWillReceiveProps(nextProps) {
    if (this.props.posts !== nextProps.posts)
     {
      this.props.requestPost(nextProps.match.params.id);
    }
  }



onDeletePost(e) {
  e.preventDefault();
  this.props.requestDeletePost(this.props.posts.byId[this.props.match.params.id])
  .then(() => this.props.history.push('/'));
}

render (){

  const singlePost = this.props.posts.byId[this.props.match.params.id];

  if (!singlePost) return null;
  console.log(this.props);
  return (
    <div>
      <div>
        <h3>Title:{singlePost.title}</h3>
        <h5>Category: {singlePost.category}</h5>
        <p>Body:{singlePost.body}</p>
        <h5>Author:{singlePost.author}</h5>
        <h5>Score:{singlePost.voteScore}</h5>

        <div className='vote-buttons'>
          <button onClick={() => {this.updateVoteScore(singlePost.id, 'upVote');}}>Upvote</button>
          <button onClick={() => {this.updateVoteScore(singlePost.id, 'downVote');}}>Downvote</button>
        </div>
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
    requestPost:     (id) => dispatch(requestPost(id)),
    requestDeletePost: (post) => dispatch(requestDeletePost(post)),
    requestVotePost: (id, vote) => dispatch(requestVotePost(id, vote))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostsShow);
