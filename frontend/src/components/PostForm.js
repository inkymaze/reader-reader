import React from 'react';
import { Link } from 'react-router-dom';
import { requestUpdatePost, requestPost } from '../actions/posts_actions';
import { fetchPost } from '../utils/post_api';
import { connect } from 'react-redux';
const  { DOM: { select } } = React;


class PostForm extends React.Component {
  state = {
    // posts: {
    //   byId:{},
    //   allIds:[]
    // }
  }

componentDidMount() {
  // note this is just an API call 
  fetchPost(this.props.match.params.id).then((post) => { this.setState(post);} );
  // this.props.requestPost(this.props.match.params.id)
  //   .then((data) => { this.setState({ posts: {byId: data} }); });

}

handleSubmit(e) {
  e.preventDefault();
  // this.setState({id = this.props.match.params.id});
  this.props.requestUpdatePost(this.state)
    .then(() => this.props.history.push('/'));
}

update(field) {
  return e => this.setState({ [field]: e.target.value });
//   return e => this.setState((state) => {
//   const post = state[this.props.match.params.id];
//   const updatedValue = e.target.value;
//   return {
//     [this.props.match.params.id]: {
//       ...post,
//       [field]: updatedValue
//     }
//   };
// });
}

  render() {

    console.log('Props',this.props);
    // const singlePost = this.props.posts.byId[this.props.match.params.id];
    const singlePost = this.state
    if (!singlePost) return null;
    console.log('SinglePost',singlePost);
    console.log('State',this.state);
    return(
      <form className='new-post-form' onSubmit={this.handleSubmit.bind(this)}>
        <input  type="text"
                placeholder={singlePost.title}

                onChange={this.update("title")}/>
        <input  type="text"
                placeholder={singlePost.body}
                onChange={this.update("body")}
              />
        <select onChange={this.update("category")}>
             <option value="none" disabled>Select Category...</option>
             <option value="react">React</option>
             <option value="redux">Redux</option>
             <option value="udacity">Udacity</option>
           </select>
        <input
                type="text"
                placeholder={singlePost.author}
                onChange={this.update("author")}/>
        <button type='submit' className='submit-btn'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}


// const mapStateToProps = (state, ownProps) => ({
//   post: state.posts[ownProps.match.params.id]
//
// });

const mapStateToProps = (state) => ({
  posts: state

});


const mapDispatchToProps = dispatch => ({
  requestPost:     (id) => dispatch(requestPost(id)),
  requestUpdatePost: (post) => dispatch(requestUpdatePost(post))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostForm);

// export default PostForm;
