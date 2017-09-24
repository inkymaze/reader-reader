import React from 'react';
import { connect } from 'react-redux';
import { requestCategories } from '../actions/category_actions';


class PostCategory extends React.Component {
  componentDidMount() {
    this.props.requestCategories();

  }

  renderCategories() {
    const {categories} = this.props;
    console.log('Category comp',this.props);
    return (
    <div>

    </div>
  );
  }


  render () {
    return (
      <div>

          {this.renderCategories()}
      </div>
    );
  }

}

const mapStateToProps = (state) => ({

  categories: state.categories
});

const mapDispatchToProps = dispatch => ({

    requestCategories: () => dispatch(requestCategories())


});

export default connect(mapStateToProps,mapDispatchToProps)(PostCategory);
