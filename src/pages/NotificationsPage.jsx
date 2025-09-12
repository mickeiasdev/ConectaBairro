import { FooterNav } from "../components/others/FooterNav";
import { Header } from "../components/others/Header";
import styles from "../styles/home/HomePage.module.css";
import { useNavigate } from "react-router-dom";

export function NotificationsPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <Header onLogout={handleLogout} type="Notificações" />
      <main className={styles.mainContent}>
        <h2>Notifications</h2>
        <p>...</p>
      </main>
      <FooterNav current="notifications" />
    </div>
  );
}
