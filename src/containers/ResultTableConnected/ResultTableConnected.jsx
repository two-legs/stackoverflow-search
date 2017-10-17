import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getQuestionsByAuthor, getQuestionsByTag } from '../../actions/apiActions';
import ResultTable from '../../components/ResultTable/ResultTable';
import ArrowKeyNavigator from '../ArrowKeyNavigator/ArrowKeyNavigator';
import { selectNextRow, selectPrevRow } from '../../actions';

class Table extends PureComponent {
  handleRowClick = question => {
    if (question) {
      this.props.history.push(`/question/${question.questionId}`)
    }
  };

  render() {
    const {
      questions,
      headers,
      onTagClick,
      onAuthorClick,
      name,
      onArrowUpPress,
      onArrowDownPress,
      ...props,
    } = this.props;

    return questions.length > 0
    ? (
      <ArrowKeyNavigator
        onUpPress={() => onArrowUpPress(name)}
        onDownPress={() => onArrowDownPress(name)}
      >
        <ResultTable
          headers={headers}
          questions={questions}
          onTagClick={onTagClick}
          onAuthorClick={onAuthorClick}
          onRowClick={this.handleRowClick}
          {...props}
        />
      </ArrowKeyNavigator>
    ) : null;  }
}

const mapStateToProps = state => ({ headers: state.headers });

const mapDispatchToProps = dispatch => ({
  onTagClick: tag => dispatch(getQuestionsByTag(tag)),
  onAuthorClick: author => dispatch(getQuestionsByAuthor(author)),
  onArrowUpPress: name => dispatch(selectPrevRow(name)),
  onArrowDownPress: name => dispatch(selectNextRow(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);