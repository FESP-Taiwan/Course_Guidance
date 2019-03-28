// @flow

import React, {
  PureComponent,
  Fragment,
} from 'react';
import radium from 'radium';
import SelectionPage from './Selection/SelectionPage';

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
