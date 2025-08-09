import { FiCheckCircle } from "react-icons/fi";

import styles from "../styles/Stamps.module.css";

export default function Stamp({ title, style }) {
  return (
    <div className={`${styles.stamp} ${style}`}>
      <FiCheckCircle />
      <p>{title}</p>
    </div>
  );
}
