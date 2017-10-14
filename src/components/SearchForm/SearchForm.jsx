import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './SearchForm.css';

const SearchForm = props => (
  <div className="SearchForm">
    <Input placeholder="Enter search query" value={props.value} className="SearchForm__input"/>
    <div className="SearchForm__button"><Button onClick={props.onClick}>Search</Button></div>
  </div>
);

SearchForm.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default SearchForm;