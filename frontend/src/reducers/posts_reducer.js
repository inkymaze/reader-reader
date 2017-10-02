import merge from 'lodash/merge';
import {RECEIVE_POSTS,
        RECEIVE_POST,
        DELETE_POST,
        VOTE_POST } from '../actions/posts_actions';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: []
};

const PostsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  let byId = {};
  let allIds = [];

  switch (action.type) {
    case RECEIVE_POSTS:
      nextState = merge({},state);
      action.posts.forEach(post => {
        byId[post.id] = post;
        allIds.unshift(post.id);
      });
      nextState.byId = byId;
      nextState.allIds = allIds;
        return nextState;

    case RECEIVE_POST:
      allIds.unshift(action.post.id);
      return merge({},
             state,
             { byId: {[action.post.id]: action.post} },
              { allIds });

    case DELETE_POST:
      nextState = merge({}, state);
      const deleteId = action.post.id;

      if (nextState.byId[deleteId]) {
        delete nextState.byId[deleteId];
        delete nextState.allIds[deleteId];
      }

      const removeIndex = nextState.allIds.indexOf(deleteId);
      if (removeIndex >= 0) {
        nextState.allIds.splice(removeIndex, 1);
      }
      return nextState;

    case VOTE_POST:
      nextState = merge({},state);
      nextState.byId[action.post.id] = action.post;
      return nextState;

    default:
      return state;
  }
};

export default PostsReducer;
