// @flow

import React, {
  PureComponent,
  Fragment,
} from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectionPage from './SelectionPage';

const styles = {

};

type Props = {

};

class CourseGuidingPage extends PureComponent<Props> {
  render() {
    return (
      <Fragment>
        <SelectionPage />
      </Fragment>
    );
  }
}

export default radium(CourseGuidingPage);
