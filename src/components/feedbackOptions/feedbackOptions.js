import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import FeedbackStyled from './feedbackOptionsStyled';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <FeedbackStyled>
      <ul>
        {options.map(option => (
          <li key={nanoid()}>
            <button type="button" onClick={() => onClick(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </FeedbackStyled>
  );
};
// function upperCaseLetter(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
