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

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    padding: '0 40px',
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
};

type Props = {
  fieldNumber: number,
  getFilterData: Function,
  handleSubmit: Function,
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
          <TimeSelectingArea
            id={[3, 4, 5]} />
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
        <button type="submit" onClick={() => this.submit()}>
          <span>Submit</span>
        </button>
      </form>
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
