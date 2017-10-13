import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Header.css';

const Header = props => (
  <header className={cn('Header', { 'Header_extended': props.extended })}>
    {props.children}
  </header>
);

Header.propTypes = {
  extended: PropTypes.bool,
};

export default Header;
