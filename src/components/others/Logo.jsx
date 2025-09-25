import styles from "../../styles/others/Logo.module.css";
// Estilos do logo

import { FiDollarSign } from "react-icons/fi";
// Ícone de cifrão
import { MdConnectWithoutContact } from "react-icons/md";
// Ícone de conexão

export function Logo({ style }) {
  return (
    <div className={`${styles.logo} ${style}`}>
      <MdConnectWithoutContact />
      {/* Ícone principal */}
      <FiDollarSign className={styles.dollar} />
      {/* Ícone secundário */}
    </div>
  );
}
