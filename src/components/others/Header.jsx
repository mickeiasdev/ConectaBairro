import styles from "../../styles/others/Header.module.css";

export function Header({ user, onLogout }) {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>Olá, {user?.nome || "Usuário"}</div>
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </header>
  );
}
