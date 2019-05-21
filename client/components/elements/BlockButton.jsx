// @flow

import React from 'react';
import radium from 'radium';

const styles = {
  btn: {
    border: 'none',
    fontSize: 24,
    transition: '0.5s',
    textAlign: 'left',
    ':hover': {
      backgroundColor: 'rgba(212, 212, 212, 0.7)',
    },
  },
};

function BlockButton({
  label,
  hoverAction,
  clickAction,
}: {
  label: string,
  hoverAction: Function,
  clickAction: Function,
}) {
  return (
    <button
      type="button"
      style={styles.btn}
      onMouseEnter={() => hoverAction()}
      onClick={() => clickAction()}>
      {label}
    </button>
  );
}

export default radium(BlockButton);
