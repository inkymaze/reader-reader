import { fetchPosts, fetchPost, updatePost, deletePost } from '../utils/api';



export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";


export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receiveDeletePost = (post) => ({
  type: DELETE_POST,
  post
});


export const requestPosts = () => dispatch => {
  return fetchPosts().then( posts => {
      dispatch(receivePosts(posts));
    });
};

export const requestPost = (id) => dispatch => {
  return fetchPost(id).then( post => {
      dispatch(receivePost(post));
    });
};

export const requestUpdatePost = (post) => dispatch => {
  return updatePost(post).then( postRes => {
      dispatch(receivePost(postRes));
    });
};

export const requestDeletePost = (post) => dispatch => {
  return deletePost(post).then( postRes => {
      dispatch(receiveDeletePost(postRes));
    });
};
