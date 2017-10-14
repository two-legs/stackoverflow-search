import React from 'react';
import { connect } from 'react-redux';

import Page from '../../components/Page/Page';
import ResultTable from '../../components/ResultTable/ResultTable';
import PreviewPane from '../../components/PreviewPane/PreviewPane';
import { getQuestionsByTag } from '../../actions/search';

const ResultsPreview = props => (
  <div>
    {props.isOpened
      ? <PreviewPane onClose={props.onPreviewClose}>
        <Page isLoading={props.isLoading}>
          <ResultTable
            questions={props.questions}
            onTagClick={props.onTagClick}
          />
        </Page>
      </PreviewPane>
      : null
    }
  </div>
);

const mapStateToProps = state => ({
  isOpened: state.preview.isOpened,
  questions: state.preview.results,
  isLoading: state.preview.fetchStatus === 'LOADING',
});

const mapDispatchToProps = dispatch => ({
  onTagClick: tag => dispatch(getQuestionsByTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPreview);