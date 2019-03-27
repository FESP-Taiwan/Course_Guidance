// @flow

import {
  SET_PAGE_NUMBER,
} from '../actions/CourseGuiding.js';

type State = {
  pageNumber: number,
};

export default (state: State = {
  pageNumber: 0,
}, action: any) => {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pageNum,
      };
    default:
      return state;
  }
};
