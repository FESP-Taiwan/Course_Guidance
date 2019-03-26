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
import SelectionPage from './CourseGuidingPage/SelectionPage';
import MainPage from '../components/Main/MainPage';

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
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    whiteSpace: 'no-wrap',
    overflow: 'hidden',
    transitionDuration: '1s',
  },
};

type Props = {
  store: Object,
}

class MainBoard extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.placement}>
        <div style={styles.screen}>
          <MainPage />
          <Route path="/courseGuidance" component={SelectionPage} />
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  radium,
)(MainBoard);
