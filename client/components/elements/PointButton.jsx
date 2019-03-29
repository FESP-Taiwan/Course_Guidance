// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  btn: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    padding: 0,
  },
  btnChecked: {
    backgroundColor: '#333333',
  },
};

type State = {
  isChecked: boolean,
};

class PointButton extends PureComponent<State> {
  state = {
    isChecked: false,
  };

  render() {
    const {
      isChecked,
    } = this.state;

    return (
      <button style={[styles.btn, isChecked && styles.btnChecked]} type="button" onClick={() => this.setState({ isChecked: !isChecked })} />
    );
  }
}

export default radium(PointButton);
