import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getQuestion } from '../../actions/apiActions';

import Page from '../../components/Page/Page';
import Question from '../../components/Question/Question';

import './QuestionPage.css';

class QuestionPage extends PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.onFetch(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props.match.params;
    const nextId = nextProps.match.params.id;

    if (id !== nextId) {
      this.props.onFetch(nextId);
    }
  }

  render() {
    const {
      isLoading,
      question,
    } = this.props;

    return (
      <Page isLoading={isLoading}>
        {question.questionId &&
          <div className="QuestionPage__content">
            <Question {...question} />
          </div>
        }
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question,
  isLoading: state.question.fetchStatus === 'LOADING',
});

const mapDispatchToProps = dispatch => ({
  onFetch: questionId => dispatch(getQuestion(questionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);