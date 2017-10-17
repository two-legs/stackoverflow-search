import React from 'react';
import { connect } from 'react-redux';

import Page from '../../components/Page/Page';
import ResultTable from '../ResultTableConnected/ResultTableConnected';
import PreviewPane from '../../components/PreviewPane/PreviewPane';
import {closePreview, sortPreviewResults} from '../../actions/index';

const ResultsPreview = props => (
  <div>
    {props.isOpened
      ? <PreviewPane onClose={props.onPreviewClose} title={props.title}>
        <Page isLoading={props.isLoading}>
          <ResultTable
            name="preview"
            questions={props.questions}
            history={props.history}
            onSortChange={props.onSortChange}
            sort={props.sort}
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
  title: state.preview.title,
  sort: state.preview.sort,
});

const mapDispatchToProps = dispatch => ({
  onPreviewClose: () => dispatch(closePreview()),
  onSortChange: field => dispatch(sortPreviewResults(field)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPreview);