// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  btn: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    padding: 0,
    marginRight: 15,
  },
  btnChecked: {
    backgroundColor: '#333333',
  },
};

type Props ={
  setDisabled: Function,
};

type State = {
  isChecked: boolean,
};

class PointButton extends PureComponent<Props, State> {
  state = {
    isChecked: false,
  };

  render() {
    const {
      setDisabled,
    } = this.props;

    const {
      isChecked,
    } = this.state;

    return (
      <button
        style={[styles.btn, isChecked && styles.btnChecked]}
        type="button"
        onClick={() => {
          this.setState({ isChecked: !isChecked });
          setDisabled(isChecked);
        }} />
    );
  }
}

export default radium(PointButton);
