import React from 'react';
import './ErrorContainer.css';

const ErrorContainer = ({ children }) => (
  <div className="ErrorContainer">
    {children}
  </div>
);

export default ErrorContainer;