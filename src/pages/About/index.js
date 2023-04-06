import MeetThePartners from "../../components/MeetThePartners";
import Opinions from "../../components/Opinions";
import Team from "../../components/Team";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Offering from "./Offering";
import OurStory from "./OurStory";

export default function About() {
  return (
    <>
      <main className="wrapper">
        <AboutMe />
        <OurStory />
        <Experience />
        <Offering />
        <Team />
        <Opinions />
        <MeetThePartners />
      </main>
    </>
  );
}
