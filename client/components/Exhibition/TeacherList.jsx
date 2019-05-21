// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseGuidingAction from '../../actions/CourseGuiding';
import BlockButton from '../elements/BlockButton';

const styles = {
  wrapper: {
    height: '100%',
    width: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 10px',
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    padding: '0 8px',
  },
  teacherList: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '100%',
    padding: 8,
  },
  teacherBlock: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    padding: '0 8px',
  },
  blockTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  teacherName: {
    fontSize: 48,
    letterSpacing: 2,
    color: '#000',
    lineHeight: 1,
    marginRight: 8,
  },
  teacherText: {
    fontSize: 24,
    letterSpacing: 1,
    color: '#000',
    lineHeight: 1,
  },
  teacherInfoBlock: {
    display: 'flex',
    flexDirection: 'column',

  },
  titleText: {
    fontSize: 30,
    letterSpacing: 1,
    color: '#000',
  },
};

type Props = {
  filterData: Array<any>,
}

type State = {
  currentTeacher: Object,
}

class TeacherList extends PureComponent<Props, State> {
  state = {
    currentTeacher: undefined,
  };

  render() {
    const {
      filterData,
    } = this.props;

    const {
      currentTeacher,
    } = this.state;
    console.log(currentTeacher);
    return (
      <div style={styles.wrapper}>
        <div style={styles.listWrapper}>
          <span style={styles.titleText}>授課教師 Teacher</span>
          <div style={styles.teacherList}>
            {filterData.map(data => (
              <BlockButton
                label={data.teacher_name}
                hoverAction={() => this.setState({ currentTeacher: data })}
                clickAction={() => console.log(data)} />
            ))}
          </div>
        </div>
        {currentTeacher ? (
          <div style={styles.teacherBlock}>
            <div style={styles.blockTitle}>
              <span style={styles.teacherName}>{currentTeacher.teacher_name}</span>
              <span style={styles.teacherText}>教授</span>
            </div>
            <div style={styles.teacherInfoBlock}>
              <div style={styles.department}>

              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    filterData: state.CourseGuiding.filterData,
  }),
  dispatch => bindActionCreators({
    ...CourseGuidingAction,
  }, dispatch),
);

export default reduxHook(radium(TeacherList));
