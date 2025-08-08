// styles
import styles from "../styles/Buttons.module.css";

export function PrimaryButton({ title, icon: Icon, className }) {
  return (
    <button className={`${styles.primaryButton} ${className}`}>
      {title}
      {Icon && <Icon className={styles.primaryIcon} />}
    </button>
  );
}

export function SecundaryButton({ title, icon: Icon, className }) {
  return (
    <button className={`${styles.secundaryButton} ${className}`}>
      {title}
      {Icon && <Icon className={styles.secundaryIcon} />}
    </button>
  );
}
