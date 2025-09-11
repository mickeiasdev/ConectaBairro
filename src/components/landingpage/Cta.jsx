import Stamp from "../others/Stamp";
import { PrimaryButton } from "../others/Buttons";
import styles from "../../styles/landingpage/Cta.module.css";

export function Cta({ className, onRegisterClick }) {
  return (
    <section className={`${styles.cta} ${className}`}>
      <h2 className={styles.title}>Pronto para começar?</h2>
      <p className={styles.subtitle}>
        Junte-se a milhares de pessoas que já estão aproveitando as
        oportunidades locais.
      </p>
      <PrimaryButton style={styles.button} title="Criar minha conta" onClick={onRegisterClick}/>
      <div className={styles.stamps}>
        <Stamp title="100% Gratuito" />
        <Stamp title="Sem compromisso" />
        <Stamp title="Cadastro rápido" />
      </div>
    </section>
  );
}
