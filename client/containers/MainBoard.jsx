// @flow

import React, {
  PureComponent,
  Fragment,
} from 'react';
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
import CourseGuidingPage from './CourseGuidingPage/CourseGuidingPage';
import MainPage from './Main/MainPage';

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
  screen: {
    width: '100%',
    height: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    transitionDuration: '1s',
    fontSize: 0,
  },
};

type Props = {
  store: Object,
}

class MainBoard extends PureComponent<Props> {
  render() {
    const {
      store,
    } = this.props;
    console.log(store);
    return (
      <div style={styles.placement}>
        <div style={styles.screen}>
          <MainPage />
          <CourseGuidingPage />
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  radium,
)(MainBoard);
