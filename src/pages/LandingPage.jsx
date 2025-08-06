import { BiHome, BiRightArrowAlt } from "react-icons/bi";

import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.logoHero}>
          <BiHome />
        </div>
        <h1 className={styles.heroTitle}>Conecta Bairro</h1>
        <p className={styles.heroSubtitle}>
          A plataforma que conecta pessoas da sua comunidade para
          <strong>oportunidades de trabalho</strong> e serviços locais.
        </p>
        <div className={styles.buttons}>
          <button className={styles.start}>
            Começar agora
            <BiRightArrowAlt size={20}/>
          </button>
          <button className={styles.more}>Saiba mais</button>
        </div>
        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <strong>500+</strong>
            <p>Vagas ativas</p>
          </div>
          <div className={styles.statsItem}>
            <strong>1.2K+</strong>
            <p>Prestadores</p>
          </div>
          <div className={styles.statsItem}>
            <strong>5K+</strong>
            <p>Úsuarios</p>
          </div>
        </div>
      </section>
{/* ----------------------------------------------------------------------------------------------------- */}
      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>Tudo que você precisa em um só lugar</h2>
        <p className={styles.featuresSubtitle}>
          Conecte-se com pessoas da sua comunidade e encontre oportunidades de trabalho e serviços locais.
        </p>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <h3>Conexão Local</h3>
            <p>Encontre oportunidades de trabalho e serviços perto de você.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Fácil de Usar</h3>
            <p>Interface intuitiva para uma experiência sem complicações.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Segurança</h3>
            <p>Verificação de usuários e avaliações para garantir confiança.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
