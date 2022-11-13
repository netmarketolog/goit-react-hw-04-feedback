import PropTypes from 'prop-types';
export const StatisticList = ({
  total,
  positiveFeedback,
  good,
  neutral,
  bad,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total} </li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
};
StatisticList.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
