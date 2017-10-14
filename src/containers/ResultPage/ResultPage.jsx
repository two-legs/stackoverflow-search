import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getQuestionsByTag, search } from '../../actions/search';

import Page from '../../components/Page/Page';
import ResultTable from '../../components/ResultTable/ResultTable';
import ResultPreview from '../ResultsPreview/ResultsPreview';

class ResultPage extends PureComponent {
  componentDidMount() {
    const { query } = this.props.match.params;
    if (query) {
      this.props.onFetch(query);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props.match.params;
    const nextQuery = nextProps.match.params.query;

    if (query !== nextQuery) {
      this.props.onFetch(nextQuery);
    }
  }

  render() {
    const {
      isLoading,
      questions,
      onTagClick,
    } = this.props;

    return (
      <Page isLoading={isLoading}>
        <ResultTable
          questions={questions}
          onTagClick={onTagClick}
        />
        <ResultPreview />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.search.results,
  isLoading: state.search.fetchStatus === 'LOADING',
});

const mapDispatchToProps = dispatch => ({
  onFetch: query => dispatch(search(query)),
  onTagClick: tag => dispatch(getQuestionsByTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);