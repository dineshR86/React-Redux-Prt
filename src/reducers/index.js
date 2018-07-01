import { combineReducers } from 'redux';
import DashBoardReducer from './reducers_dashboard';

const rootReducer = combineReducers({
  users:DashBoardReducer
});

export default rootReducer;
