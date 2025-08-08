// components
import Logo from "../Logo";
import { PrimaryButton, SecundaryButton } from "../Buttons";
import StatsApp from "../StatsApp";

//icons
import { BiRightArrowAlt } from "react-icons/bi";

// styles
import styles from "../../styles/landingpage/Hero.module.css";

export default function Hero({className}) {
  return (
    <section className={`${styles.hero} ${className}`}>
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
        <StatsApp title="500+" subtitle="Vagas ativas" />
        <StatsApp title="1.2K+" subtitle="Prestadores" />
        <StatsApp title="5K+" subtitle="Úsuarios" />
      </div>
    </section>
  );
}
