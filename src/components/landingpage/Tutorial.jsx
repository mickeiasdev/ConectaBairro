import styles from "../../styles/landingpage/Tutorial.module.css";
// Estilos do tutorial

export function Tutorial({ className }) {
  return (
    <section className={`${styles.tutorial} ${className}`}>
      <h2 className={styles.title}>Como funciona?</h2>
      {/* Título */}
      <p className={styles.subtitle}>
        Em apenas 3 passos simples, você estará conectado com oportunidades
        locais.
      </p>
      {/* Subtítulo */}

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.number}>1</div>
          {/* Número do passo */}
          <h3 className={styles.title}>Crie sua conta</h3>
          {/* Título do passo */}
          <p>Cadastre-se rapidamente e faça parte da comunidade.</p>
          {/* Descrição */}
        </div>

        <div className={styles.step}>
          <div className={styles.number}>2</div>
          <h3 className={styles.title}>Complete seu perfil</h3>
          <p>Adicione habilidades e preferências para receber recomendações.</p>
        </div>

        <div className={styles.step}>
          <div className={styles.number}>3</div>
          <h3 className={styles.title}>Comece a explorar</h3>
          <p>Navegue pelas vagas e serviços disponíveis na sua comunidade.</p>
        </div>
      </div>
    </section>
  );
}
