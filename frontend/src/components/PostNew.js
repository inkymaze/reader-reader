import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import randomize from 'randomatic';
import { connect } from 'react-redux';
import { createPost } from '../utils/api';

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
    this.state.id = randomize('a0', 16);
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
    const { handleSubmit } = this.props
    console.log('Props',this.props);
    console.log('State', this.state);
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
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
                     <option value="none" disabled>Move to...</option>
                     <option value="react">React</option>
                     <option value="redux">Redux</option>
                     <option value="udacity">Udacity</option>
                   </select>
        <input
                type="select"
                value={this.state.author}
                placeholder="Post Author"
                onChange={this.update("author")}/>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     posts: state
//   }
// }


export default (PostsNew);
