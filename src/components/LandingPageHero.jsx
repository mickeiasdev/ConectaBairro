// components
import Logo from "../components/Logo";
import { PrimaryButton, SecundaryButton } from "../components/Buttons";
import StatsApp from "../components/StatsApp";

//icons
import { BiRightArrowAlt } from "react-icons/bi";

// styles
import styles from "../styles/LandingPageHero.module.css";

export default function LandingPageHero() {
  return (
    <section className={styles.hero}>
      <Logo style={styles.logo}/>
      <div className={styles.titles}>
        <h1 className={styles.title}>Conecta</h1>
        <h1 className={styles.title}>Bairro</h1>
      </div>
      <p className={styles.subtitle}>
        A plataforma que conecta pessoas da sua comunidade para{" "}
        <strong>oportunidades de trabalho</strong> e serviços locais.
      </p>
      <div className={styles.buttons}>
        <PrimaryButton
          style={styles.primaryButton}
          title="Começar agora"
          icon={BiRightArrowAlt}
        />
        <SecundaryButton
          style={styles.secundaryButton}
          title="Saiba mais"
        />
      </div>
      <div className={styles.stats}>
        <StatsApp title="500+" subtitle="Vagas ativas" styleP={styles.statsP}/>
        <StatsApp title="1.2K+" subtitle="Prestadores" styleP={styles.statsP}/>
        <StatsApp title="5K+" subtitle="Úsuarios" styleP={styles.statsP}/>
      </div>
    </section>
  );
}
