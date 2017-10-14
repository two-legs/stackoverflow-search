import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';

import cn from 'classnames';
import './SearchHeader.css';

const SearchHeader = props => (
  <Header extended={props.match.isExact}>
    <div className={cn('SearchHeader', { 'SearchHeader_extended': props.match.isExact })}>
      <SearchForm />
    </div>
  </Header>
);

export default SearchHeader;