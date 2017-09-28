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
    console.log('DELETING POST ');
    console.log(state);
    console.log(action.post);
    console.log(_.omit(state, action.post));
      return _.omit(state, action.post);

    case VOTE_POST:
      const nextState = merge({},state);
      nextState.byId[action.post.id] = action.post;

      return nextState;
    default:
      return state;
  }
};

export default PostsReducer;
