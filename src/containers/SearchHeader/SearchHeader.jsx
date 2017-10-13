import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';

import './SearchHeader.css';

const SearchHeader = props => (
  <Header extended={props.match.isExact}>
    <SearchForm />
  </Header>
);

export default SearchHeader;