import {combineReducers} from 'redux';

import {reducer as User} from './user.reducers';

const RootReducer = combineReducers({
  User,
});

export default RootReducer;
