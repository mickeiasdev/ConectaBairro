import { FiCheckCircle } from "react-icons/fi";

import styles from "../styles/Stamps.module.css";

export default function Stamps({ title, style }) {
  return (
    <div className={`${styles.stamp} ${style}`}>
      <FiCheckCircle />
      <p>{title}</p>
    </div>
  );
}
