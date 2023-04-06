import styles from "./Team.module.scss";
import classNames from "classnames";
import LineCenter from "../Icons/LineCenter";
import Image from "../Image";
import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Pinterest from "../Icons/Pinterest";
import thomas from "../../images/team/Thomas.png";
import nikolona from "../../images/team/Nikolona.png";
import michal from "../../images/team/Michal.png";
import SocialLinks from "../SocialLinks";

export default function Team() {
  return (
    <>
      <section className={classNames(styles.container, "container")}>
        <div className={styles.top}>
          <h1>
            Our Experienced Attorney Are Ready <br />
            To answer any questions
          </h1>
          <LineCenter />
        </div>
        <ul className={styles.content}>
          <li>
            <Image src={thomas} alt="Thomas" width={381} height={493} />
            <div className={styles.details}>
              <SocialLinks className={styles.links} color="#1F2732" />
              <p>Thomas Daniyel</p>
              <p>Civil Attorney</p>
            </div>
          </li>
          <li>
            <Image src={nikolona} alt="Nikolona" width={381} height={493} />
            <div className={styles.details}>
              <SocialLinks className={styles.links} color="#1F2732" />
              <p>Nikolona Gail</p>
              <p>Senior Attorney</p>
            </div>
          </li>
          <li>
            <Image src={michal} alt="Michal" width={381} height={493} />
            <div className={styles.details}>
              <SocialLinks className={styles.links} color="#1F2732" />
              <p>Michal David</p>
              <p>Criminal Attorney</p>
            </div>
          </li>
        </ul>
        <button>Meet Attorney</button>
      </section>
    </>
  );
}
