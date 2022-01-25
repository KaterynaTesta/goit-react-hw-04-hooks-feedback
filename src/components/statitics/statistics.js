import React from 'react';
import Proptypes from 'prop-types';
import StatisticsStyled from './StatisticsStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsStyled>
      <ul>
        <li> Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li> Total: {total}</li>
        <li> Positive feedback: {positivePercentage}% </li>
        <li></li>
      </ul>
    </StatisticsStyled>
  );
};
Statistics.propTypes = {
  good: Proptypes.number.isRequired,
  neutral: Proptypes.number.isRequired,
  bad: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
  positivePercentage: Proptypes.number.isRequired,
};

export default Statistics;
