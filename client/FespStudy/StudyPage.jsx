// @flow

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

const styles = {

};

function StudyPage() {
  return (
    <Switch>
      <Route path="/study/login" component={RegisterPage} />
      <Route path="/study/register" component={LoginPage} />
    </Switch>
  );
}

export default StudyPage;
