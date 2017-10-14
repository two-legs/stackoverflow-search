import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../../store';

import './App.css';

import SearchHeader from '../SearchHeader/SearchHeader';
import ResultPage from '../ResultPage/ResultPage';
import ResultTable from '../../components/ResultTable/ResultTable';
import Page from '../../components/Page/Page';

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
      <Provider store={store}>
        <div className="App">
          <Route path="/" component={SearchHeader} />
          <Link to="/">Back</Link>
          <Link to="/search/redux">Test link</Link>
          {/*<ResultTable questions={data.questions} />*/}
          {/*<Page isLoading />*/}

          {/*<PreviewPane />*/}
          <Switch>
            <Route path="/search/:query" component={ResultPage}/>
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
