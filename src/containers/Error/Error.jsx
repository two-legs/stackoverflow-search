import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorContainer from '../../components/ErrorContainer/ErrorContainer';
ErrorContainer.propTypes = {
  message: PropTypes.string,
};

export default connect(state => ({ message: state.error.message }))(({ message }) => (
  <div>
    {message ? <ErrorContainer>{message}</ErrorContainer> : null}
  </div>
));