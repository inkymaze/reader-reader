import merge from 'lodash/merge';
import {RECEIVE_POSTS, RECEIVE_POST, DELETE_POST, VOTE_POST } from '../actions/posts_actions';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: []
};

const PostsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let byId = {};
  let allIds = [];

  switch (action.type) {
    case RECEIVE_POSTS:
      const newObj = merge({},state);
      action.posts.forEach(post => {
        byId[post.id] = post;
        allIds.unshift(post.id);
      });
      newObj.byId = byId;
      newObj.allIds = allIds;
        return newObj;

    case RECEIVE_POST:
      allIds.unshift(action.post.id);

      return merge({},
             state,
             { byId: {[action.post.id]: action.post} },
              { allIds });
    case DELETE_POST:
      return _.omit(state, action.post);
      // const nextState = merge({},state);
      // action.post.forEach(post => {
      //   byId[post.id] = post;
      //   allIds.unshift(post.id);
      // });
      // nextState.byId = byId;
      // nextState.allIds = allIds;
      //   return nextState;
    case VOTE_POST:
    return {
      ...state, [action.post.id]: action.post,
      };

    default:
      return state;
  }
};

export default PostsReducer;
