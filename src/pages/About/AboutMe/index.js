import Image from "../../../components/Image";
import styles from "./AboutMe.module.scss";
import peeter from "../../../images/PeeterAboutMe.png";
import LineLeft from "../../../components/Icons/LineLeft";
import SocialLinks from "../../../components/SocialLinks";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <div className={styles.image}>
            <Image src={peeter} alt="Peeter" width={524} height={638} />
          </div>
          <div className={styles.content}>
            <LineLeft />
            <h1>I'm Peeter park,<br/> a Business lawyer</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but majority have su alteration in some form, by injected humour,
              randomised workds for which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>
            <SocialLinks className={styles.links}/>
            <Link to='/contacts'>Get An Appoinment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
