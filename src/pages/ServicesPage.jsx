import { FooterNav } from "../components/others/FooterNav";
// Componente de navegação inferior
import { Header } from "../components/others/Header";
// Componente de header com título e botão de logout
import styles from "../styles/home/HomePage.module.css";
// Estilos compartilhados da HomePage
import { useNavigate } from "react-router-dom";
// Hook para navegação programática

export function ServicesPage() {
  const navigate = useNavigate();
  // Hook de navegação

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    // Remove usuário logado do localStorage
    navigate("/");
    // Redireciona para a página inicial
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header com tipo da página e botão de logout */}
      <Header onLogout={handleLogout} type="Prestadores" btn={true} />

      {/* Conteúdo principal */}
      <main className={styles.mainContent}>
        <h2>Em construção...</h2>
        {/* Mensagem temporária */}
      </main>

      {/* Navegação inferior */}
      <FooterNav current="services" />
    </div>
  );
}
