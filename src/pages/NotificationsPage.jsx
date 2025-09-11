import { FooterNav } from "../components/others/FooterNav";
import styles from "../styles/home/HomePage.module.css";

export function NotificationsPage() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <h2>Notifications</h2>
        <p>...</p>
      </main>
      <FooterNav current="notifications" />
    </div>
  );
}
