// @flow

import React from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import ExhibitionBoard from './ExhibitionBoard';

const styles = {
  pageWrapper: {
    position: 'relative',
    display: 'inline-block',
    whiteSpace: 'normal',
    width: '100%',
    height: '100%',
    transition: '1s',
    fontSize: 'initial',
    verticalAlign: 'top',
  },
};

function SelectionPage({
  pageNumber,
  setPageNumber,
}: {
  pageNumber: number,
  setPageNumber: Function,
}) {
  return (
    <div style={[styles.pageWrapper, {
      left: `-${pageNumber * 100}%`,
    }]}>
      <ExhibitionBoard />
    </div>
  );
}

const reduxHook = connect(
  state => ({
    pageNumber: state.CourseGuiding.pageNumber,
    filterData: state.CourseGuiding.filterData,
  }),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch)
);

export default reduxHook(radium(SelectionPage));
