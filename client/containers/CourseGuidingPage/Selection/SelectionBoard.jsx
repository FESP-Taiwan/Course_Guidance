// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import lightbolb from '../../../static/images/lightbulb.png';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    padding: '0 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  maintitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  lightbolb: {
    width: 30,
    height: 30,
  },
  subTitle: {

  },
};

type Props = {
  getFilterData: Function,
};

class SelectionBoard extends PureComponent<Props> {
  submit() {
    const {
      getFilterData,
    } = this.props;

    getFilterData({
      userName: 'hoh',
    });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleWrapper}>
          <div style={styles.maintitle}>
            <span>檢索篩選器</span>
            <img src={lightbolb} alt="lightbolb" style={styles.lightbolb} />
          </div>
          <span style={styles.subTitle}>SEARCH FILTER</span>
        </div>
        <button type="submit" onClick={() => this.submit()}>
          <span>Submit</span>
        </button>
      </div>
    );
  }
}

const reduxHook = connect(
  () => ({}),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch)
);

export default reduxHook(radium(SelectionBoard));
