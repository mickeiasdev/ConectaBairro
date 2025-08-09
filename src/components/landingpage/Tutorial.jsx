// style
import styles from "../../styles/landingpage/Tutorial.module.css";

export default function LandingPageTutorial({ className }) {
  return (
    <section className={`${styles.tutorial} ${className}`}>
      <h2 className={styles.title}>Como funciona?</h2>
      <p className={styles.subtitle}>
        Em apenas 3 passos simples, você estará conectado com oportunidades
        locais.
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.number}>1</div>
          <h3 className={styles.title}>Crie sua conta</h3>
          <p>
            Cadastre-se rapidamente com seu e-mail ou conta social. Venha fazer
            parte da nossa comunidade. Isso nunca foi tão fácil.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.number}>2</div>
          <h3 className={styles.title}>Complete seu perfil</h3>
          <p>
            Adicione suas habilidades, experiências e preferências para receber
            recomendações personalizadas.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.number}>3</div>
          <h3 className={styles.title}>Comece a explorar</h3>
          <p>
            Navegue pelas vagas e serviços disponíveis na sua comunidade. Use
            filtros para encontrar exatamente o que você precisa.
          </p>
        </div>
      </div>
    </section>
  );
}
