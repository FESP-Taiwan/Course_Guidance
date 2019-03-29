// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {

  }
};

type Props = {
  input: {
    value: number,
    onChange: Function,
  },
  placeholder: string,
  disabled: boolean,
};

type State = {
  isModalAppear: boolean,
}

class TextSelectingModal extends PureComponent<Props, State> {
  render() {
    const {
      input: {
        value,
        onChange,
      },
      placeholder,
      disabled,
    } = this.props;

    const {
      isModalAppear,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <button
          type="button"
          style={styles.btn}
          onFocus={() => {
            this.setState({ isModalAppear: true });
          }}
          onBlur={() => {
            this.setState({ isModalAppear: false });
          }}>
          <span>{placeholder}</span>
        </button>
      </div>
    );
  }
}

export default radium(TextSelectingModal);
