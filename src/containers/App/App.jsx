import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './App.css';

import SearchHeader from '../SearchHeader/SearchHeader';
import ResultTable from '../../components/ResultTable/ResultTable';

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

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">Back</Link>
        <Link to="/test">Test link</Link>
        <ResultTable questions={data.questions} />
      </div>
    );
  }
}

export default App;
