// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseGuidingAction from '../../actions/CourseGuiding';
import backgroundCover from '../../static/images/project-p1-bgi-cover.png';

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
    opacity: 0.7,
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

export default reduxHook(radium(SelectionPage));
