import { combineReducers } from 'redux';
import settings            from './news-settings';
import articles            from './news-requset';
import menu               from './menu'

export default combineReducers({
  settings,
  articles,
  menu
});