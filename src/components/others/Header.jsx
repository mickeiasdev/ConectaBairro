import styles from "../../styles/others/Header.module.css";
// Estilos do header
import { FiLogOut } from "react-icons/fi";
// Ícone de logout

export function Header({ onLogout, type = "", btn = false }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.type}>{type}</h2>
      {/* Título ou tipo da página */}

      {btn && (
        <FiLogOut
          size={40}
          className={styles.logoutButton}
          onClick={onLogout}
        />
        // Botão de logout opcional
      )}
    </header>
  );
}
