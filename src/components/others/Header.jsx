import styles from "../../styles/others/Header.module.css";
import { FiLogOut } from "react-icons/fi";

export function Header({ onLogout, type = "", btn = false}) {
  return (
    <header className={styles.header}>
      <h2 className={styles.type}>{type}</h2>
      {btn && <FiLogOut size={40} className={styles.logoutButton} onClick={onLogout}/>}
    </header>
  );
}
