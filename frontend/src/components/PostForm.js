import React from 'react';
import { Link } from 'react-router-dom';
import { requestUpdatePost, requestPost } from '../actions/posts_actions';
import { connect } from 'react-redux';
const  { DOM: { select } } = React;


class PostForm extends React.Component {
  state = {
  }


componentDidMount() {
  this.props.requestPost(this.props.match.params.id)
  // .then((data) => { this.setState({ posts: {byId: data} }) });
  // requestPost(this.props.match.params.id)
    .then((post) => { this.setState(post);} );
}

handleSubmit(e) {
  e.preventDefault();
  requestUpdatePost(this.state)
    .then(() => this.props.history.push('/'));
}

update(field) {
  return e => this.setState({ [field]: e.target.value });
}
  render() {
    // console.log(this.state);
    console.log(this.props);

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


const mapStateToProps = ({post}) => {
  return (
    post
  )
}

const mapDispatchToProps = dispatch => ({
    requestPost:     (id) => dispatch(requestPost(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostForm);

// export default PostForm;
