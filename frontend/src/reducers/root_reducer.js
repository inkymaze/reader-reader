import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';
import CategoriesReducer from './categories_reducer';


const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
  categories: CategoriesReducer

});

export default rootReducer;
