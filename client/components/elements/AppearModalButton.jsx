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
  setModalAppearance: Function,
  placeholder: string,
  disabled: boolean,
  isModalAppear: boolean,
  value: string,
  onChange: Function,
};

type State = {
  isMouseEnter: boolean,
  placeholderLength: Array,
  valueLength: Array,
}

class AppearModalButton extends PureComponent<Props, State> {
  constructor(props) {
    super(props);

    const {
      placeholder,
    } = this.props;

    this.state = {
      isMouseEnter: false,
      placeholderLength: placeholder.split(''),
      valueLength: [],
    };
  }

  componentDidUpdate(prevProps) {
    const {
      value,
    } = this.props;

    if (prevProps.value !== value) {
      this.updateValueLength();
    }
  }

  updateValueLength() {
    const {
      value,
    } = this.props;

    this.setState({ valueLength: value.split('') });
  }

  render() {
    const {
      isModalAppear,
      setModalAppearance,
      placeholder,
      disabled,
      onChange,
      value,
    } = this.props;

    const {
      isMouseEnter,
      placeholderLength,
      valueLength,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <input
          className={(isMouseEnter || isModalAppear) && !disabled ? inputClass : undefined}
          key="inputText"
          type="text"
          style={[
            styles.textInput,
            value ? {
              paddingRight: `${279 - valueLength.length * 30}px`,
            } : {
              paddingRight: `${279 - placeholderLength.length * 30}px`,
            },
            isModalAppear && styles.textInputClicked,
          ]}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onMouseEnter={() => this.setState({ isMouseEnter: true })}
          onMouseLeave={() => this.setState({ isMouseEnter: false })}
          onFocus={() => setModalAppearance(true)}
          onBlur={() => setModalAppearance(false)} />
        <div style={[
          styles.bottomLine,
          (isMouseEnter || isModalAppear) && !disabled && styles.btnChecked,
        ]} />
      </div>
    );
  }
}

export default radium(AppearModalButton);
