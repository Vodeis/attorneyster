import classNames from "classnames";
import styles from './Opinions.module.scss';
import LineCenter from "../Icons/LineCenter";
import Quotes from "../Icons/Quotes";
import natasha from '../../images/avatars/Natasha.png';
import minci from '../../images/avatars/Minci.png';
import julia from '../../images/avatars/Julia.png';
import john from '../../images/avatars/John.png';
import Image from "../Image";

export default function Opinions() {
  return (
    <>
      <section className={styles.bg}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.top}>
            <h1>Client Opinions & Reviews</h1>
            <LineCenter />
          </div>
          <ul className={styles.content}>
            <li>
              <div className={styles.comment}>
                <Quotes />
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
              </div>
              <div className={styles.person}>
              <Image src={natasha} width={84} height={84} alt='Natasha' circle={true}/>
                <p>Nattasha <br/> <span>Junior Lawyer</span></p>
              </div>
            </li>
            <li>
              <div className={styles.comment}>
                <Quotes />
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
              </div>
              <div className={styles.person}>
              <Image src={minci} width={84} height={84} alt='Minci' circle={true}/>
                <p>Minci pall <br/> <span>Consultant</span></p>
              </div>
            </li>
            <li>
              <div className={styles.comment}>
                <Quotes />
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
              </div>
              <div className={styles.person}>
              <Image src={julia} width={84} height={84} alt='Julia' circle={true}/>
                <p>Julia Rose <br/> <span>Consultant</span></p>
              </div>
            </li>
            <li>
              <div className={styles.comment}>
                <Quotes />
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
              </div>
              <div className={styles.person}>
              <Image src={john} width={84} height={84} alt='John' circle={true}/>
                <p>John David <br/> <span>Designer</span></p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
