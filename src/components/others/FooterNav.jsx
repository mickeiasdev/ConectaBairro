import { useNavigate } from "react-router-dom";
import styles from "../../styles/others/FooterNav.module.css";
import { FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";

export function FooterNav({ current }) {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <button
        className={current === "vagas" ? styles.active : styles.link}
        onClick={() => navigate("/home")}
      >
        <FaHome size={20} />
      </button>
      <button
        className={current === "services" ? styles.active : styles.link}
        onClick={() => navigate("/services")}
      >
        <FaUsers size={20} />
      </button>
      <button
        className={current === "notifications" ? styles.active : styles.link}
        onClick={() => navigate("/notifications")}
      >
        <FaLightbulb size={20} />
      </button>
      <button
        className={current === "settings" ? styles.active : styles.link}
        onClick={() => navigate("/settings")}
      >
        <FaListUl size={20} />
      </button>
    </footer>
  );
}
