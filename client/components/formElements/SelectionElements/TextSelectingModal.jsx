// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import AppearModalButton from '../../elements/AppearModalButton';
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
  isModalAppear: boolean,
  disabled: boolean,
}

class TextSelectingModal extends PureComponent<Props, State> {
  state = {
    isModalAppear: false,
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
      isModalAppear,
      disabled,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        {this.getPointButton()}
        <AppearModalButton
          setModalAppearance={isAppear => this.setState({ isModalAppear: isAppear })}
          isModalAppear={isModalAppear}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange} />
      </div>
    );
  }
}

export default radium(TextSelectingModal);
