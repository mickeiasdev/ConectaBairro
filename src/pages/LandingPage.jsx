import { Element } from "react-scroll";

// components
import Hero from "../components/landingpage/Hero";
import Feature from "../components/landingpage/Features";
import Tutorial from "../components/landingpage/Tutorial";
import Feedback from "../components/landingpage/Feedback";
import Cta from "../components/landingpage/Cta";
import { Footer } from "../components/landingpage/Footer";

// styles
import styles from "../styles/landingpage/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.main}>
      <Hero />
      <Feature />
      <Tutorial />
      <Feedback />
      <Cta />
      <Footer />
    </div>
  );
}
