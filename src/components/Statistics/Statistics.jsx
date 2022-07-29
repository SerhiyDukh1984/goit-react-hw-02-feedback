import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positive }) {
    return(
    <ul className={s.statisticList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback: {positive}</li>
    </ul>)
  );
}
