import React from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts_actions';
const  { DOM: { select } } = React

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

// const renderField = field => (
//     <div>
//       <label>{field.input.label</label>
//       <input {...field.input}/>
//       {field.touched && field.error && <div className="error">{field.error}</div>}
//     </div>
// );
//
// const renderSelect = field => (
//   <div>
//     <label>{field.input.label</label>
//     <select {...field.input}/>
//     {field.touched && field.error && <div className="error">{field.error}</div>}
//   </div>
// );




onSubmit(values) {

    this.props.updatePost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title"
            label="Title" pl/>
          <Field name="category" component={select}>
                <option></option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </Field>
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

const form = reduxForm({
  form: 'PostForm'
});

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(form(PostForm));
