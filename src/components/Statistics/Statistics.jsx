import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <h1 className={s.title}>Statistics</h1>
      <ul className={s.statisticList}>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>Positive Feedback: {positive + '%'}</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.string.isRequired,
};
