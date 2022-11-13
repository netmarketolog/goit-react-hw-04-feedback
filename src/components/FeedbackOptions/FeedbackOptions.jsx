import PropTypes from 'prop-types';
import { Btn } from './Btn.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Btn
          key={option}
          name={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </Btn>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
