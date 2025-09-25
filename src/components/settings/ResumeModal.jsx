import styles from "../../styles/settings/ResumeModal.module.css";
// Estilos do modal

export function ResumeModal({ resumeFile, onClose, userName }) {
  const handleView = () => {
    if (!resumeFile) return;

    // Cria um Blob do PDF
    const byteCharacters = atob(resumeFile.split(",")[1]); // remove prefixo data:application/pdf;base64
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });

    // Cria URL temporária e abre
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, "_blank");
  };

  const handleDownload = () => {
    // Força o download do PDF
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = `${userName}_ConectaBairro_Curriculo.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar no modal
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>Meu Currículo</h2>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button onClick={handleView}>Visualizar</button>
          <button onClick={handleDownload}>Baixar</button>
        </div>
      </div>
    </div>
  );
}
