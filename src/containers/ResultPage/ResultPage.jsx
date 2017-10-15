import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/apiActions';

import Page from '../../components/Page/Page';
import ResultTable from '../ResultTableConnected/ResultTableConnected';
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
      history,
    } = this.props;

    return (
      <Page isLoading={isLoading}>
        <ResultTable
          questions={questions}
          history={history}
        />
        <ResultPreview history={history} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);