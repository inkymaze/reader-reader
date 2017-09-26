import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import randomize from 'randomatic';
import { createPost } from '../utils/post_api';

class PostsNew extends Component {
  state = {
    id: "",
    timestamp: Date.now(),
    title: "",
    body: "",
    author: "",
    category: "",
    voteScore: "",
    deleted: 'False'
  };

  componentDidMount() {
    this.setState({id: randomize('a0', 16)})

  }

  handleSubmit(e) {
    e.preventDefault();
    createPost(this.state)
      .then(() => this.props.history.push('/'));

  }

  update(field) {
    return e => this.setState({[field]: e.target.value });
  }

  render () {
    return (
      <form className='new-post-form' onSubmit={this.handleSubmit.bind(this)}>
        <input
                type="text"
                value={this.state.title}
                placeholder="Post Title"
                onChange={this.update("title")}/>
        <input
                type="text"
                value={this.state.body}
                placeholder="Post Body"
                onChange={this.update("body")}/>

                <select value={this.state.category}
                           ref={select => this.select = select}
                           onChange={this.update("category")}>
                     <option value="none" disabled>Select Category...</option>
                     <option value="react">React</option>
                     <option value="redux">Redux</option>
                     <option value="udacity">Udacity</option>
                   </select>
        <input
                type="select"
                value={this.state.author}
                placeholder="Post Author"
                onChange={this.update("author")}/>
        <button type='submit' className='submit-btn'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}



export default (PostsNew);
