// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import DropDownList from '../../elements/DropDownMenu/DropDownList';
import TextInputSet from '../../elements/TextInputSet';
import PointButton from '../../elements/PointButton';

const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  blockForPadding: {
    width: 27,
  },
  modalUndisplay: {
    display: 'none',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  dropDownData: Array<string>,
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

  componentDidUpdate(prevState) {
    const {
      input: {
        onChange,
      },
    } = this.props;

    const {
      disabled,
    } = this.state;

    if (!prevState.disabled && disabled) {
      onChange('');
    }
  }

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
      dropDownData,
    } = this.props;

    const {
      isOnClicked,
      disabled,
    } = this.state;

    return (
      <div style={[styles.wrapper, fieldNumber && fieldNumber !== id && styles.modalUndisplay]}>
        <div style={styles.inputWrapper}>
          {this.getPointButton()}
          <TextInputSet
            setOnClickedValue={isAppear => this.setState({ isOnClicked: isAppear })}
            isOnClicked={isOnClicked}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            fontSize={30}
            setFieldNumber={isFocus => this.setFieldNumber(isFocus)} />
        </div>
        <DropDownList
          dropDownData={dropDownData}
          isAppear={fieldNumber === id}
          value={value}
          onChange={onChange}
          paddingRight={20} />
      </div>
    );
  }
}

const reduxHook = connect(
  (state, {
    id,
  }) => ({
    fieldNumber: state.CourseGuiding.fieldNumber,
    dropDownData: state.CourseGuiding.dropDownData[id],
  }),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch)
);

export default reduxHook(radium(TextSelectingModal));
