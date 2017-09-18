import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts_actions';

class PostForm extends React.Component {
  state = { posts: {
    byId: {
      id: '',
      timestamp: Date.now(),
      title: '',
      body: '',
      author: '',
      category: '',
      voteScore: null,
      deleted: false
    }
  }
}
  render() {
    return (
      <form >
        <Field name="title"
            label="Title" />
        <Field name="categories"
          label="Categories" />
        <Field name="body"
          label="Body" />
        <Field name="author"
            label="Author" />
          <Field name="category"
          label="Category" />

        <button type='submit' className='submit-btn'>Create Post</button>
        <Link to='/posts' className='cancel-btn'>Cancel</Link>
      </form>
    );
  }
}
//
//
// export default reduxForm({
//   val
// })

export default PostForm;
