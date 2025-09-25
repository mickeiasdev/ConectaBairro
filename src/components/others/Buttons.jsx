import styles from "../../styles/others/Buttons.module.css";
// Estilos dos botões

export function PrimaryButton({ title, icon: Icon, style, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.primaryButton} ${style}`}>
      {title}
      {/* Texto do botão */}
      {Icon && <Icon className={styles.primaryIcon} />}
      {/* Ícone opcional */}
    </button>
  );
}

export function SecundaryButton({ title, icon: Icon, style, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.secundaryButton} ${style}`}>
      {title}
      {/* Texto do botão */}
      {Icon && <Icon className={styles.secundaryIcon} />}
      {/* Ícone opcional */}
    </button>
  );
}
