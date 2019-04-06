// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import DropDownItem from './DropDownItem';

const styles = {
  wrapper: {
    width: 325,
    height: 0,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 0,
    paddingRight: 20,
  },
  menuDisplay: {
    height: 200,
    marginTop: 10,
    transitionDelay: '0.5s',
    transitionDuration: '1s',
  },
};

type Props = {
  dropDownData: Array<string>,
  isAppear: boolean,
  onChange: Function,
};

class DropDownList extends PureComponent<Props, State> {
  render() {
    const {
      dropDownData,
      isAppear,
      onChange,
    } = this.props;

    return (
      <div style={[styles.wrapper, isAppear && styles.menuDisplay]}>
        {dropDownData.map(item => (
          <DropDownItem
            item={item}
            onChange={onChange} />
        ))}
      </div>
    );
  }
}

export default radium(DropDownList);
