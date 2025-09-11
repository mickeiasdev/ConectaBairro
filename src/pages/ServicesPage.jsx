import { FooterNav } from "../components/others/FooterNav";
import styles from "../styles/home/HomePage.module.css";

export function ServicesPage() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <h2>Services</h2>
        <p>...</p>
      </main>
      <FooterNav current="services" />
    </div>
  );
}
