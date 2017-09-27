import { fetchComments, fetchComment, updateComment, deleteComment, voteComment, createComment } from '../utils/comment_api';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";



export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveDeleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment
});

export const receiveVoteComment = (comment) => ({
  type: VOTE_COMMENT,
  comment
});

export const requestComments = (postId) => dispatch => {
  return fetchComments(postId).then( comments => {
      dispatch(receiveComments(comments));
    });
};

export const requestComment = (id) => dispatch => {
  return fetchComment(id).then( comment => {
      dispatch(receiveComment(comment));
    });
};

export const requestUpdateComment = (comment) => dispatch => {
  return updateComment(comment).then( commentRes => {
      dispatch(receiveComment(commentRes));
    });
};

export const requestDeleteComment = (comment) => dispatch => {
  return deleteComment(comment).then( commentRes => {
      dispatch(receiveDeleteComment(commentRes));
    });
};

export const requestVoteComment = (id, vote) => dispatch => {
  return voteComment(id, vote).then( commentRes => {
      dispatch(receiveVoteComment(commentRes));
    });
};

export const requestCreateComment = (comment) => dispatch => {
  return createComment(comment).then( commentRes => {
      dispatch(receiveComment(commentRes));
    });
};
