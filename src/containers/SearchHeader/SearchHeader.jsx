import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';

import cn from 'classnames';
import './SearchHeader.css';
import {setQuery} from "../../actions/index";

const SearchHeader = props => (
  <Header extended={props.match.isExact}>
    <div className={cn('SearchHeader', { 'SearchHeader_extended': props.match.isExact })}>
      <div className={'SearchHeader__logo'}>
        <Link to="/">stack<b>overflow</b> search</Link>
      </div>
      <SearchForm
        onClick={query => props.history.push(`/search/${encodeURI(query)}`)}
        onQueryChange={props.onQueryChange}
        value={props.query}
      />
    </div>
  </Header>
);

const mapStateToProps = state => ({
  query: state.search.query,
});
const mapDispatchToProps = dispatch => ({
  onQueryChange: query => dispatch(setQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);