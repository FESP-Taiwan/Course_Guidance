// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { Link } from 'react-router-dom';

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
};

type Props = {

};

class MainPage extends PureComponent<Props> {
  render() {
    return (
      <main style={styles.mainWrapper}>
        <div style={styles.start}>
          <button style={styles.btnWrapper} type="button">
            <div style={styles.circleBorder} />
            <div style={styles.circle} key="circle">
              <Link style={styles.linkStyle} to="/courseGuidance">
                <span style={styles.text} key="text">START</span>
              </Link>
            </div>
          </button>
          <div style={styles.line} />
        </div>
      </main>
    );
  }
}

export default radium(MainPage);
