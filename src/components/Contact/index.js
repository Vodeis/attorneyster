import classNames from "classnames";
import styles from "./Contact.module.scss";
import Phone from "../Icons/Phone";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section className={styles.bg}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.left}>
            <h1>
              Our Expert professional law team is always ready to serve you the
              best solution!
            </h1>
            <p>
              There are of Lorem Ipsum available, but the majority have su
              alteration in some form, by injected oir which don't look even
              slightly believable.
            </p>
            <Link to="/contacts">Contact Us</Link>
          </div>
          <div className={styles.right}>
            <div>
              <h2>Get a Free Consultation</h2>
              <p>
                There are of Lorem Ipsum available, but the majority by injected
                humour which don't look even.
              </p>
              <a href="tel:911987654321" className={styles.call}>
                <div>
                  <Phone color="#FFFFFF" width='27' height='27' />
                </div>
                <div>
                  <p>Call Us On:</p>
                  <p>911-987654321</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
