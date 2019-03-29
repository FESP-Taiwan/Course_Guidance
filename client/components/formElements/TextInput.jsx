// @flow

import React from 'react';
import radium from 'radium';
import PointButton from '../elements/PointButton';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
};

function TextInput({
  input: {
    value,
    onChange,
  },
  placeholder,
  disabled,
}: {
  input: {
    name: string,
    value: string,
    onChange: Function,
  },
  placeholder: string,
  disabled: boolean,
}) {
  return (
    <div style={styles.wrapper}>
      <PointButton />
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

export default radium(TextInput);
