import styles from "./About.module.scss";
import cn from "classnames";
import Image from "../../../components/Image";
import about_section2 from "../../../images/Gavel.png";
import about_section1 from "../../../images/Closets.png";
import peeter_avatar from "../../../images/peeter_avatar.png";
import LineLeft from "../../../components/Icons/LineLeft";
import PapperPen from "../../../components/Icons/PapperPen";

export default function About() {
  return (
    <>
      <section className={styles.AboutUs}>
        <div className={cn(styles.wrapper, "container")}>
          <div className={styles.images}>
            <Image src={about_section1} alt="about" width={400} height={250} />
            <Image src={about_section2} alt="about" width={400} height={250} />
          </div>
          <div className={styles.content}>
            <h1>
              The Simple Choice <br /> for Complex Litigation
            </h1>
            <LineLeft />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have su alteration in some form, by injected
              humour, oir randomised workds which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything.
            </p>
            <div className={styles.author}>
              <Image src={peeter_avatar} alt="peeter" width={86} height={86} />
              <p>Peeter Park</p>
            </div>
            <div className={styles.success}>
              <div>
                <PapperPen />
                <p>
                  95% <br />
                  Case Success
                </p>
              </div>
              <div>
                <p>35+</p>
                <p>
                  Years
                  <br />
                  Experiance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
