import LineLeft from "../../../components/Icons/LineLeft";
import styles from "./Offering.module.scss";
import classNames from "classnames";
import Justice from "../../../components/Icons/Offering/Justice";
import Protecting from "../../../components/Icons/Offering/Protecting";
import Relationship from "../../../components/Icons/Offering/Relationship";
import Fight from "../../../components/Icons/Offering/Fight";




export default function Offering() {
  return (
    <>
      <section className={styles.bg}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.left}>
            <h1>
              What We
              <br />
              Offering Our Values
            </h1>
            <LineLeft />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but majority have su alteration in some form, by injected humour,
              randomised workds
            </p>
          </div>
          <ul className={styles.offering}>
            <li>
              <Justice />
              <h2>Direct Way Of Justice</h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially .
              </p>
            </li>
            <li>
              <Protecting />
              <h2>Protecting Your Business</h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially .
              </p>
            </li>
            <li>
              <Relationship />
              <h2>Relationship Based On Trust</h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially .
              </p>
            </li>
            <li>
              <Fight />
              <h2>Fight For Justice</h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially .
              </p>
            </li>

          </ul>
        </div>
      </section>
    </>
  );
}
