// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import DropDownList from '../../elements/DropDownMenu/DropDownList';
import TextInputSet from '../../elements/TextInputSet';

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
  disabled: boolean,
};

type State = {
  isOnClicked: boolean,
  disabled: boolean,
}

class TimeSelectingModal extends PureComponent<Props, State> {
  state = {
    isOnClicked: false,
  };

  componentDidUpdate(prevState) {
    const {
      input: {
        onChange,
      },
      disabled,
    } = this.props;

    if (!prevState.disabled && disabled) {
      onChange('');
    }
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
      disabled,
    } = this.props;

    const {
      isOnClicked,
    } = this.state;

    return (
      <div style={[styles.wrapper, fieldNumber && fieldNumber !== id && styles.modalUndisplay]}>
        <TextInputSet
          setOnClickedValue={isAppear => this.setState({ isOnClicked: isAppear })}
          isOnClicked={isOnClicked}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          fontSize={id === 3 ? 30 : 22}
          setFieldNumber={isFocus => this.setFieldNumber(isFocus)} />
        <DropDownList
          dropDownData={dropDownData}
          isAppear={fieldNumber === id}
          value={value}
          onChange={onChange}
          paddingRight={50} />
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

export default reduxHook(radium(TimeSelectingModal));
