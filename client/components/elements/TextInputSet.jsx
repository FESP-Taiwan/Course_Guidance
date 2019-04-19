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
  setOnClickedValue: Function,
  placeholder: string,
  disabled: boolean,
  isOnClicked: boolean,
  value: string,
  fontSize: number,
  onChange: Function,
  setFieldNumber?: Function,
};

type State = {
  isMouseEnter: boolean,
  placeholderLength: Array<string>,
  valueLength: Array<string>,
}

class TextInputSet extends PureComponent<Props, State> {
  static defaultProps = {
    setFieldNumber: undefined,
  }

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
      isOnClicked,
      setOnClickedValue,
      placeholder,
      disabled,
      onChange,
      value,
      setFieldNumber,
      fontSize,
    } = this.props;

    const {
      isMouseEnter,
      placeholderLength,
      valueLength,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <input
          className={(isMouseEnter || isOnClicked) && !disabled ? inputClass : undefined}
          key="inputText"
          type="text"
          style={[
            styles.textInput,
            { fontSize: `${fontSize}px` },
            value ? {
              paddingRight: `${277 - valueLength.length * fontSize - (30 - fontSize) * 4}px`,
            } : {
              paddingRight: `${277 - placeholderLength.length * fontSize - (30 - fontSize) * 4}px`,
            },
            isOnClicked && styles.textInputClicked,
          ]}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onMouseEnter={() => this.setState({ isMouseEnter: true })}
          onMouseLeave={() => this.setState({ isMouseEnter: false })}
          onFocus={() => {
            setOnClickedValue(true);
            if (setFieldNumber) {
              setFieldNumber(true);
            }
          }}
          onBlur={() => {
            setTimeout(() => {
              setOnClickedValue(false);
              if (setFieldNumber) {
                setFieldNumber(false);
              }
            }, 150);
          }} />
        <div style={[
          styles.bottomLine,
          (isMouseEnter || isOnClicked) && !disabled && styles.btnChecked,
        ]} />
      </div>
    );
  }
}

export default radium(TextInputSet);
