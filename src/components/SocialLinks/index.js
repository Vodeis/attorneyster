import PropTypes from "prop-types";
import classNames from "classnames";
import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Pinterest from "../Icons/Pinterest";

export default function SocialLinks({ color, className }) {
  const classes = classNames(className);

  return (
    <>
      <ul className={classes}>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Instagram color={color} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Facebook color={color} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <Twitter color={color} />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
            <Pinterest color={color} />
          </a>
        </li>
      </ul>
    </>
  );
}

SocialLinks.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  color: "#FFFFFF",
  className: "",
};
