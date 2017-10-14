import React from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../Table';
import Tag from '../../Tag/Tag';

import './QuestionRow.css';

const QuestionRow = props => (
  <Row>
    <div>{props.author}</div>
    <div className="QuestionRow__title">{props.title}</div>
    <div>{props.answerCount}</div>
    <div>{props.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</div>
  </Row>
);

export default QuestionRow;