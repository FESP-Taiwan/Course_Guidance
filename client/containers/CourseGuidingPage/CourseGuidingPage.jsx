// @flow

import React, {
  PureComponent,
  Fragment,
} from 'react';
import radium from 'radium';
import SelectionPage from './Selection/SelectionPage';
import ExhibitionPage from './Exhibition/ExhibitionPage';

type Props = {

};

class CourseGuidingPage extends PureComponent<Props> {
  render() {
    return (
      <Fragment>
        <SelectionPage />
        <ExhibitionPage />
      </Fragment>
    );
  }
}

export default radium(CourseGuidingPage);
