import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

import './App.css';

import SearchHeader from '../SearchHeader/SearchHeader';
import ResultPage from '../ResultPage/ResultPage';
import QuestionPage from '../QuestionPage/QuestionPage';
import Error from '../Error/Error';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route path="/" component={SearchHeader} />
          <Error />
          <Switch>
            <Route path="/search/:query" component={ResultPage} />
            <Route path="/question/:id" component={QuestionPage} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
