import { useNavigate } from "react-router-dom";
// Hook para navegação
import styles from "../../styles/others/FooterNav.module.css";
// Estilos do footer
import { FaUsers, FaHome, FaLightbulb, FaListUl } from "react-icons/fa";
// Ícones do menu

export function FooterNav({ current }) {
  const navigate = useNavigate();
  // Função para mudar de rota

  return (
    <footer className={styles.footer}>
      <button
        className={current === "vagas" ? styles.active : styles.link}
        onClick={() => navigate("/home")}
      >
        <FaHome size={20} />
        {/* Ícone Home */}
      </button>

      <button
        className={current === "services" ? styles.active : styles.link}
        onClick={() => navigate("/services")}
      >
        <FaUsers size={20} />
        {/* Ícone Serviços */}
      </button>

      <button
        className={current === "notifications" ? styles.active : styles.link}
        onClick={() => navigate("/notifications")}
      >
        <FaLightbulb size={20} />
        {/* Ícone Notificações */}
      </button>

      <button
        className={current === "settings" ? styles.active : styles.link}
        onClick={() => navigate("/settings")}
      >
        <FaListUl size={20} />
        {/* Ícone Configurações */}
      </button>
    </footer>
  );
}
