import { FooterNav } from "../components/others/FooterNav";
import styles from "../styles/home/HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/others/Header";

export function ServicesPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <Header onLogout={handleLogout} type="Prestadores" btn={true} />
      <main className={styles.mainContent}>
        <h2>Em construção...</h2>
      </main>
      <FooterNav current="services" />
    </div>
  );
}
