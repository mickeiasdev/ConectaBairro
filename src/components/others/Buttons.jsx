// styles
import styles from "../../styles/others/Buttons.module.css";

export function PrimaryButton({ title, icon: Icon, style, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.primaryButton} ${style}`}>
      {title}
      {Icon && <Icon className={styles.primaryIcon} />}
    </button>
  );
}

export function SecundaryButton({ title, icon: Icon, style, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.secundaryButton} ${style}`}>
      {title}
      {Icon && <Icon className={styles.secundaryIcon} />}
    </button>
  );
}
