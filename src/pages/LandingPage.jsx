// components
import Hero from "../components/landingpage/Hero";
import Feature from "../components/landingpage/Features";
import Tutorial from "../components/landingpage/Tutorial";
import Feedback from "../components/landingpage/Feedback";
import Cta from "../components/landingpage/Cta";

// styles
import styles from "../styles/landingpage/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.main}>
      <Hero className={styles.hero} />
      <Feature className={styles.feature} />
      <Tutorial className={styles.tutorial} />
      <Feedback className={styles.feedback} />
      <Cta className={styles.cta} />
    </div>
  );
}
