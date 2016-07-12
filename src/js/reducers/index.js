import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  form: formReducer // <-- redux-form
});

export default rootReducer;
