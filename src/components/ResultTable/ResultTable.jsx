import React from 'react';

import Table, { Rows, HeaderRow } from '../Table';
import QuestionRow from './QuestionRow/QuestionRow';
import SortingHeader from '../Table/SortingHeader/SortingHeader';

import './ResultTable.css';

const ResultTable = props => (
  <div className="ResultTable">
    <Table>
      <HeaderRow>
        {props.headers.map(({field, caption}) => (
          <SortingHeader
            field={field}
            key={field}
            order={field === props.sort.field ? props.sort.order : null}
            onSortChange={props.onSortChange}
          >
            {caption}
          </SortingHeader>
        ))}
      </HeaderRow>
      <Rows>
        {props.questions.map((question, index) => (
          <QuestionRow
            {...question}
            key={index}
            onTagClick={props.onTagClick}
            onAuthorClick={props.onAuthorClick}
            onClick={() => props.onRowClick({ ...question })}
            isActive={index === props.activeIndex}
          />
        ))}
      </Rows>
    </Table>
  </div>
);

export default ResultTable;
