import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/others/Header";
// Header com título e botão de logout
import { FooterNav } from "../components/others/FooterNav";
// Navegação inferior
import { EditProfileModal } from "../components/settings/EditProfileModal";
// Modal para edição de perfil
import { ResumeModal } from "../components/settings/ResumeModal";
// Modal para currículo
import styles from "../styles/settings/SettingsPage.module.css";
// Estilos da página de configurações

const DEFAULT_AVATAR =
  "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png";
// Avatar padrão caso o usuário não tenha foto

export default function SettingsPage() {
  const navigate = useNavigate();
  const resumeInputRef = useRef(null);
  // Referência para input oculto de upload de currículo
  const [user, setUser] = useState(null);
  // Estado do usuário logado
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Controla a abertura do modal de edição de perfil
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  // Controla a abertura do modal de currículo

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (storedUser) {
      setUser(storedUser);
      // Carrega usuário logado
    } else {
      navigate("/");
      // Redireciona se não houver usuário logado
    }
  }, [navigate]);

  // Função para salvar usuário atualizado no localStorage
  const saveUserToLocalStorage = (updatedUser) => {
    const allUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userIndex = allUsers.findIndex((u) => u.email === updatedUser.email);

    if (userIndex !== -1) {
      allUsers[userIndex] = updatedUser;
      localStorage.setItem("usuarios", JSON.stringify(allUsers));
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const handleMyResume = () => {
    if (user?.resumeFile) {
      setIsResumeModalOpen(true); // Abre o modal
    } else {
      alert(
        "Nenhum currículo anexado. Por favor, anexe um na tela de configurações."
      );
    }
  };

  const handleAppConfig = () =>
    alert("Configurações do aplicativo em construção.");
  const handleHelp = () => alert("Central de ajuda em construção.");

  const handleAttachResume = () => resumeInputRef.current.click();
  // Abre seletor de arquivo

  const handleResumeFileChange = (e) => {
    const file = e.target.files[0];
    if (file && user) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...user, resumeFile: reader.result };
        saveUserToLocalStorage(updatedUser);
        alert("Currículo anexado com sucesso!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveProfile = (updatedUser) => {
    saveUserToLocalStorage(updatedUser);
    setIsModalOpen(false);
    alert("Perfil atualizado com sucesso!");
  };

  if (!user) return null; // Evita renderização antes de carregar o usuário

  return (
    <div className={styles.pageContainer}>
      {/* Header da página */}
      <Header onLogout={handleLogout} type="Configurações" />

      {/* Conteúdo principal */}
      <main className={styles.mainContent}>
        <div className={styles.profileSection}>
          {/* Foto do usuário */}
          <div className={styles.profilePicContainer}>
            <img
              src={user.profilePic || DEFAULT_AVATAR}
              alt="Avatar do Usuário"
              className={styles.profilePic}
            />
          </div>
          <div className={styles.userName}>
            <h2>{user.nome}</h2>
          </div>
        </div>

        {/* Menu de ações */}
        <div className={styles.menuList}>
          <div className={styles.menuItem} onClick={handleOpenModal}>
            <span>Editar perfil</span>
          </div>
          <div className={styles.menuItem} onClick={handleMyResume}>
            <span>Meu currículo</span>
          </div>
          <div className={styles.menuItem} onClick={handleAppConfig}>
            <span>Configurações do aplicativo</span>
          </div>
          <div className={styles.menuItem} onClick={handleHelp}>
            <span>Ajuda</span>
          </div>
        </div>

        {/* Input oculto para anexar currículo */}
        <input
          type="file"
          accept=".pdf"
          ref={resumeInputRef}
          onChange={handleResumeFileChange}
          style={{ display: "none" }}
        />

        {/* Botões inferiores */}
        <div className={styles.logoutContainer}>
          <button className={styles.attachButton} onClick={handleAttachResume}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.44 1.15a.99.99 0 0 0-.82-.12l-14 3.5a1 1 0 0 0-.85.94V16a5 5 0 0 0 5 5h3a5 5 0 0 0 5-5V6a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1h6"></path>
            </svg>
            <span>Anexar Currículo</span>
          </button>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Sair
          </button>
        </div>
      </main>

      {/* Footer de navegação */}
      <FooterNav current="settings" />

      {/* Modal de edição de perfil */}
      {isModalOpen && (
        <EditProfileModal
          user={user}
          onClose={handleCloseModal}
          onSave={handleSaveProfile}
        />
      )}
      {/* Modal de currículo */}
      {isResumeModalOpen && (
        <ResumeModal
          resumeFile={user.resumeFile}
          onClose={() => setIsResumeModalOpen(false)}
          userName={user.nome}
        />
      )}
    </div>
  );
}
