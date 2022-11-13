import PropTypes from 'prop-types';
export const StatisticList = ({
  total,
  positiveFeedback,
  stat: { good, neutral, bad },
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
  positivePercentage: PropTypes.number.isRequired,
  stat: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
