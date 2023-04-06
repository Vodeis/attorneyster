import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import "../../style/global.module.scss";
import Logo from "../Icons/Logo";
import Cart from "./Cart";
import ArrowDown from "../Icons/ArrowDown";
import Phone from "../Icons/Phone";
import Email from "../Icons/Email";
import Titles from "./Titles";
import { pageTitles } from "./Titles";
import Home from "./Home";

export default function Header({ pathName }) {
  const [pagesShow, setPagesShow] = useState(false);
  const showPages = () => {
    setPagesShow(pagesShow ? false : true);
  };
  const hidePages = () => {
    setPagesShow(false);
  };

  const changeBG = () => {
    if (pageTitles.map((elem) => elem.path).includes(pathName)) {
      return styles.containerImageOther;
    } else if (pathName === "/attorneyster") {
      return styles.containerImageHome;
    } else {
      return;
    }
  };

  return (
    <>
      <header className={styles.container}>
        <div className={changeBG()}>
          <div className="container">
            <div className={styles.top}>
              <div className={styles.logoContainer}>
                <Logo />
                <h1>Attorneyster</h1>
              </div>
              <div className={styles.cartAndBook}>
                <Link to="/cart">
                  <Cart />
                </Link>
                <button className={styles.consultationBtn}>
                  Book a Consultation
                </button>
              </div>
            </div>
            <div className={styles.bottom}>
              <nav>
                <ul className={styles.navBar}>
                  <li onClick={hidePages}>
                    <Link to="/">Home</Link>
                  </li>
                  <li onClick={hidePages}>
                    <Link to="/about">About</Link>
                  </li>
                  <li className={styles.pages_container}>
                    <div className={styles.pagesDropdown} onClick={showPages}>
                      <p>Pages</p>
                      <ArrowDown />
                    </div>
                    <ul
                      className={
                        pagesShow
                          ? classNames(styles.pages, styles.show)
                          : styles.pages
                      }
                    >
                      <li onClick={hidePages}>
                        <Link to="/practies">Practies</Link>
                      </li>
                      <li onClick={hidePages}>
                        <Link to="/cases">Cases</Link>
                      </li>
                      <li onClick={hidePages}>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                      <li onClick={hidePages}>
                        <Link to="/testimonial">Testimonial</Link>
                      </li>
                      <li onClick={hidePages}>
                        <Link to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </li>
                  <li onClick={hidePages}>
                    <Link to="/contacts">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.contactsContainer}>
                <div>
                  <div className={styles.contacts}>
                    <div className={styles.contactsSvgWrapper}>
                      <Phone />
                    </div>
                    <div className={styles.contactsTextWrapper}>
                      <p>Call Us On:</p>
                      <a href="tel:911-987654321">911-987654321</a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={styles.contacts}>
                    <div className={styles.contactsSvgWrapper}>
                      <Email />
                    </div>
                    <div className={styles.contactsTextWrapper}>
                      <p>Email us:</p>
                      <a href="mailto:yourmail@mail.com">yourmail@mail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {pageTitles.map((elem) => {
              if (pathName === elem.path) {
                return (
                  <Titles className={styles.pageTitle} content={elem.title} />
                );
              }
            })}
            {pathName === "/attorneyster" && <Home className={styles.home} />}
          </div>
        </div>
      </header>
    </>
  );
}
