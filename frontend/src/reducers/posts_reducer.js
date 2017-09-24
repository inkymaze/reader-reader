import merge from 'lodash/merge';
import {RECEIVE_POSTS, RECEIVE_POST } from '../actions/posts_actions';

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
      // const nextState = merge({},state);
      // action.post.forEach(post => {
      //   byId[post.id] = post;
      //   allIds.unshift(post.id);
      // });
      // nextState.byId = byId;
      // nextState.allIds = allIds;
      //   return nextState;

    default:
      return state;
  }
};

export default PostsReducer;
