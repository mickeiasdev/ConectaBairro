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
      <Element name="feature">
        <Feature />
      </Element>
      <Element name="tutorial">
        <Tutorial />
      </Element>
      <Element name="feedback">
        <Feedback />
      </Element>
      <Cta />
      <Element name="others">
        <Footer />
      </Element>
    </div>
  );
}
