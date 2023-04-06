import classNames from "classnames";

import styles from "./MeetThePartners.module.scss";
import LineCenter from "../Icons/LineCenter";
import Brand from "./SVG/Brand";
import Classic from "./SVG/Classic";
import Modern from "./SVG/Modern";
import Nature from "./SVG/Nature";
import Stylevintage from "./SVG/Stylevintage";

export default function MeetThePartners() {
  return (
    <>
      <section className={classNames(styles.container, "container")}>
        <div className={styles.wrapper}>
          <div className={styles.titleContainer}>
            <LineCenter />
            <h2>Meet The Partners</h2>
            <LineCenter />
          </div>
          <ul className={styles.clientLogo}>
            <li>
              <Modern />
            </li>
            <li>
              <Stylevintage />
            </li>
            <li>
              <Brand />
            </li>
            <li>
              <Nature />
            </li>
            <li>
              <Classic />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
