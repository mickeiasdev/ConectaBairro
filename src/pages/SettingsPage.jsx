import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react"; // Importe useState e useRef
import styles from "../styles/settings/SettingsPage.module.css";
import { FooterNav } from "../components/others/FooterNav";
import { Header } from "../components/others/Header";

const DEFAULT_AVATAR =
  "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png";

const SettingsPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Cria uma referência para o input de arquivo
  const [profilePic, setProfilePic] = useState(DEFAULT_AVATAR); // Armazena a URL da imagem de perfil

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const handleEditProfile = () => {
    alert("Tela de edição de perfil em construção.");
  };

  const handleMyResume = () => {
    alert("Tela do meu currículo em construção.");
  };

  const handleAppConfig = () => {
    alert("Configurações do aplicativo em construção.");
  };

  const handleHelp = () => {
    alert("Central de ajuda em construção.");
  }; // Esta função agora lida com a seleção do arquivo

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Cria uma URL temporária para a imagem selecionada
      const newProfilePic = URL.createObjectURL(file);
      setProfilePic(newProfilePic);
    }
  }; // Esta função agora "clica" no input de arquivo oculto

  const handleChangeProfilePic = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.pageContainer}>
            <Header onLogout={handleLogout} type="Configurações" />     {" "}
      <main className={styles.mainContent}>
               {" "}
        <div className={styles.profileSection}>
                   {" "}
          <div
            className={styles.profilePicContainer}
            onClick={handleChangeProfilePic}
          >
                       {" "}
            <img
              src={profilePic} // Use a URL do estado aqui
              alt="Avatar do Usuário"
              className={styles.profilePic}
            />
                       {" "}
            <div className={styles.editOverlay}>
                           {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit-2"
              >
                               {" "}
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                             {" "}
              </svg>
                         {" "}
            </div>
                     {" "}
          </div>
                    {/* Input de arquivo oculto */}
                   {" "}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
                 {" "}
        </div>
               {" "}
        <div className={styles.menuList}>
                   {" "}
          <div className={styles.menuItem} onClick={handleEditProfile}>
                        <span>Editar perfil</span>         {" "}
          </div>
                   {" "}
          <div className={styles.menuItem} onClick={handleMyResume}>
                        <span>Meu currículo</span>         {" "}
          </div>
                   {" "}
          <div className={styles.menuItem} onClick={handleAppConfig}>
                        <span>Configurações do aplicativo</span>         {" "}
          </div>
                   {" "}
          <div className={styles.menuItem} onClick={handleHelp}>
                        <span>Ajuda</span>         {" "}
          </div>
                 {" "}
        </div>
               {" "}
        <div className={styles.logoutContainer}>
                   {" "}
          <button className={styles.logoutButton} onClick={handleLogout}>
                        Sair          {" "}
          </button>
                 {" "}
        </div>
             {" "}
      </main>
            <FooterNav current="settings" />   {" "}
    </div>
  );
};

export default SettingsPage;
