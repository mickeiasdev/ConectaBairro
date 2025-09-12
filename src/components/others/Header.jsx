import styles from "../../styles/others/Header.module.css";

export function Header({ onLogout, type = "" }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.type}>{type}</h2>
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </header>
  );
}
