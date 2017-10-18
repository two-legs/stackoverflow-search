import React from 'react';
import PropTypes from 'prop-types';

import Owner from '../Owner/Owner';
import './Answer.css';

const Answer = props => (
  <div className="Answer">
    <div className="Answer__author">
      <Owner owner={props.owner} />
    </div>
    <div className="Answer__body" dangerouslySetInnerHTML={{ __html: props.body }} />
  </div>
);

Answer.propTypes = {
  owner: PropTypes.object,
  body: PropTypes.string,
};

export default Answer;