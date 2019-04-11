// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import {
  bindActionCreators,
  compose,
} from 'redux';
import {
  reduxForm,
  Field,
  formValueSelector,
} from 'redux-form';
import * as CourseGuidingAction from '../../../actions/CourseGuiding';
import { SEARCH_FILTER_FORM } from '../../../shared/form.js';
import TextInputModal from '../../../components/formElements/SelectionElements/TextInputModal';
import TextSelectingModal from '../../../components/formElements/SelectionElements/TextSelectingModal';
import TimeSelectingArea from '../../../components/formElements/SelectionElements/TimeSelectingArea';
import lightbolb from '../../../static/images/lightbulb.png';

const selector = formValueSelector(SEARCH_FILTER_FORM);

const pointerAnimation = radium.keyframes({
  '0%': {
    left: 50,
  },
  '50%': {
    left: 57,
  },
  '100%': {
    left: 50,
  },
}, 'blend');

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    padding: '0 7vw 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '0 0 35px 26px',
  },
  maintitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  mainTitleText: {
    fontSize: 40,
    lineHeight: '46px',
    marginRight: 8,
  },
  lightbolb: {
    width: 33,
    height: 33,
  },
  subTitle: {
    fontSize: 33,
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  fieldWrapper: {
    height: 40,
    opacity: 1,
    marginBottom: 10,
    transition: '0.5s',
  },
  fieldTransition: {
    opacity: 0,
    height: 0,
    marginBottom: 0,
  },
  submitArea: {
    position: 'fixed',
    height: '100%',
    width: 4,
    backgroundColor: '#ffffff',
    top: 0,
    right: '6.5%',
    border: 'solid 1px #cccccc',
    opacity: 1,
    transition: '0.5s',
    transitionDelay: '1s',
  },
  submitDisabled: {
    opacity: 0,
  },
  submitBtnWrapper: {
    position: 'absolute',
    width: 61,
    right: -35,
    bottom: 100,
  },
  submitBtn: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    padding: 0,
    border: 'solid 2px #ffffff',
    transform: 'rotate(45deg)',
    transition: '0.5s',
    ':hover': {
      transform: 'rotate(225deg)',
    },
  },
  pointer: {
    position: 'absolute',
    width: 25,
    height: 40,
    top: 6,
    animationName: pointerAnimation,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease',
  },
  line: {
    position: 'absolute',
    left: 0,
    top: 11,
    width: 21,
    height: 2,
    backgroundColor: '#ffffff',
    transform: 'rotate(45deg)',
  },
  line2: {
    top: 25,
    transform: 'rotate(-45deg)',
  },
};

type Props = {
  fieldNumber: number,
  getFilterData: Function,
  handleSubmit: Function,
  pageNumber: number,
};

class SelectionBoard extends PureComponent<Props> {
  submit(d) {
    const {
      getFilterData,
    } = this.props;
    console.log(d);
    getFilterData({
      userName: 'hoh',
    });
  }

  render() {
    const {
      pageNumber,
      fieldNumber,
      handleSubmit,
    } = this.props;

    return (
      <form style={styles.wrapper} onSubmit={handleSubmit(d => this.submit(d))}>
        <div style={styles.titleWrapper}>
          <div style={styles.maintitle}>
            <span style={styles.mainTitleText}>檢索篩選器</span>
            <img src={lightbolb} alt="lightbolb" style={styles.lightbolb} />
          </div>
          <span style={styles.subTitle}>SEARCH FILTER</span>
        </div>
        <div style={styles.mainWrapper}>
          <div style={[
            styles.fieldWrapper,
            fieldNumber !== 0 && fieldNumber !== 1 && styles.fieldTransition,
          ]}>
            <Field
              name="department"
              id={1}
              placeholder="系所"
              component={TextSelectingModal} />
          </div>
          <div style={[
            styles.fieldWrapper,
            fieldNumber !== 0 && fieldNumber !== 2 && styles.fieldTransition,
          ]}>
            <Field
              name="grade"
              id={2}
              placeholder="年級"
              component={TextSelectingModal} />
          </div>
          <div style={fieldNumber !== 0
            && fieldNumber !== 3
            && fieldNumber !== 4
            && fieldNumber !== 5
            ? styles.fieldTransition
            : undefined}>
            <TimeSelectingArea
              id={[3, 4, 5]} />
          </div>
          <div style={[
            styles.fieldWrapper,
            fieldNumber !== 0 && fieldNumber !== 6 && styles.fieldTransition,
          ]}>
            <Field
              name="courseName"
              id={6}
              placeholder="課程名稱"
              component={TextInputModal} />
          </div>
          <div style={[
            styles.fieldWrapper,
            fieldNumber !== 0 && fieldNumber !== 7 && styles.fieldTransition,
          ]}>
            <Field
              name="teacherName"
              id={7}
              placeholder="授課老師"
              component={TextInputModal} />
          </div>
        </div>
        <div style={[styles.submitArea, pageNumber !== 1 && styles.submitDisabled]}>
          <div style={styles.submitBtnWrapper}>
            <button
              key="submitBtn"
              type="submit"
              style={styles.submitBtn}
              onClick={() => this.submit()} />
            <div style={styles.pointer}>
              <div style={styles.line} />
              <div style={[styles.line, styles.line2]} />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const reduxHook = connect(
  state => ({
    fieldNumber: state.CourseGuiding.fieldNumber,
    pageNumber: state.CourseGuiding.pageNumber,
  }),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch)
);

const formHook = reduxForm({
  form: SEARCH_FILTER_FORM,
  initialValues: {
    department: '',
    grade: '',
    week: '',
    startClass: '',
    endClass: '',
    courseName: '',
  },
});

export default compose(
  formHook,
  reduxHook,
  radium,
)(SelectionBoard);
