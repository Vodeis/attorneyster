import PropTypes from 'prop-types';

export default function Facebook({color}) {
  return (
    <>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1502 10.0566C20.1502 4.8518 15.7677 0.631592 10.3627 0.631592C4.95772 0.631592 0.575195 4.8518 0.575195 10.0566C0.575195 14.7607 4.15375 18.6598 8.8334 19.3676V12.7818H6.34764V10.0566H8.8334V7.98015C8.8334 5.61843 10.295 4.31281 12.5304 4.31281C13.6013 4.31281 14.7216 4.4971 14.7216 4.4971V6.81675H13.4868C12.2717 6.81675 11.8916 7.54298 11.8916 8.2894V10.0566H14.6058L14.1724 12.7818H11.892V19.3684C16.5716 18.6611 20.1502 14.7619 20.1502 10.0566Z"
          fill={color}
        />
      </svg>
    </>
  );
}

Facebook.propTypes = {
  color: PropTypes.string,
}
Facebook.defaultProps = {
  color: '#FFFFFF'
}