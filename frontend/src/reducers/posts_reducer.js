import merge from 'lodash/merge';
import {RECEIVE_POSTS, RECEIVE_POST } from '../actions/posts_actions';

const initialState = {
  byId: {},
  allIds: []
};

const PostsReducer = (state = initialState, action) => {
  Object.freeze(state);
  // let nextState;
  let byId = {};
  let allIds = [];

  switch (action.type) {
    case RECEIVE_POSTS:
      action.posts.forEach(post => {
        byId[post.id] = post;
        allIds.unshift(post.id);
      });
      return merge({}, state, { byId }, { allIds });
    case RECEIVE_POST:
      allIds.unshift(action.post.id);
      return merge({},
             state,
             { byId: {[action.post.id]: action.post} },
              { allIds });


    default:
      return state;
  }
};

export default PostsReducer;
