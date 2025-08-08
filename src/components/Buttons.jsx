// styles
import styles from "../styles/Buttons.module.css";

export function PrimaryButton({ title, icon: Icon, style }) {
  return (
    <button className={`${styles.primaryButton} ${style}`}>
      {title}
      {Icon && <Icon className={styles.primaryIcon} />}
    </button>
  );
}

export function SecundaryButton({ title, icon: Icon, style }) {
  return (
    <button className={`${styles.secundaryButton} ${style}`}>
      {title}
      {Icon && <Icon className={styles.secundaryIcon} />}
    </button>
  );
}
