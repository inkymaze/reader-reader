import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts_actions';

class PostForm extends React.Component {
  render() {
    return (
      <form >
        <Field name="title"
            label="Title" />
        <Field name="categories"
          label="Categories" />
        <Field name="body"
          label="Body" />

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
