// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import radium from 'radium';
import { Link } from 'react-router-dom';
import * as CourseGuidingAction from '../../actions/CourseGuiding';

const borderAnimation = radium.keyframes({
  '0%': {
    width: 105,
    height: 105,
    right: 20,
    top: 20,
    opacity: 1,
  },
  '100%': {
    width: 145,
    height: 145,
    right: 0,
    top: 0,
    opacity: 0,
  },
}, 'blend');

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
  start: {
    display: 'flex',
    alignItems: 'center',
    transition: '1s',
  },
  line: {
    width: 100,
    height: 3,
    backgroundColor: '#ffffff',
    transitionDelay: '0.5s',
  },
  btnWrapper: {
    border: 'none',
    padding: 0,
    width: 145,
    height: 145,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '50%',
    transitionDuration: '0.5s',
  },
  circle: {
    width: 105,
    height: 105,
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 300,
    transitionDuration: '0.5s',
    ':hover': {
      width: 145,
      height: 145,
    },
  },
  text: {
    color: '#333333',
    fontSize: 20,
    position: 'relative',
    lineHeight: 3,
    backgroundColor: 'transparent',
    textAlign: 'center',
    transitionDuration: '0.5s',
    ':hover': {
      fontSize: 25,
    },
  },
  circleBorder: {
    border: 'solid 3px #ffffff',
    backgroundColor: 'transparent',
    width: 105,
    height: 105,
    position: 'absolute',
    opacity: 0.5,
    right: 10,
    top: 10,
    borderRadius: '50%',
    animationName: borderAnimation,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease',
  },
  linkStyle: {
    textDecoration: 'none',
  },
  btnInvisible: {
    opacity: 0,
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
          <div style={[styles.start, pageNumber && styles.btnInvisible]}>
            <button style={styles.btnWrapper} type="button" onClick={() => setPageNumber(1)}>
              <div style={styles.circleBorder} />
              <div style={styles.circle} key="circle">
                <Link style={styles.linkStyle} to="/courseGuidance">
                  <span style={styles.text} key="text">START</span>
                </Link>
              </div>
            </button>
            <div style={styles.line} />
          </div>
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
