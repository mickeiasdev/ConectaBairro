// styles
import styles from "../../styles/others/StatsApp.module.css";

export default function StatsApp({ title, subtitle }) {
  return (
    <div className={styles.stats}>
      <strong>{title}</strong>
      <p>{subtitle}</p>
    </div>
  );
}
