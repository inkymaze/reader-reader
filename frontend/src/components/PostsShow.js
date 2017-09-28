import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentsIndex from './CommentsIndex';

// import { deletePost } from '../utils/post_api';
import { requestPost, requestDeletePost, requestVotePost } from '../actions/posts_actions';
// import { requestComment } from '../actions/comments_actions';
// import _ from 'lodash';

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
  this.props.requestPost(this.props.postId);
  //   .then((data) => { this.setState({ posts: {byId: data} }); });

  //   .then((comments) => )
    // .then((post) => { this.setState(post: post);} );
  // fetchPost(this.props.match.params.id).then((data) => { this.setState({ post: data} )} );
}

updateVoteScore(id, vote) {
  this.props.requestVotePost(id, vote);
}

// componentWillReceiveProps(nextProps) {
//     if (this.props.posts !== nextProps.posts)
//      {
//       this.props.requestPost(nextProps.match.params.id);
//     }
//   }

// renderComments() {
//   // let order = this.state.order
//   // const sortedPosts = _.sortBy(this.props.posts.byId, this.state.sort).reverse();
//   // let sortedPosts = this.props.posts.sort(sortBy('timestamp'))
//   // // console.log('sortedPosts', sortedPosts);
//   // return _.map(this.props.comments.byId, comment => {
//
//     return (
//          <ul className='comment-info'>
//            <CommentsIndex postId={this.props.postId} />
//          </ul>
//     );
//
// }


onDeletePost(e) {
  e.preventDefault();
  this.props.requestDeletePost(this.props.posts.byId[this.props.postId])
  .then(() => this.props.history.push('/'));
}

render (){

  const singlePost = this.props.posts.byId[this.props.postId];

  if (!singlePost) return null;
  // console.log('post show props',this.props);
  // console.log('post singlepost',singlePost);
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
        <div>
          <CommentsIndex postId={singlePost.id} />
          <div className='new-comment'>
            <Link to={`/comments/${this.props.postId}/new`}
              className='add-comment-btn'>Add New Comment</Link>
          </div>
        </div>
      </div>
    </div>
  );
 }
}



const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  postId: ownProps.match.params.id,
});



const mapDispatchToProps = dispatch => ({
    requestPost:     (id) => dispatch(requestPost(id)),
    requestDeletePost: (post) => dispatch(requestDeletePost(post)),
    requestVotePost: (id, vote) => dispatch(requestVotePost(id, vote)),

});

export default connect(mapStateToProps,mapDispatchToProps)(PostsShow);
