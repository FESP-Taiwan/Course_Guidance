// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectionBoard from './SelectionBoard';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import backgroundCover from '../../../static/images/project-p1-bgi-cover2.png';

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
  mainWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundImage: `url(${backgroundCover})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '18% 0 0 60%',
  },
};

type Props = {
  pageNumber: number,
  setPageNumber: Function,
  filterData: Object,
};

class SelectionPage extends PureComponent<Props> {
  render() {
    const {
      pageNumber,
      setPageNumber,
      filterData,
    } = this.props;

    console.log('filterData: ', filterData);

    return (
      <div style={[styles.pageWrapper, {
        left: `-${pageNumber * 100}%`,
      }]}>
        <div style={styles.mainWrapper}>
          <SelectionBoard />
        </div>
      </div>
    );
  }
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
