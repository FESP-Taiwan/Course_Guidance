// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import radium from 'radium';
import * as CourseGuidingAction from '../../actions/CourseGuiding';
import MainStartButton from '../../components/MainPage/MainStartButton';

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
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};

type Props = {
  pageNumber: number,
  setPageNumber: Function,
};

class MainPage extends PureComponent<Props> {
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
          <MainStartButton
            pageNumber={pageNumber}
            setPageNumber={setPageNumber} />
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    pageNumber: state.CourseGuiding.pageNumber,
  }),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch)
);

export default reduxHook(radium(MainPage));
