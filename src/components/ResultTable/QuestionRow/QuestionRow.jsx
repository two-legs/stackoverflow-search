import React from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../Table';
import Tag from '../../Tag/Tag';

const QuestionRow = props => (
  <Row>
    <span>{props.author}</span>
    <span>{props.title}</span>
    <span>{props.answerCount}</span>
    <span>{props.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</span>
  </Row>
);

export default QuestionRow;