// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    position: 'relative',
    width: 275,
    height: 40,
  },
  textInput: {
    position: 'absolute',
    width: 275,
    height: 40,
    verticalAlign: 'middle',
    lineHeight: '40px',
    top: 0,
    left: 0,
    cursor: 'pointer',
    fontSize: 27,
    textAlign: '40px',
    border: 'none',
    letterSpacing: 1,
    transition: '0.5s',
    zIndex: 1000,
    backgroundColor: 'transparent',
    ':focus': {
      outline: 'none',
    },
  },
  bottomLine: {
    position: 'absolute',
    width: 0,
    height: 40,
    top: 0,
    left: 100,
    transition: '0.5s',
    borderBottom: 'solid 2px #333333',
  },
  btnChecked: {
    width: 275,
    left: 0,
  },
};

const inputClass = 'input';

type Props = {
  setModalAppearance: Function,
  placeholder: string,
  disabled: boolean,
};

type State = {
  isMouseEnter: boolean,
}

class AppearModalButton extends PureComponent<Props, State> {
  state = {
    isMouseEnter: false,
  };

  render() {
    const {
      setModalAppearance,
      placeholder,
      disabled,
    } = this.props;

    const {
      isMouseEnter,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <input
          className={isMouseEnter && !disabled && inputClass}
          key="inputText"
          type="text"
          style={styles.textInput}
          disabled={disabled}
          placeholder={placeholder}
          onMouseEnter={() => this.setState({ isMouseEnter: true })}
          onMouseLeave={() => this.setState({ isMouseEnter: false })}
          onFocus={() => setModalAppearance(true)}
          onBlur={() => setModalAppearance(false)} />
        <div style={[styles.bottomLine, isMouseEnter && !disabled && styles.btnChecked]} />
      </div>
    );
  }
}

export default radium(AppearModalButton);
