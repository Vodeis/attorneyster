import LineLeft from "../Icons/LineLeft";
import styles from "./PracticeAreas.module.scss";
import classNames from "classnames";
import Bussines from "../Icons/PractiesArea/Bussines";
import { Link } from "react-router-dom";
import Construction from "../Icons/PractiesArea/Construction";
import Car from "../Icons/PractiesArea/Car";
import Death from "../Icons/PractiesArea/Death";
import Criminal from "../Icons/PractiesArea/Criminal";
import Family from "../Icons/PractiesArea/Family";

export default function PracticeAreas() {
  return (
    <>
      <section className={styles.bg}>
        <div className={classNames(styles.wrapper, "container")}>
          <div className={styles.top}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Explore <br />
                Our Practice Arease
              </h1>
              <LineLeft />
            </div>
            <p className={styles.text}>
              There are <span>many variations of passages</span> of Lorem Ipsum
              available, but the majority have su alteration in some form, by
              injected humour, oir <span>randomised workds</span> which don't
              look even slightly believable.
            </p>
          </div>
          <ul className={styles.bottom}>
            <li>
              <h2>Business Law</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
              <div className={styles.btnContainer}>
                <Bussines />
                <Link to="/practies/bussines">
                  <button>Learn More</button>
                </Link>
              </div>
            </li>
            <li>
              <h2>Construction Law</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
              <div className={styles.btnContainer}>
                <Construction />
                <Link to="/practies/realEstate">
                  <button>Learn More</button>
                </Link>
              </div>
            </li>
            <li>
              <h2>Car Accident</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
              <div className={styles.btnContainer}>
                <Car />
                <Link to="/practies/personal">
                  <button>Learn More</button>
                </Link>
              </div>
            </li>
            <li>
              <h2>Wrongful Death</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
              <div className={styles.btnContainer}>
                <Death />
                <Link to="/practies/personal">
                  <button>Learn More</button>
                </Link>
              </div>
            </li>
            <li>
              <h2>Criminal Law</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
              <div className={styles.btnContainer}>
                <Criminal />
                <Link to="/practies/criminal">
                  <button>Learn More</button>
                </Link>
              </div>
            </li>
            <li>
              <h2>Family Law</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
              <div className={styles.btnContainer}>
                <Family />
                <Link to="/practies/family">
                  <button>Learn More</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
