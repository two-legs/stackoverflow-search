import React from 'react';

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

export default Answer;