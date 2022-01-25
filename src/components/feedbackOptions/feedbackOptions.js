import React from 'react';
import PropTypes from 'prop-types';
import FeedbackStyled from './feedbackOptionsStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackStyled>
      <ul onClick={onLeaveFeedback}>
        {options.map(option => (
          <li key={option}>
            <button type="button" name={option}>
              {option.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </FeedbackStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
