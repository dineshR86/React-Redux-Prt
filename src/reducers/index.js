import { combineReducers } from 'redux';
import DashBoardReducer from './reducers_dashboard';
import PostReducer from './reducers_posts';

const rootReducer = combineReducers({
  users:DashBoardReducer,
  posts:PostReducer
});

export default rootReducer;
