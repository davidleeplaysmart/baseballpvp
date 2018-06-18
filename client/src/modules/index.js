import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter/actions';
import auth from './auth/reducer';

export default combineReducers({
  router: routerReducer,
  counter: counter,
  user: auth
});