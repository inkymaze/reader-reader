export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";



export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment
});
