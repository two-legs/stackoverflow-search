import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getQuestionsByAuthor, getQuestionsByTag } from '../../actions/apiActions';
import ResultTable from '../../components/ResultTable/ResultTable';

class Table extends PureComponent {
  handleRowClick = question => {
    if (question) {
      this.props.history.push(`/question/${question.questionId}`)
    }
  };

  render() {
    const {
      questions,
      onTagClick,
      onAuthorClick,
    } = this.props;

    return (
      <ResultTable
        questions={questions}
        onTagClick={onTagClick}
        onAuthorClick={onAuthorClick}
        onRowClick={this.handleRowClick}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onTagClick: tag => dispatch(getQuestionsByTag(tag)),
  onAuthorClick: author => dispatch(getQuestionsByAuthor(author)),
});

export default connect(null, mapDispatchToProps)(Table);