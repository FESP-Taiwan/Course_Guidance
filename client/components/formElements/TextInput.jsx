// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import PointButton from '../elements/PointButton';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
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
}

class TextInput extends PureComponent<Props, State> {
  state = {
    disabled: true,
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
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <PointButton
          setDisabled={isDisabled => this.setState({ disabled: isDisabled })} />
        <input
          placeholder={placeholder}
          type="text"
          // style={styles.input}
          value={value}
          disabled={disabled}
          onChange={onChange} />
      </div>
    );
  }
}

export default radium(TextInput);
