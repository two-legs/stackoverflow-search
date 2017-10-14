import React from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../Table';
import Tag from '../../Tag/Tag';
import Owner from '../../Owner/Owner';

import './QuestionRow.css';

const QuestionRow = props => (
  <Row>
    <Owner owner={props.owner} />
    <div className="QuestionRow__title">{props.title}</div>
    <div>{props.answerCount}</div>
    <div>
      {props.tags.map((tag, index) => (
        <Tag key={index} tag={tag} onClick={props.onTagClick}/>
      ))}
    </div>
  </Row>
);

export default QuestionRow;