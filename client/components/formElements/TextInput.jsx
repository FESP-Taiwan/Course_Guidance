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
    top: 0,
    left: 0,
    width: 280,
    height: 40,
    cursor: 'pointer',
    textAlign: 'right',
    border: 'none',
    letterSpacing: 1,
    transition: '0.5s',
    zIndex: 1000,
    fontSize: 30,
    backgroundColor: 'transparent',
    ':focus': {
      outline: 'none',
    },
  },
  textInputClicked: {
    paddingRight: 0,
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
  isOnClicked: boolean,
  placeholderLength: Array<string>,
  valueLength: Array<string>,
}

class TextInput extends PureComponent<Props, State> {
  constructor(props) {
    super(props);

    const {
      placeholder,
    } = this.props;

    this.state = {
      disabled: true,
      isMouseEnter: false,
      isOnClicked: false,
      placeholderLength: placeholder.split(''),
      valueLength: [],
    };
  }

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
      isOnClicked,
      placeholderLength,
      valueLength,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <PointButton
          setDisabled={isDisabled => this.setState({ disabled: isDisabled })} />
        <div style={styles.inputWrapper}>
          <input
            className={(isMouseEnter || isOnClicked) && !disabled ? inputClass : undefined}
            placeholder={placeholder}
            type="text"
            style={[
              styles.textInput,
              value ? {
                paddingRight: `${279 - valueLength.length * 30}px`,
              } : {
                paddingRight: `${279 - placeholderLength.length * 30}px`,
              },
              isOnClicked && styles.textInputClicked,
            ]}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onMouseEnter={() => this.setState({ isMouseEnter: true })}
            onMouseLeave={() => this.setState({ isMouseEnter: false })}
            onFocus={() => this.setState({ isOnClicked: true })}
            onBlur={() => this.setState({ isOnClicked: false })} />
          <div style={[
            styles.bottomLine,
            (isMouseEnter || isOnClicked) && !disabled && styles.btnChecked,
          ]} />
        </div>
      </div>
    );
  }
}

export default radium(TextInput);
