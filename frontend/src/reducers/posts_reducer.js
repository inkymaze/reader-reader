import merge from 'lodash/merge';
import {RECEIVE_POSTS, RECEIVE_POST} from '../actions/posts_actions';



const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge( {}, state)
    case RECEIVE_POST:

    default:
      return state;

  }
};

export default CommentsReducer;
