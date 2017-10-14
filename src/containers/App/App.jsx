import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import SearchHeader from '../SearchHeader/SearchHeader';
import ResultTable from '../../components/ResultTable/ResultTable';
import Page from '../Page/Page';

import PreviewPane from '../../components/PreviewPane/PreviewPane';

const data = {
  questions: [
    {
      author: 'author',
      title: 'Question title',
      answerCount: 5,
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      author: 'author',
      title: 'Question title',
      answerCount: 5,
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      author: 'author',
      title: 'Question title',
      answerCount: 5,
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      author: 'author',
      title: 'Question title',
      answerCount: 5,
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      author: 'author',
      title: 'Question title',
      answerCount: 5,
      tags: ['tag1', 'tag2', 'tag3'],
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={SearchHeader} />
        <Link to="/">Back</Link>
        <Link to="/test">Test link</Link>
        <ResultTable questions={data.questions} />
        <Page isLoading />

        <PreviewPane />
      </div>
    );
  }
}

export default App;
