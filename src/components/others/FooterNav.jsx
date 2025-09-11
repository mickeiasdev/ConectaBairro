import { useNavigate } from "react-router-dom";
import styles from "../../styles/others/FooterNav.module.css";

export function FooterNav({ current }) {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <button
        className={current === "vagas" ? styles.active : styles.link}
        onClick={() => navigate("/home")}
      >
        Vagas
      </button>
      <button
        className={current === "services" ? styles.active : styles.link}
        onClick={() => navigate("/services")}
      >
        Serviços
      </button>
      <button
        className={current === "notifications" ? styles.active : styles.link}
        onClick={() => navigate("/notifications")}
      >
        Notificações
      </button>
      <button
        className={current === "settings" ? styles.active : styles.link}
        onClick={() => navigate("/settings")}
      >
        Configurações
      </button>
    </footer>
  );
}
