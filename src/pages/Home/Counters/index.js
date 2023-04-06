import styles from "./Counters.module.scss";
import LineCenter from "../../../components/Icons/LineCenter";
import Heart from "../../../components/Icons/Heart";
import MeetThePartners from "../../../components/MeetThePartners";

export default function Counters() {
  return (
    <>
      <section className={styles.bg}>
        <div className="container">
          <div className={styles.top}>
            <h1>
              If you're in trouble <br />
              we can help.
            </h1>
            <LineCenter />
            <p>
              There are of Lorem Ipsum available, but the majority have su
              alteration in some form, by injected humour, oir which don't look
              even slightly believable.
            </p>
          </div>
          <ul className={styles.successStories}>
            <li>
              <div className={styles.svgContainer}>
                <div className={styles.svgContent}>
                  <Heart />
                  <p>7230</p>
                </div>
                <div className={styles.rotate}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112">
                    <circle className={styles.grey} cx="56" cy="56" r="52" />
                    <circle
                      className={styles.blue}
                      cx="56"
                      cy="56"
                      r="52"
                      strokeDashoffset="40"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.textContent}>
                <p>Trusted Clients</p>
                <p>There are of Lorem Ipsum</p>
              </div>
            </li>
            <li>
              <div className={styles.svgContainer}>
                <div className={styles.svgContent}>
                  <Heart />
                  <p>98%</p>
                </div>
                <div className={styles.rotate}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112">
                    <circle className={styles.grey} cx="56" cy="56" r="52" />
                    <circle
                      className={styles.blue}
                      cx="56"
                      cy="56"
                      r="52"
                      strokeDashoffset="15"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.textContent}>
                <p>Successful Cases</p>
                <p>There are of Lorem Ipsum</p>
              </div>
            </li>
            <li>
              <p>15,890+</p>
              <p>Criminal Defence</p>
              <p>Case Served</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
