import PropTypes from 'prop-types';
import './FeedbackOptions';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.buttonList}>
      {options.map(option => (
        <li key={option.name}>
          <button
            type="button"
            name={option.name}
            className={s.button}
            onClick={onLeaveFeedback}
          >
            {option.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
