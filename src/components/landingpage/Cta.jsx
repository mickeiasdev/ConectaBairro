// components
import Stamps from "../Stamps";
import { PrimaryButton } from "../Buttons";

// style
import styles from "../../styles/landingpage/Cta.module.css";

export default function Cta({ className }) {
  return (
    <section className={`${styles.cta} ${className}`}>
      <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
      <p className={styles.ctaSubtitle}>
        Junte-se a milhares de pessoas que já estão aproveitando as
        oportunidades locais.
      </p>
      <PrimaryButton title="Começar agora" />
      <div className={styles.footerStamps}>
        <Stamps title="100% Gratuito" />
        <Stamps title="Sem compromisso" />
        <Stamps title="Cadastro rápido" />
      </div>
    </section>
  );
}
