// @flow

import {
  SET_PAGE_NUMBER,
  GET_FILTER_DATA,
  SET_FIELD_NUMBER,
} from '../actions/CourseGuiding.js';

type State = {
  pageNumber: number,
};

export default (state: State = {
  pageNumber: 0,
  fieldNumber: 0,
  filterData: {},
}, action: any) => {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pageNum,
      };
    case GET_FILTER_DATA:
      return {
        ...state,
        filterData: action.data,
      };
    case SET_FIELD_NUMBER:
      return {
        ...state,
        fieldNumber: action.fieldNum,
      };
    default:
      return state;
  }
};
