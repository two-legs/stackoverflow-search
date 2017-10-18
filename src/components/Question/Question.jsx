import React from 'react';
import PropTypes from 'prop-types';

import Owner from '../Owner/Owner';
import Answer from '../Answer/Answer';

import './Question.css';

const Question = props => (
  <div className="Question">
    <h1 className="Question__title">{props.title}</h1>
    <div className="Question__author">
      <Owner owner={props.owner} />
    </div>
    <div className="Question__body" dangerouslySetInnerHTML={{ __html: props.body }}/>
    {props.answers &&
      <div className="Question__answers">
        <div className="Question__answer-count">
          {`${props.answers.length} Answers`}
        </div>
        {props.answers.map((answer, index) => (
          <div className="Question__answer" key={index}>
            <Answer {...answer} />
          </div>
        ))}
      </div>
    }
  </div>
);

Question.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.object,
  body: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object),
};

export default Question;