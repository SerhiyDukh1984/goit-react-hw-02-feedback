import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return <div className={s.text}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
