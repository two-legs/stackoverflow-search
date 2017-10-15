import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../Table';
import Tag from '../../Tag/Tag';
import Owner from '../../Owner/Owner';

import './QuestionRow.css';

class QuestionRow extends PureComponent {
  handleAuthorClick = (author, event) => {
    if (this.props.onAuthorClick) {
      this.props.onAuthorClick(author, event);
      event.stopPropagation();
    }
  };

  handleTagClick = (tag, event) => {
    if (this.props.onTagClick) {
      this.props.onTagClick(tag, event);
      event.stopPropagation();
    }
  };

  render() {
    const {
      owner,
      title,
      tags,
      answerCount,
      onClick,
    } = this.props;

    return (
      <Row onClick={onClick}>
        <Owner owner={owner} onClick={this.handleAuthorClick}/>
        <div className="QuestionRow__title" dangerouslySetInnerHTML={{ __html: title}} />
        <div>{answerCount}</div>
        <div>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} onClick={this.handleTagClick}/>
          ))}
        </div>
      </Row>
    )
  }
}

export default QuestionRow;