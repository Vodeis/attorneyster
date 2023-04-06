import LineCenter from "../../../components/Icons/LineCenter";
import Image from "../../../components/Image";
import styles from "./OurStory.module.scss";
import OurStoryImage1 from '../../../images/OurStory/OurStory1.png';
import OurStoryImage2 from '../../../images/OurStory/OurStory2.png';
import OurStoryImage3 from '../../../images/OurStory/OurStory3.png';

export default function OurStory() {
  return (
    <>
      <section className={styles.bg}>
        <div className="container">
          <div className={styles.top}>
            <h1 className={styles.title}>Our Story</h1>
            <LineCenter />
            <p className={styles.content}>
              Since 2012, Solicians Law Firm has served over 2,500+ clients with
              various law disputes. Our lawyers represent a wide range of
              clients, but clients with complex legal issues and/or high
              conflict situations will benefit most from our law firm.
            </p>
          </div>
          <ul className={styles.imageContainer}>
            <li>
              <Image src={OurStoryImage1} alt='OurStoryImage1' width={380} height={250} />
            </li>
            <li>
              <Image src={OurStoryImage2} alt='OurStoryImage1' width={380} height={250} />
            </li>
            <li>
              <Image src={OurStoryImage3} alt='OurStoryImage1' width={380} height={250} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
