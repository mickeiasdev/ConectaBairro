import { FooterNav } from "../components/others/FooterNav";
import styles from "../styles/home/HomePage.module.css";

export function SettingsPage() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <h2>Settings</h2>
        <p>...</p>
      </main>
      <FooterNav current="settings" />
    </div>
  );
}
