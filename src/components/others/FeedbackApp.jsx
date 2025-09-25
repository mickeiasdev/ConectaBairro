import { AvaliatorStars } from "./AvaliatorStars";
// Componente de estrelas
import { FiUser } from "react-icons/fi";
// Ícone de usuário
import styles from "../../styles/others/FeedbackApp.module.css";
// Estilos do feedback

export function FeedbackApp({
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
        {/* Avaliação em estrelas */}
        <p className={styles.comment}>"{user.comment}"</p>
        {/* Comentário do usuário */}
      </div>

      <div className={styles.divUser}>
        <FiUser className={styles.userIcon} />
        {/* Ícone do usuário */}
        <div className={styles.userName}>
          <strong>{user.name}</strong>
          {/* Nome */}
          <p>{user.function}</p>
          {/* Função ou cargo */}
        </div>
      </div>
    </div>
  );
}
