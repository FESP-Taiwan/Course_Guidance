// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import CourseGuiding from './CourseGuiding.js';
import FespStudy from './FespStudy';

export default combineReducers({
  CourseGuiding,
  FespStudy,
  form: formReducer,
  routing: routerReducer,
});
