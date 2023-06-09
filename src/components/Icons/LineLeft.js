import PropTypes from 'prop-types';

export default function LineLeft({color}) {
  return (
    <>
      <svg
        width="95"
        height="44"
        viewBox="0 0 95 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="21" y="18" width="7" height="7" fill={color} />
        <line y1="26.5" x2="95" y2="26.5" stroke={color} />
        <line y1="16.5" x2="95" y2="16.5" stroke={color} />
        <line x1="29.5" y1="44" x2="29.5" y2="2.18557e-08" stroke={color} />
        <line x1="19.5" y1="44" x2="19.5" y2="2.18557e-08" stroke={color} />
      </svg>
    </>
  );
}

LineLeft.propTypes = {
  color: PropTypes.string,
}

LineLeft.defaultProps = {
  color: '#D1B06B',
}