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
  filterData: [],
  dropDownData: {
    1: ['企業管理學系', '企業管理學系', '企業管理學系', '企業管理學系', '企業管理學系', '企業管理學系', '企業管理學系', '企業管理學系'],
    2: ['一', '二', '三', '四'],
    3: ['星期一', '星期二', '星期三', '星期四', '星期五'],
    4: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三'],
    5: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三'],
  },
}, action: any) => {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pageNum,
      };
    case GET_FILTER_DATA: {
      const actionData = Object.values(action);
      const clearIndex = actionData.indexOf(undefined);
      const dataList = [
        ...actionData.slice(0, clearIndex),
      ];
      return {
        ...state,
        filterData: dataList,
      };
    }
    case SET_FIELD_NUMBER:
      return {
        ...state,
        fieldNumber: action.fieldNum,
      };
    default:
      return state;
  }
};
