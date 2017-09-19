import React from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../utils/api';
import { fetchPost } from '../utils/api';
const  { DOM: { select } } = React;


class PostForm extends React.Component {

  //   constructor(props) {
  //     super(props);
  //     this.state = { posts: {
  //       byId: {
  //         id: '',
  //         timestamp: Date.now(),
  //         title: '',
  //         body: '',
  //         author: '',
  //         category: '',
  //         voteScore: null,
  //         deleted: false
  //       }
  //     }
  //   };
  // }

//   state = {
//     post: {}
//   }
// componentDidMount() {
//   fetchPost(this.props.postId).then((data) => { this.setState({ post: data} )} );
// }
  render() {
    console.log(this.props);
    return(
      <h1>hello</h1>
    );
  }

}

export default PostForm;
//
//   //
//   // renderField(field){
//   //     // double destructuring
//   //     const { meta: {touched, error } } = field;
//   //     // const className = `form-group ${touched && error ? 'has-danger': ''}`;
//   //
//   //
//   //     return (
//   //       <div>
//   //         <label>{field.label}</label>
//   //         <input className='form-control'
//   //           type='text'
//   //           {...field.input}
//   //         />
//   //         <div className='text-help'>
//   //           {touched ? error : ''}
//   //         </div>
//   //       </div>
//   //     );
//   //   }
// // const renderField = field => (
// //   // return (
// //     <div>
// //       <label>{field.input.label}</label>
// //       <input {...field.input}/>
// //       {field.touched && field.error && <div className="error">{field.error}</div>}
// //     </div>
// // )
// //
// // renderSelect(field) {
// //   return (
// //   <div>
// //     <label>{field.input.label}</label>
// //     <select {...field.input}/>
// //     {field.touched && field.error && <div className="error">{field.error}</div>}
// //   </div>
// // );
// // }
//
//
//
//
// onSubmit(values) {
//
//     this.props.updatePost(values, () => {
//       this.props.history.push('/');
//     });
//   }
//
//   render() {
//     console.log(this.props);
//     const { handleSubmit } = this.props;
//
//
//     return (
//       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//         <div>
//         <label htmlFor="firstName">First Name</label>
//         <Field name="firstName" component="input" type="text" />
//         </div>
//
//
//         <button type='submit' className='submit-btn'>Create Post</button>
//         <Link to='/posts' className='cancel-btn'>Cancel</Link>
//       </form>
//     );
//   }
// }
//
// function validate(values) {
//   const errors = {};
//
//   if (!values.title) {
//     errors.title = "Enter a title!";
//   }
//   if (!values.categories) {
//     errors.categories = "Enter a categories!";
//   }
//   if (!values.content) {
//     errors.content = "Enter a content!";
//   }
//   // if errors is empty then form is fine to submit
//   // else redux-form assumes form is valid
//   return errors;
// }
//
// // below helps component communicate to the reducer that has already been setup
// // below specifies a namespace for the app state
// export default reduxForm({
//   validate,
//   form: 'PostForm'
// })(
//   connect(null,{createPost})(PostForm)
// );

//
// const form = reduxForm({
//   form: 'PostForm'
// });
//
// function mapStateToProps(state) {
//   return {
//     posts: state.posts
//   };
// }
//
// export default connect(mapStateToProps)(form(PostForm));

//
// import React, { Component } from 'react';
// // redux-form replaces the "connect" helper function
// import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createPost } from '../utils/api';
//
// class PostsForm extends Component {
//
//   // the 'on' handlers are replaced by the ...field below
//   // / onChange={field.input.onChange}
//   // onFocus={field.input.onFocus}
//   // field is a specified slice of state
//   // meta.error looks at that same 'name' attribute and
//   //  passes on errors for that tag if they exist
//
//   renderField(field){
//     // double destructuring
//     const { meta: {touched, error } } = field;
//     const className = `form-group ${touched && error ? 'has-danger': ''}`;
//
//
//     return (
//       <div className={className}>
//         <label>{field.label}</label>
//         <input className='form-control'
//           type='text'
//           {...field.input}
//         />
//         <div className='text-help'>
//           {touched ? error : ''}
//         </div>
//       </div>
//     );
//   }
//
//   // values with have title,content etc
//   onSubmit(values) {
//
//     this.props.createPost(values, () => {
//       this.props.history.push('/');
//     });
//   }
//
//   // the 'Field' only works with redux form and needs the component attribute
//   // to render JSX to the DOM
//
//   // redux form does not submit to backend, must be done manually
//
//   render () {
//     const { handleSubmit } = this.props;
//
//     return (
//       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//         <Field name="title"
//               label='Title for Post'
//                component={this.renderField}
//         />
//         <Field name="categories"
//               label='Categories'
//                component={this.renderField}
//         />
//         <Field name="content"
//               label='Post Content'
//                component={this.renderField}
//         />
//         <button type='submit' className='btn btn-primary'>Submit</button>
//         <Link to='/' className='btn btn-danger'>Cancel</Link>
//
//       </form>
//     );
//   }
// }
//
//
// function validate(values) {
//   const errors = {};
//
//   if (!values.title) {
//     errors.title = "Enter a title!";
//   }
//   if (!values.categories) {
//     errors.categories = "Enter a categories!";
//   }
//   if (!values.content) {
//     errors.content = "Enter a content!";
//   }
//   // if errors is empty then form is fine to submit
//   // else redux-form assumes form is valid
//   return errors;
// }
//
// // below helps component communicate to the reducer that has already been setup
// // below specifies a namespace for the app state
// export default reduxForm({
//   validate,
//   form: 'PostsForm'
// })(
//   connect(null,{createPost})(PostsForm)
// );
