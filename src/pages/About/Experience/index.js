import Image from "../../../components/Image";
import styles from "./Experience.module.scss";
import img from "../../../images/Experience.png";
import Experince from "../../../components/Experience";

export default function Experience() {
  return (
    <>
      <section className={styles.bg}>
        <div className={styles.container}>
          <Image src={img} width="50%" height="auto" />
          <Experince
            className={styles.experience}
            lineColor="#1F2732"
            sliderColor="#1F2732"
          />
        </div>
      </section>
    </>
  );
}
