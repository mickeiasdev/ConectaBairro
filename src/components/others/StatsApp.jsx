import styles from "../../styles/others/StatsApp.module.css"; 
// Estilos do componente de estatísticas

export function StatsApp({ title, subtitle }) {
  return (
    <div className={styles.stats}>
      <strong>{title}</strong> 
      {/* Valor principal */}
      <p>{subtitle}</p> 
      {/* Descrição */}
    </div>
  );
}
