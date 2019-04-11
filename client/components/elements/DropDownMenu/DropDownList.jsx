// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import DropDownItem from './DropDownItem';

const styles = {
  wrapper: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 325,
    height: 0,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 0,
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
  paddingRight: number,
  onChange: Function,
};

class DropDownList extends PureComponent<Props, State> {
  render() {
    const {
      paddingRight,
      dropDownData,
      isAppear,
      onChange,
    } = this.props;

    return (
      <div style={[styles.wrapper, {
        paddingRight: `${paddingRight}px`,
      }, isAppear && styles.menuDisplay]}>
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
