import React from 'react';
import { connect } from 'react-redux';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { requestPosts } from '../actions/posts_actions';
import { requestCategories } from '../actions/category_actions';

class PostsIndex extends React.Component {
  state = {
    categories: [],
    posts: {
      byId:{},
      allIds:[]
    },
    comments: {
      byId:{},
      allIds:[]
    },
    sort: 'title'
  }

  componentDidMount() {
    // fetchPosts().then((data) => { this.setState({ posts: {byId: data} }) });
    // fetchCategories().then((data) => { this.setState({ categories: data })});
    this.props.requestCategories()
    // .then((data) => { this.setState({ categories: data })});
    this.props.requestPosts()
    // .then((data) => { this.setState({ posts: {byId: data} }) });
  };

  renderPosts() {
    // let order = this.state.order
    const sortedPosts = _.sortBy(this.props.posts.byId, this.state.sort).reverse();
    // let sortedPosts = this.props.posts.sort(sortBy('timestamp'))
    // console.log('sortedPosts', sortedPosts);
    return _.map(sortedPosts, post => {

      return (
           <ul className='post-info' key={post.id}>
             <PostsDetail post={post} key={post.id}/>
           </ul>
      );
    });
  }

  renderCategoryButtons() {

    return _.map(this.props.categories.categories, cat => {
      return (

         <Link to={`/${cat.path}`} className='post-detail-link' key={cat.name}>
           <ul className='post-info'>
             <li>{cat.name}</li>
           </ul>
         </Link>

      );
    });
  }

  // sortPosts(field) {
  //   this.setState({order: field })
  // }
// must have buttons to filter through categories
  render () {
    // console.log('Postsindex ', this.props);
    // console.log('Posts Index state', this.state);
    if (!this.props.posts) return null;
    console.log('Posts idx',this.props);
    return (
      <div className='postsIndex'>
        <Link className='form-link' to='/form' >Create New Post</Link>
        <div className='filter-list'>
          <h3>Filter By Category</h3>
          <ul className="cateogry-group">
            {this.renderCategoryButtons()}
          </ul>
        </div>
        <ul className='posts-list'>
          {this.renderPosts()}
        </ul>
        <div className='filter-list'>
          Sort By:
          <button className='submit-btn' onClick={() => this.setState({sort: 'timestamp'})}>Date</button>
          <button className='submit-btn' onClick={() => this.setState({sort: 'voteScore'})}>Score</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({posts, categories}) => ({
  posts,
  categories
});

const mapDispatchToProps = dispatch => ({
    requestPosts:     () => dispatch(requestPosts()),
    requestCategories: () => dispatch(requestCategories())


});

export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);
