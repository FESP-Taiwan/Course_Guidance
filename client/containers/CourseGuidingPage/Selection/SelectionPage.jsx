// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectionBoard from './SelectionBoard';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import backgroundCover from '../../../static/images/project-p1-bgi-cover2.png';
import backIcon from '../../../static/images/backIcon.png';

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
    backgroundSize: '100% 100%',
    padding: '18% 0 0 60%',
  },
  btn: {
    position: 'absolute',
    padding: 0,
    border: 'none',
    top: '50%',
    left: 30,
  },
  icon: {
    width: 30,
    transition: '0.5s',
    ':hover': {
      transform: 'scale(1.5)',
    },
  },
};

type Props = {
  pageNumber: number,
  setPageNumber: Function,
};

class SelectionPage extends PureComponent<Props> {
  render() {
    const {
      pageNumber,
      setPageNumber,
    } = this.props;

    return (
      <div style={[styles.pageWrapper, {
        left: `-${pageNumber * 100}%`,
      }]}>
        <div style={styles.mainWrapper}>
          <SelectionBoard />
        </div>
        <button type="button" style={styles.btn} onClick={() => setPageNumber(0)}>
          <img src={backIcon} alt="backIcon" style={styles.icon} />
        </button>
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
