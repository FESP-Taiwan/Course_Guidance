// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import TextInputSet from '../../elements/TextInputSet';
import PointButton from '../../elements/PointButton';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  blockForPadding: {
    width: 27,
  },
};

type Props = {
  input: {
    value: number,
    onChange: Function,
  },
  placeholder: string,
};

type State = {
  isOnClicked: boolean,
  disabled: boolean,
}

class TextSelectingModal extends PureComponent<Props, State> {
  state = {
    isOnClicked: false,
    disabled: true,
  };

  getPointButton() {
    const {
      placeholder,
    } = this.props;

    if (placeholder !== '系所') {
      return (
        <PointButton
          setDisabled={isDisabled => this.setState({ disabled: isDisabled })} />
      );
    }
    this.setState({ disabled: false });
    return (
      <div style={styles.blockForPadding} />
    );
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
      isOnClicked,
      disabled,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        {this.getPointButton()}
        <TextInputSet
          setOnClickedValue={isAppear => this.setState({ isOnClicked: isAppear })}
          isOnClicked={isOnClicked}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange} />
      </div>
    );
  }
}

export default radium(TextSelectingModal);
