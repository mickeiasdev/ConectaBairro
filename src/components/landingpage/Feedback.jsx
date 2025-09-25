import FeedbackApp from "../others/FeedbackApp";
// Componente de feedback individual
import styles from "../../styles/landingpage/Feedback.module.css";
// Estilos do componente
import { arrFeedbackApp } from "../../arrays/arrays";
// Array com os feedbacks dos usuários

export function Feedback({ className }) {
  return (
    <section className={`${styles.feedbacks} ${className}`}>
      <h2 className={styles.title}>O que nossos usuários dizem</h2>
      {/* Título */}
      <p className={styles.subtitle}>
        Veja como a Conecta Bairro está ajudando pessoas a encontrar
        oportunidades locais.
      </p>
      {/* Subtítulo */}

      <div className={styles.list}>
        {arrFeedbackApp.map((user) => (
          <FeedbackApp key={user.comment} rating={5} amount={5} user={user} />
          // Mostra cada feedback
        ))}
      </div>
    </section>
  );
}
