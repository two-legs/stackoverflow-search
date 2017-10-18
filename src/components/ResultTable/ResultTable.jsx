import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Table, { Rows, HeaderRow } from '../Table';
import QuestionRow from './QuestionRow/QuestionRow';
import SortingHeader from '../Table/SortingHeader/SortingHeader';

import './ResultTable.css';

class ResultTable extends PureComponent {
  static propTypes = {
    headers: PropTypes.object,
    sort: PropTypes.object,
    onSortChange: PropTypes.func,
    questions: PropTypes.arrayOf(PropTypes.object),
    onTagClick: PropTypes.func,
    onAuthorClick: PropTypes.func,
    onRowClick: PropTypes.func,
    activeIndex: PropTypes.number,
  };

  render() {
    const {
      headers,
      sort,
      onSortChange,
      questions,
      onTagClick,
      onAuthorClick,
      onRowClick,
      activeIndex,
    } = this.props;

    return (
      <div className="ResultTable">
        <Table>
          <HeaderRow>
            {headers.map(({field, caption}) => (
              <SortingHeader
                field={field}
                key={field}
                order={field === sort.field ? sort.order : null}
                onSortChange={onSortChange}
              >
                {caption}
              </SortingHeader>
            ))}
          </HeaderRow>
          <Rows>
            {questions.map((question, index) => (
              <QuestionRow
                {...question}
                key={index}
                onTagClick={onTagClick}
                onAuthorClick={onAuthorClick}
                onClick={() => onRowClick({...question})}
                isActive={index === activeIndex}
              />
            ))}
          </Rows>
        </Table>
      </div>
    );
  }
}

export default ResultTable;
