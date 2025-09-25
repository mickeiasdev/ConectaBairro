import { FiCheckCircle } from "react-icons/fi"; 
// Ícone de check

import styles from "../../styles/others/Stamps.module.css"; 
// Estilos do selo

export function Stamp({ title, style }) {
  return (
    <div className={`${styles.stamp} ${style}`}>
      <FiCheckCircle /> 
      {/* Ícone do selo */}
      <p>{title}</p> 
      {/* Texto do selo */}
    </div>
  );
}
