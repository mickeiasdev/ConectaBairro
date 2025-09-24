import { FooterNav } from "../components/others/FooterNav";
import styles from "../styles/home/HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/others/Header";

export function SettingsPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <Header onLogout={handleLogout} type="Configurações" />

      <main className={styles.mainContent}>
        <h2>Settings</h2>
        <p>...</p>
      </main>
      <FooterNav current="settings" />
    </div>
  );
}
