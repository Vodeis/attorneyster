import AppointmentForm from "../../components/AppointmentForm";
import Contact from "../../components/Contact";
import Opinions from "../../components/Opinions";
import styles from "./Home.module.scss";
import LineCenter from "../../components/Icons/LineCenter";
import PracticeAreas from "../../components/PracticeAreas";
import MeetThePartners from "../../components/MeetThePartners";
import Team from "../../components/Team";
import About from "./About";
import Counters from "./Counters";
import History from "./History";
import Blog from "../../components/Blog";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <main className="wrapper">
        <About />
        <PracticeAreas />
        <Counters />
        <MeetThePartners />
        <History />
        <Opinions />
        <Team />
        <Contact />
        <AppointmentForm />
        <section className={styles.blogBG}>
          <div className={classNames(styles.title, "container")}>
            <h1>Recent Blogs</h1>
            <LineCenter />
          </div>
          <Blog />
        </section>
        <div className={styles.bottomBG}></div>
      </main>
    </>
  );
}
