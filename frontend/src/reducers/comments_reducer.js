import merge from 'lodash/merge';
import {RECEIVE_COMMENTS,
        RECEIVE_COMMENT,
        DELETE_COMMENT,
        VOTE_COMMENT} from '../actions/comments_actions';

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
      nextState = merge({}, state);
      const deleteId = action.comment.id;

      if (nextState.byId[deleteId]) {
        delete nextState.byId[deleteId];
        delete nextState.allIds[deleteId];
      }

      const removeIndex = nextState.allIds.indexOf(deleteId);
      if (removeIndex >= 0) {
        nextState.allIds.splice(removeIndex, 1);
      }
      return nextState;

    case VOTE_COMMENT:
      nextState = merge({},state);
      nextState.byId[action.comment.id] = action.comment;
      return nextState;

    default:
      return state;
  }
};

export default CommentsReducer;
