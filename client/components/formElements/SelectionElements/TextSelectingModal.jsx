// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import AppearModalButton from '../../elements/AppearModalButton';
import PointButton from '../../elements/PointButton';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
};

type Props = {
  input: {
    value: number,
    onChange: Function,
  },
  buttonText: string,
  disabled: boolean,
};

type State = {
  isModalAppear: boolean,
}

class TextSelectingModal extends PureComponent<Props, State> {
  state = {
    isModalAppear: false,
  };

  render() {
    const {
      input: {
        value,
        onChange,
      },
      buttonText,
      disabled,
    } = this.props;

    const {
      isModalAppear,
    } = this.state;

    console.log('isModalAppear: ', isModalAppear);

    return (
      <div style={styles.wrapper}>
        <PointButton />
        <AppearModalButton
          setModalAppearance={isAppear => this.setState({ isModalAppear: isAppear })}
          buttonText={buttonText}
          disabled={disabled} />
      </div>
    );
  }
}

export default radium(TextSelectingModal);
