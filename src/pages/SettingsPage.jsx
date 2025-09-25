import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/settings/SettingsPage.module.css";
import { FooterNav } from "../components/others/FooterNav";
import { Header } from "../components/others/Header";
import EditProfileModal from "../components/settings/EditProfileModal";

const DEFAULT_AVATAR =
  "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png";

export default function SettingsPage() {
  const navigate = useNavigate();
  const resumeInputRef = useRef(null);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/");
    }
  }, [navigate]);

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
    if (user && user.resumeFile) {
      window.open(user.resumeFile, "_blank");
    } else {
      alert(
        "Nenhum currículo anexado. Por favor, anexe um na tela de configurações."
      );
    }
  };

  const handleAppConfig = () => {
    alert("Configurações do aplicativo em construção.");
  };

  const handleHelp = () => {
    alert("Central de ajuda em construção.");
  };

  const handleAttachResume = () => {
    resumeInputRef.current.click();
  };

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProfile = (updatedUser) => {
    saveUserToLocalStorage(updatedUser);
    setIsModalOpen(false);
    alert("Perfil atualizado com sucesso!");
  };

  if (!user) {
    return null;
  }

  return (
    <div className={styles.pageContainer}>
      <Header onLogout={handleLogout} type="Configurações" />
      <main className={styles.mainContent}>
        <div className={styles.profileSection}>
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

        <input
          type="file"
          accept=".pdf"
          ref={resumeInputRef}
          onChange={handleResumeFileChange}
          style={{ display: "none" }}
        />

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
              className="feather feather-paperclip"
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
      <FooterNav current="settings" />
      {isModalOpen && (
        <EditProfileModal
          user={user}
          onClose={handleCloseModal}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}
