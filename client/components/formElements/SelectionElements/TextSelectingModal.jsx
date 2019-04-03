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

    console.log('isModalAppear: ', isModalAppear);

    return (
      <div style={styles.wrapper}>
        <PointButton
          setDisabled={isDisabled => this.setState({ disabled: isDisabled })} />
        <AppearModalButton
          setModalAppearance={isAppear => this.setState({ isModalAppear: isAppear })}
          placeholder={placeholder}
          disabled={disabled} />
      </div>
    );
  }
}

export default radium(TextSelectingModal);
