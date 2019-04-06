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
import TextInput from '../../../components/formElements/TextInput';
import TextSelectingModal from '../../../components/formElements/SelectionElements/TextSelectingModal';
import TimeSelectingModal from '../../../components/formElements/SelectionElements/TimeSelectingModal';
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
};

type Props = {
  getFilterData: Function,
  handleSubmit: Function,
};

class SelectionBoard extends PureComponent<Props> {
  submit(d) {
    const {
      getFilterData,
    } = this.props;

    getFilterData({
      userName: 'hoh',
    });
  }

  render() {
    const {
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
          <Field
            name="department"
            placeholder="系所"
            component={TextSelectingModal} />
          <Field
            name="grade"
            placeholder="年級"
            component={TextSelectingModal} />
          <Field
            name="courseTime"
            placeholder="授課時間"
            component={TimeSelectingModal} />
          <Field
            name="courseName"
            placeholder="課程名稱"
            component={TextInput} />
          <Field
            name="teacherName"
            placeholder="授課老師"
            component={TextInput} />
        </div>
        <button type="submit" onClick={() => this.submit()}>
          <span>Submit</span>
        </button>
      </form>
    );
  }
}

const reduxHook = connect(
  () => ({}),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch)
);

const formHook = reduxForm({
  form: SEARCH_FILTER_FORM,
  initialValues: {
    department: '',
    grade: '',
    courseTime: '',
    courseName: '',
  },
});

export default compose(
  formHook,
  reduxHook,
  radium,
)(SelectionBoard);
