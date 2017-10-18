import React, { PureComponent } from 'react';

import Table, { Rows, HeaderRow } from '../Table';
import QuestionRow from './QuestionRow/QuestionRow';
import SortingHeader from '../Table/SortingHeader/SortingHeader';

import './ResultTable.css';

class ResultTable extends PureComponent {
  componentDidUpdate() {
    if (this.container && this.activeRef) {
      const containerRect = this.container.getBoundingClientRect();
      const activeItemRect = this.activeRef.getBoundingClientRect();

      if (activeItemRect.bottom > containerRect.bottom) {
        this.container.scrollTop += activeItemRect.height;
      }

      if (activeItemRect.top < containerRect.top) {
        this.container.scrollTop -= activeItemRect.height;
      }
    }
  }

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

    this.activeRef = null;

    return (
      <div className="ResultTable" ref={(container) => { this.container = container; }}>
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
                ref={(el) => { if (index === activeIndex) this.activeRef = el; }}
              />
            ))}
          </Rows>
        </Table>
      </div>
    );
  }
}

export default ResultTable;
