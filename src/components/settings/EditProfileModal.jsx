import { useState, useRef } from "react";
import styles from "../../styles/settings/EditProfileModal.module.css";

const EditProfileModal = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.nome || "");
  const [description, setDescription] = useState(user.descricao || "");
  const [skills, setSkills] = useState(user.habilidades?.join(", ") || "");
  const [profilePic, setProfilePic] = useState(user.profilePic || null);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      nome: name,
      descricao: description,
      habilidades: skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s),
      profilePic: profilePic,
    };
    onSave(updatedUser);
  };

  const handlePicClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h2>Editar Perfil</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>
          <div className={styles.profilePicSection}>
            <div
              className={styles.profilePicContainer}
              onClick={handlePicClick}
            >
              <img
                src={
                  profilePic ||
                  "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
                }
                alt="Foto de Perfil"
                className={styles.profilePic}
              />
              <div className={styles.editOverlay}>
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
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="skills">Habilidades (separadas por vírgula)</label>
            <input
              id="skills"
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.saveButton} onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
