// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  btn: {
    marginBottom: 5,
    padding: 0,
    border: 'none',
    opacity: 0.5,
    transition: '0.5s',
    ':hover': {
      opacity: 1,
    },
  },
  text: {
    fontSize: 22,
  },
};

type Props = {
  item: string,
  onChange: Function,
};

class DropDownItem extends PureComponent<Props> {
  render() {
    const {
      item,
      onChange,
    } = this.props;

    return (
      <button
        type="button"
        style={styles.btn}
        onClick={() => onChange(item)}>
        <span style={styles.text}>{item}</span>
      </button>
    );
  }
}

export default radium(DropDownItem);
