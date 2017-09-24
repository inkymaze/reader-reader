import { fetchCategories } from '../utils/api';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";


export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});


export const reuqestCategories = () => dispatch => {
  return fetchCategories().then(categories => {
    dispatch(receiveCategories(categories));
  });
};
