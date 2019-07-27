import { combineReducers } from 'redux';
import chat from './chat';
import system from './system';
import account from './account';
export default combineReducers({
  chat,
  system,
  account,
});
