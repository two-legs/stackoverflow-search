import React from 'react';
import PropTypes from 'prop-types';

import Table, { Rows, HeaderRow } from '../Table';
import QuestionRow from './QuestionRow/QuestionRow';

import './ResultTable.css';

const ResultTable = props => (
  <div className="ResultTable">
    <Table>
      <HeaderRow>
        <span>Author</span>
        <span>Title</span>
        <span>Answers</span>
        <span>Tags</span>
      </HeaderRow>
      <Rows>
        {props.questions.map((question, index) => (
          <QuestionRow
            {...question}
            key={index}
            onTagClick={props.onTagClick}
            onAuthorClick={props.onAuthorClick}
            onClick={() => props.onRowClick({ ...question })}
          />
        ))}
      </Rows>
    </Table>
  </div>
);

export default ResultTable;
