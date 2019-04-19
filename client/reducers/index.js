// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import CourseGuiding from './CourseGuiding.js';

export default combineReducers({
  CourseGuiding,
  form: formReducer,
  routing: routerReducer,
});
