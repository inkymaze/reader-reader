import { fetchCategories } from '../utils/post_api';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";


export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});


export const requestCategories = () => dispatch => {
  return fetchCategories().then(categories => {
    dispatch(receiveCategories(categories));
  });
};
