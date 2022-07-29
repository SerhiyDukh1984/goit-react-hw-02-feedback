import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
