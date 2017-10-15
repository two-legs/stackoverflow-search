import React from 'react';
import { connect } from 'react-redux';

import Page from '../../components/Page/Page';
import ResultTable from '../ResultTableConnected/ResultTableConnected';
import PreviewPane from '../../components/PreviewPane/PreviewPane';
import { closePreview } from '../../actions/index';

const ResultsPreview = props => (
  <div>
    {props.isOpened
      ? <PreviewPane onClose={props.onPreviewClose}>
        <Page isLoading={props.isLoading}>
          <ResultTable
            questions={props.questions}
            history={props.history}
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
  onPreviewClose: () => dispatch(closePreview()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPreview);