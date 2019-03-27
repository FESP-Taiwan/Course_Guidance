// @flow

export const SET_PAGE_NUMBER = 'COURSE_GUIDING/SET_PAGE_NUMBER';

export function setPageNumber(pageNum: number) {
  return {
    type: SET_PAGE_NUMBER,
    pageNum,
  };
}
