// @flow

import React from 'react';
import TeacherList from '../../../components/Exhibition/TeacherList';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '35px 55px',
  },
};

function ExhibitionBoard() {
  return (
    <div style={styles.wrapper}>
      <TeacherList />
    </div>
  );
}

export default ExhibitionBoard;
