import React from 'react';
import { connect } from 'react-redux';
import { requestCategories } from '../actions/category_actions';
import { requestPosts } from '../actions/posts_actions';
import _ from 'lodash';
import PostsDetail from './PostsDetail';
import { Link } from 'react-router-dom';

class PostCategory extends React.Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    if (category) {
      this.props.requestPosts();
    }
  }

  renderCategoryPosts() {
    const category = this.props.match.params.category;

    return _.map(this.props.posts.byId, post => {
      if (post.category === category) {
      return (
         <Link to={`/${post.category}/${post.id}`} className='post-detail-link' key={post.id}>
           <ul className='post-info'>
             <PostsDetail post={post} key={post.id}/>
           </ul>
         </Link>
      );
     }
    });
  }


  render () {
    return (
      <div>
        <ul>
          {this.renderCategoryPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    requestCategories: () => dispatch(requestCategories()),
    requestPosts: () => dispatch(requestPosts())
});

export default connect(mapStateToProps,mapDispatchToProps)(PostCategory);
