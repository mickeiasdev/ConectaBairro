// icons
import { IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";

// styles
import styles from "../../styles/landingpage/Feature.module.css";

export default function Feature({ className }) {
  return (
    <section className={`${styles.features} ${className}`}>
      <h2 className={styles.title}>Tudo que você precisa em um só lugar</h2>
      <p className={styles.subtitle}>
        Conecte-se com pessoas da sua comunidade e encontre oportunidades de
        trabalho e serviços locais.
      </p>
      <div className={styles.list}>
        <div className={styles.item}>
          <IoBriefcaseOutline className={styles.icon} />
          <h3>Vagas locais</h3>
          <p>
            Descubra inúmeras oportunidades de trabalho e serviços pertinho de
            você, sem complicações. Aqui você encontra desde vagas simples até
            serviços especializados para diferentes áreas. Conecte-se agora e
            amplie suas chances de sucesso profissional e pessoal.
          </p>
        </div>
        <div className={styles.item}>
          <FiUsers className={styles.icon} />
          <h3>Prestadores de serviços</h3>
          <p>
            Encontre facilmente profissionais qualificados da sua própria
            região, prontos para ajudar. De eletricistas e diaristas a pintores
            e jardineiros, todos verificados e avaliados. Tenha mais
            praticidade, segurança e confiança em cada contratação que realizar.
          </p>
        </div>
        <div className={styles.item}>
          <IoLocationOutline className={styles.icon} />
          <h3>Comunidade</h3>
          <p>
            Fortaleça a união da sua comunidade, criando redes de ajuda e
            oportunidades reais. Aproxime vizinhos, compartilhe informações e
            faça parte de um ecossistema colaborativo. Transforme sua região em
            um lugar mais conectado e próspero para todos.
          </p>
        </div>
        <div className={styles.item}>
          <HiOutlineBolt className={styles.icon} />
          <h3>Fácil de Usar</h3>
          <p>
            Aproveite uma interface pensada para ser simples, direta e agradável
            de navegar. Cadastre-se rapidamente, encontre o que precisa e
            conecte-se em poucos cliques. Tudo foi feito para garantir
            praticidade e eficiência na sua experiência.
          </p>
        </div>
        <div className={styles.item}>
          <LuShield className={styles.icon} />
          <h3>Segurança</h3>
          <p>
            Nossa plataforma possui verificação de usuários para garantir
            credibilidade total. Contamos com um sistema de avaliações reais
            para que você saiba com quem está lidando. Aqui, a confiança e a sua
            tranquilidade vêm sempre em primeiro lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
