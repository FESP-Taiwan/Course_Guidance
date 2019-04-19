// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field } from 'redux-form';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import PointButton from '../../elements/PointButton';
import TimeSelectingModal from './TimeSelectingModal';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  modalUndisplay: {
    display: 'none',
  },
  buttonWrapper: {
    paddingTop: 8,
    marginRight: -2,
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  timeFieldWrapper: {
    transition: '0.5s',
  },
  timeFieldTransition: {
    display: 'none',
  },
  fieldWrapper: {
    height: 0,
    opacity: 0,
    transition: '0.5s',
  },
  fieldTransition: {
    height: 40,
    opacity: 1,
  },
};

type Props = {
  fieldNumber: number,
  id: Array<number>,
};

type State = {
  disabled: boolean,
}

class TimeSelectingArea extends PureComponent<Props, State> {
  state = {
    disabled: true,
  };

  render() {
    const {
      fieldNumber,
      id,
    } = this.props;

    const {
      disabled,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={[styles.buttonWrapper,
          fieldNumber
          && fieldNumber !== id[0]
          && fieldNumber !== id[1]
          && fieldNumber !== id[2]
          && styles.modalUndisplay,
        ]}>
          <PointButton
            setDisabled={isDisabled => this.setState({ disabled: isDisabled })} />
        </div>
        <div style={styles.mainWrapper}>
          <div style={[
            styles.timeFieldWrapper,
            fieldNumber && fieldNumber !== id[0] && styles.timeFieldTransition,
          ]}>
            <Field
              name="week"
              id={id[0]}
              placeholder="上課時間"
              disabled={disabled}
              component={TimeSelectingModal} />
          </div>
          <div style={[
            styles.fieldWrapper,
            !disabled && fieldNumber !== id[2] && styles.fieldTransition,
          ]}>
            <Field
              name="startClass"
              id={id[1]}
              placeholder="開始堂數"
              disabled={disabled}
              component={TimeSelectingModal} />
          </div>
          <div style={[
            styles.fieldWrapper,
            !disabled && fieldNumber !== id[1] && styles.fieldTransition,
          ]}>
            <Field
              name="endClass"
              id={id[2]}
              placeholder="結束堂數"
              disabled={disabled}
              component={TimeSelectingModal} />
          </div>
        </div>
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

export default reduxHook(radium(TimeSelectingArea));
