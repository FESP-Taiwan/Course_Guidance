// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  btn: {

  },
  btnChecked: {

  },
};

type Props = {
  setModalAppearance: Function,
  buttonText: string,
  disabled: boolean,
};

class AppearModalButton extends PureComponent<Props> {
  render() {
    const {
      setModalAppearance,
      buttonText,
      disabled,
    } = this.props;

    return (
      <button
        type="button"
        style={styles.btn}
        disabled={disabled}
        onFocus={() => setModalAppearance(true)}
        onBlur={() => setModalAppearance(false)}>
        <span>{buttonText}</span>
      </button>
    );
  }
}

export default radium(AppearModalButton);
