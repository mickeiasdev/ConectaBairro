// style
import styles from "../styles/Logo.module.css"

// icons
import { FiDollarSign } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";

export default function Logo({style}) {
  return (
    <div className={`${styles.logo} ${style}`}>
      <MdConnectWithoutContact />
      <FiDollarSign className={styles.dollar} />
    </div>
  );
}
