import PropTypes from 'prop-types';

export default function Twitter({color}) {
  return (
    <>
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.1236 2.59881C20.3369 2.94065 19.5045 3.16587 18.6527 3.26733C19.5478 2.74317 20.221 1.91044 20.546 0.925323C19.6997 1.4202 18.7753 1.76743 17.8125 1.95214C17.407 1.52722 16.9194 1.18919 16.3793 0.958594C15.8391 0.727994 15.2577 0.60964 14.6704 0.610725C12.2926 0.610725 10.3683 2.50705 10.3683 4.84469C10.3666 5.16985 10.4039 5.49404 10.4793 5.81033C8.77418 5.7304 7.10455 5.29543 5.5772 4.53326C4.04985 3.77109 2.69841 2.6985 1.60934 1.38411C1.22727 2.02822 1.02521 2.76312 1.02427 3.51202C1.02427 4.98014 1.79023 6.27786 2.94682 7.03814C2.26158 7.02188 1.59037 6.84051 0.990193 6.50944V6.56187C0.990193 8.6155 2.4758 10.3239 4.44203 10.7128C4.07229 10.8114 3.69127 10.8613 3.30861 10.8614C3.03708 10.8619 2.76617 10.8355 2.49983 10.7827C3.04644 12.465 4.63735 13.6884 6.52188 13.7234C4.99056 14.9035 3.11051 15.5414 1.1772 15.5367C0.834038 15.5361 0.49119 15.5157 0.150391 15.4755C2.11714 16.7314 4.40334 17.3956 6.73685 17.3893C14.6612 17.3893 18.9905 10.9357 18.9905 5.33844C18.9905 5.15492 18.9856 4.97141 18.9769 4.79226C19.8172 4.19455 20.5441 3.45177 21.1236 2.59881Z"
          fill={color}
        />
      </svg>
    </>
  );
}

Twitter.propTypes = {
  color: PropTypes.string,
}
Twitter.defaultProps = {
  color: '#FFFFFF'
}