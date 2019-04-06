// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
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
  modalUndisplay: {
    display: 'none',
  },
};

type Props = {
  input: {
    value: number,
    onChange: Function,
  },
  placeholder: string,
  id: number,
  setFieldNumber: Function,
  fieldNumber: number,
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

  setFieldNumber(isFocus: boolean) {
    const {
      id,
      setFieldNumber,
    } = this.props;


    if (isFocus) {
      setFieldNumber(id);
      return;
    }
    setFieldNumber(0);
  }

  render() {
    const {
      input: {
        value,
        onChange,
      },
      placeholder,
      id,
      fieldNumber,
    } = this.props;

    const {
      isOnClicked,
      disabled,
    } = this.state;

    return (
      <div style={[styles.wrapper, fieldNumber && fieldNumber !== id && styles.modalUndisplay]}>
        {this.getPointButton()}
        <TextInputSet
          setOnClickedValue={isAppear => this.setState({ isOnClicked: isAppear })}
          isOnClicked={isOnClicked}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          setFieldNumber={isFocus => this.setFieldNumber(isFocus)} />
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    fieldNumber: state.CourseGuiding.fieldNumber,
  }),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch)
);

export default reduxHook(radium(TextSelectingModal));
