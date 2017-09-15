import merge from 'lodash/merge';
import {RECEIVE_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT} from '../actions/comments_actions';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: []
};


const CommentsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  let byId = {};
  let allIds = [];

  switch (action.type) {
    case RECEIVE_COMMENTS:
      nextState = initialState;
      action.comments.forEach(comment => {
        byId[comment.id] = comment;
        allIds.unshift(comment.id);
      });
      return merge( {}, state, { byId }, { allIds });

    case RECEIVE_COMMENT:
      let comment = action.comment;
      nextState = merge({}, state);
      nextState.byId[comment.id] = comment;
      nextState.allIds.unshift(comment.id);
      return nextState;

    case DELETE_COMMENT:
      let commentToDelete = action.comment;
    // not sure if omit will work in this case
      return _.omit(state, action.comment);
    default:
      return state;

  }
};

export default CommentsReducer;
