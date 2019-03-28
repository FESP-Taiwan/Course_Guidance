// @flow

import {
  SET_PAGE_NUMBER,
  GET_FILTER_DATA,
} from '../actions/CourseGuiding.js';

type State = {
  pageNumber: number,
};

export default (state: State = {
  pageNumber: 0,
  filterData: {},
}, action: any) => {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pageNum,
      };
    case GET_FILTER_DATA:
      console.log('api success');
      return {
        ...state,
        filterData: action.data,
      };
    default:
      return state;
  }
};
