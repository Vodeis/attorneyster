import classNames from "classnames";
import Image from "../../../components/Image";
import LineLeft from "../../../components/Icons/LineLeft";
import styles from "./History.module.scss";
import scales from "../../../images/ScalesVertically.png";
import Slider from "../../../components/Icons/Slider";
import Experince from "../../../components/Experience";

export default function History() {
  return (
    <>
      <section className={styles.bg}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.history}>
            <h2>We Are Top Lawyers And History</h2>
            <LineLeft />
            <ul>
              <li>
                1995 - Opening
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </p>
              </li>
              <li>
                2011 - Open Branch Office
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </p>
              </li>
              <li>
                2015 - 18000K Client's
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </p>
              </li>
              <li>
                2020 - Best Law & Firm Awwards
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
              </li>
            </ul>
          </div>
          {/* <div className={styles.image}> */}
          <Image src={scales} width={264} height={778} />
          {/* </div> */}
          <Experince className={styles.experience} btn={true} sliderColor='#d1b06b'/>
        </div>
      </section>
    </>
  );
}
