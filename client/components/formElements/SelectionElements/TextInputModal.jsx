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

class TextInputModal extends PureComponent<Props, State> {
  state = {
    isOnClicked: false,
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
      isOnClicked,
      disabled,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <PointButton
          setDisabled={isDisabled => this.setState({ disabled: isDisabled })} />
        <TextInputSet
          setOnClickedValue={isAppear => this.setState({ isOnClicked: isAppear })}
          placeholder={placeholder}
          isOnClicked={isOnClicked}
          disabled={disabled}
          value={value}
          onChange={onChange} />
      </div>
    );
  }
}

export default radium(TextInputModal);
