import { FiCheckCircle } from "react-icons/fi";

import styles from "../styles/Stamps.module.css";

export default function Stamps({ title }) {
  return (
    <div className={styles.stamp}>
      <FiCheckCircle />
      <p>{title}</p>
    </div>
  );
}
