


export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";


export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});
