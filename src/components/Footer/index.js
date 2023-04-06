import "../../style/global.module.scss";
import styles from "./Footer.module.scss";
import Logo from "../Icons/Logo";
import { Link } from "react-router-dom";
import LongLineLeft from "../Icons/LongLineLeft";
import LongLineRight from "../Icons/LongLineRight";
import SocialLinks from "../SocialLinks";

export default function Footer({changePathName}) {
  return (
    <>
      <footer className={styles.container}>
        <div className="container">
          <div className={styles.top}>
            <LongLineLeft />
            <div className={styles.logoContainer}>
              <Logo />
              <h1>Attorneyster</h1>
            </div>
            <LongLineRight />
          </div>

          <div className={styles.content}>
            <div className={styles.contentNavContainer}>
              <h2>Quick Link</h2>
              <ul>
                <li onClick={changePathName}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/contacts">Contact</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/blog">Blog</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/practies">Practies Areas</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/cases">Cases</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/testimonial">Testimonial</Link>
                </li>
              </ul>
            </div>

            <div className={styles.contentNavContainer}>
              <h2>Practice Area</h2>
              <ul>
                <li onClick={changePathName}>
                  <Link to="/parcties/family">Family Law</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/practies/criminal">Criminal Law</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/practies/personal">Personal Injury</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/practies/realEstate">Real Estate Law</Link>
                </li>
                <li onClick={changePathName}>
                  <Link to="/practies/business">Business Law</Link>
                </li>
              </ul>
            </div>
            <div className={styles.contentNavContainer + " " + styles.contacts}>
              <h2>Contact Us</h2>
              <p>Head Office Address:</p>
              <a
                href="https://goo.gl/maps/3n6x1W3a5dgxQ7498"
                target="_blank"
                rel="noreferrer"
              >
                121 King Street, Melbourne West, Australia
              </a>
              <p>Phone:</p>
              <a href="tel:911987654321">911-987654321</a>
              <p>Email:</p>
              <a href="mailto:yourmail@mail.com">yourmail@mail.com</a>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>
              Copyright &#169; <span>Attorney Law</span> | Designed by{" "}
              <span>VictorFlow</span> Templates - Powered by Webflow
            </p>
            <div className={styles.followContainer}>
              <p>
                <span>Follow:</span>
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
