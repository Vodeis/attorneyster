import classNames from "classnames";
import PropTypes from 'prop-types';
import LineLeft from "../Icons/LineLeft";
import Slider from "../Icons/Slider";

export default function Experince({className, btn, lineColor, sliderColor}) {
  const classes = classNames(className,)
  return (
    <>
      <div className={classes}>
        <h2>
          We Are Specialised <br /> And Experienced
        </h2>
        <LineLeft color={lineColor} />
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium deleniti atque corrupti quos molestias
          excepturi odio dignissimos ducimus qui blanditiis sint occaecati .
        </p>
        <ul>
          <li>
            Divorce And Family Cases
            <Slider width="100%" range="75%" circle="75.5%" color={sliderColor} />
            <span>75%</span>
          </li>
          <li>
            Property And Construction
            <Slider width="100%" range="80%" circle="80.5%" color={sliderColor} />
            <span>80%</span>
          </li>
          <li>
            Banking And Finance
            <Slider width="100%" range="75%" circle="75.5%" color={sliderColor} />
            <span>75%</span>
          </li>
          <li>
            Banking And Finance
            <Slider width="100%" range="90%" circle="90.5%" color={sliderColor} />
            <span>90%</span>
          </li>
        </ul>
        {btn && <button>Free Consulting</button>}
      </div>
    </>
  );
}

Experince.propTypes = {
  btn: PropTypes.bool,
  LineColor: PropTypes.string,
  sliderColor: PropTypes.string,
  className: PropTypes.string,
}
Experince.defaultProps = {
  btn: false,
  LineColor: '#D1B06B',
  sliderColor: '#D1B06B',
  className: '',
}