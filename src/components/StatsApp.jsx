// styles
import styles from "../styles/StatsApp.module.css";

export default function StatsApp({
  title,
  subtitle,
  styleContainer,
  styleStrong,
  styleP,
}) {
  return (
    <div className={`${styles.stats} ${styleContainer}`}>
      <strong className={`${styleStrong}`}>{title}</strong>
      <p className={`${styleP}`}>{subtitle}</p>
    </div>
  );
}
