import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './SearchForm.css';

const SearchForm = props => (
  <div className="SearchForm">
    <Input
      placeholder="Enter search query"
      className="SearchForm__input"
      value={props.value}
      onChange={props.onQueryChange}
    />
    <div className="SearchForm__button">
      <Button onClick={() => props.onClick(props.value)}>Search</Button>
    </div>
  </div>
);

SearchForm.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  onQueryChange: PropTypes.func,
};

export default SearchForm;