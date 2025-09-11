import styles from "../../styles/home/HeaderHome.module.css";

export function HeaderHome({ user, onLogout }) {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>Olá, {user?.nome || "Usuário"}</div>
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </header>
  );
}
