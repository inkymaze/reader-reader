import React from 'react';
import { Link } from 'react-router-dom';
import { updatePost, fetchPost } from '../utils/api';
const  { DOM: { select } } = React;


class PostForm extends React.Component {
  state = {
  }


componentDidMount() {
  fetchPost(this.props.match.params.id)
    .then((post) => { this.setState(post);} );
}

handleSubmit(e) {
  e.preventDefault();
  updatePost(this.state)
    .then(() => this.props.history.push('/'));
}

update(field) {
  return e => this.setState({ [field]: e.target.value });
}
  render() {
    console.log(this.state);

    return(

          <form className='new-post-form' onSubmit={this.handleSubmit.bind(this)}>
            <input  type="text"
                    placeholder={this.state.title}
                    onChange={this.update("title")}/>
            <input  type="text"
                    placeholder={this.state.body}
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
                    placeholder={this.state.author}
                    onChange={this.update("author")}/>
            <button type='submit' className='submit-btn'>Submit</button>
            <Link to='/' className='btn btn-danger'>Cancel</Link>
          </form>
    );
  }
}

export default PostForm;
