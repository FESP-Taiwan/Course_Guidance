// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import PointButton from '../elements/PointButton';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputWrapper: {
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
    fontSize: 30,
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

type Props = {
  input: {
    name: string,
    value: string,
    onChange: Function,
  },
  placeholder: string,
};

type State = {
  disabled: boolean,
  isMouseEnter: boolean,
}

class TextInput extends PureComponent<Props, State> {
  state = {
    disabled: true,
    isMouseEnter: false,
  };

  render() {
    const {
      input: {
        value,
        onChange,
      },
      placeholder,
    } = this.props;

    const {
      disabled,
      isMouseEnter,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <PointButton
          setDisabled={isDisabled => this.setState({ disabled: isDisabled })} />
        <div style={styles.inputWrapper}>
          <input
            placeholder={placeholder}
            type="text"
            style={styles.textInput}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onMouseEnter={() => this.setState({ isMouseEnter: true })}
            onMouseLeave={() => this.setState({ isMouseEnter: false })} />
          <div style={[styles.bottomLine, isMouseEnter && !disabled && styles.btnChecked]} />
        </div>
      </div>
    );
  }
}

export default radium(TextInput);
