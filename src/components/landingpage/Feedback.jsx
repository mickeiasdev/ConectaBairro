// components
import FeedbackApp from "../FeedbackApp";

// style
import styles from "../../styles/landingpage/Feedback.module.css";

// data
import { arrFeedbackApp } from "../../arrays/arrays";

export default function Feedback({ className }) {
  return (
    <section className={`${styles.feedbacks} ${className}`}>
      <h2 className={styles.title}>O que nossos usuários dizem</h2>
      <p className={styles.subtitle}>
        Veja como a Conecta Bairro está ajudando pessoas a encontrar
        oportunidades locais.
      </p>
      <div className={styles.list}>
        {arrFeedbackApp.map((user) => (
          <FeedbackApp key={user.comment} rating={5} amount={5} user={user} />
        ))}
      </div>
    </section>
  );
}
