// @flow

import { API_REQUEST } from 'redux-middleware-fetch';

export const SET_PAGE_NUMBER = 'COURSE_GUIDING/SET_PAGE_NUMBER';
export const GET_FILTER_DATA = 'COURSE_GUIDING/GET_FILTER_DATA';

export function setPageNumber(pageNum: number) {
  return {
    type: SET_PAGE_NUMBER,
    pageNum,
  };
}

export function getFilterData(data: Object) {
  console.log('data', data);
  return {
    [API_REQUEST]: {
      types: [
        GET_FILTER_DATA,
      ],
      auth: false,
      method: 'POST',
      body: data,
      entrypoint: '/login',
      json: true,
    },
  };
}
