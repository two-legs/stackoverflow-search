import React from 'react';
import { connect } from 'react-redux';

import ErrorContainer from '../../components/ErrorContainer/ErrorContainer';

export default connect(state => ({ message: state.error.message }))(({ message }) => (
  <div>
    {message ? <ErrorContainer>{message}</ErrorContainer> : null}
  </div>
));