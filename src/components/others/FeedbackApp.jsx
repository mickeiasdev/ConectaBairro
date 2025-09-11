import AvaliatorStars from "./AvaliatorStars";
import { FiUser } from "react-icons/fi";

import styles from "../../styles/others/FeedbackApp.module.css"

export default function FeedbackApp({
  rating = 5,
  amount = 5,
  postive = "gold",
  negative = "gray",
  title = "",
  user = {},
}) {
  return (
    <div className={styles.container}>
      <div>
        <AvaliatorStars
          size={14}
          rating={rating}
          amount={amount}
          positive={postive}
          negative={negative}
          title={title}
        />
        <p className={styles.comment}>"{user.comment}"</p>
      </div>
      <div className={styles.divUser}>
        <FiUser className={styles.userIcon} />
        <div className={styles.userName}>
          <strong>{user.name}</strong>
          <p>{user.function}</p>
        </div>
      </div>
    </div>
  );
}
