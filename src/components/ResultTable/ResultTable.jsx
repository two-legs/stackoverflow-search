import React from 'react';
import PropTypes from 'prop-types';

import Table, { Rows } from '../Table';
import QuestionRow from './QuestionRow/QuestionRow';

const ResultTable = props => (
  <div className="ResultTable">
    <Table>
      <Rows>
        {props.questions.map((question, index) => <QuestionRow {...question} key={index} />)}
      </Rows>
    </Table>
  </div>
);

export default ResultTable;
