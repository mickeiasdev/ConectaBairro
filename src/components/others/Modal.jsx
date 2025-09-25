import styles from "../../styles/others/Modal.module.css"; 
// Estilos do modal

export function Modal({ children, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
      // Fecha o modal se clicar fora
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      {/* Fundo semi-transparente */}
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button> 
        {/* Botão de fechar */}
        {children} 
        {/* Conteúdo do modal */}
      </div>
    </div>
  );
}
