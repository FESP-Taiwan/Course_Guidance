// @flow

import React, { PureComponent } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import type History from 'history';
import { withRouter } from 'react-router';
import radium from 'radium';
import { compose } from 'redux';
import { connect } from 'react-redux';
import background from '../static/images/project-p1-bgi.png';

const borderAnimation = radium.keyframes({
  '0%': {
    width: 125,
    height: 125,
    right: 10,
    top: 10,
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
  placement: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  },
  line: {
    width: 100,
    height: 3,
    backgroundColor: '#ffffff',
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
  },
  circle: {
    width: 125,
    height: 125,
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: '105px',
    textAlign: 'center',
  },
  circleBorder: {
    border: 'solid 3px #ffffff',
    backgroundColor: 'transparent',
    width: 125,
    height: 125,
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
};

type Props = {
  store: Object,
}

class MainBoard extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.placement}>
        <main style={styles.mainWrapper}>
          <div style={styles.start}>
            <button style={styles.btnWrapper} type="button">
              <div style={styles.circle}>
                START
              </div>
              <div style={styles.circleBorder} key="circleBorder" />
            </button>
            <div style={styles.line} />
          </div>
        </main>
      </div>
    );
  }
}

export default radium(MainBoard);
