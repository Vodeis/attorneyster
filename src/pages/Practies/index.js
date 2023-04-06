import styles from "./Practies.module.scss";
import PracticeAreas from "../../components/PracticeAreas";
import AppointmentForm from "../../components/AppointmentForm";
import MeetThePartners from "../../components/MeetThePartners";
import Contact from "../../components/Contact";

export default function Practies() {
  return (
    <>
      <main className="wrapper">
        <PracticeAreas />
        <Contact />
        <AppointmentForm />
        <MeetThePartners />
      </main>
    </>
  );
}
