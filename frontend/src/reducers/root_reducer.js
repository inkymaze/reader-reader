import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';



const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer
});

export default rootReducer;
