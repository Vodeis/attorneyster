import PropTypes, { string } from "prop-types";

export default function Slider({ width, range, circle, color }) {
  return (
    <>
      <svg
        width={width}
        height="19"
        viewBox="0 0 470 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="8"
          x2="468"
          y2="8"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="8"
          x2={range}
          y2="8"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx={circle} cy="9.5" r="9.5" fill={color} />
      </svg>
    </>
  );
}

Slider.propTypes = {
  width: PropTypes.string,
  range: PropTypes.string,
  circle: PropTypes.string,
  color: PropTypes.string,
};

Slider.defaultProps = {
  width: "100%",
  range: "50%",
  circle: "50.5%",
  color: "#D1B06B",
};
