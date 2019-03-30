// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  btn: {
    cursor: 'pointer',
  },
  btnChecked: {

  },
};

type Props = {
  setModalAppearance: Function,
  placeholder: string,
  disabled: boolean,
};

class AppearModalButton extends PureComponent<Props> {
  render() {
    const {
      setModalAppearance,
      placeholder,
      disabled,
    } = this.props;

    return (
      <input
        type="text"
        style={styles.btn}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => setModalAppearance(true)}
        onBlur={() => setModalAppearance(false)} />
    );
  }
}

export default radium(AppearModalButton);
