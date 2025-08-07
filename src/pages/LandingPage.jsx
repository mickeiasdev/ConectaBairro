import { BiRightArrowAlt } from "react-icons/bi";
import { IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import {
  FiUsers,
  FiHome,
  FiDollarSign,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.logoHero}>
          <FiHome />
          <FiDollarSign className={styles.FiDollarSign} />
        </div>
        <h1 className={styles.heroTitle}>Conecta Bairro</h1>
        <p className={styles.heroSubtitle}>
          A plataforma que conecta pessoas da sua comunidade para{" "}
          <strong>oportunidades de trabalho</strong> e serviços locais.
        </p>
        <div className={styles.buttons}>
          <button className={styles.start}>
            Começar agora
            <BiRightArrowAlt className={styles.BiRightArrowAlt} />
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
        <h2 className={styles.featuresTitle}>
          Tudo que você precisa em um só lugar
        </h2>
        <p className={styles.featuresSubtitle}>
          Conecte-se com pessoas da sua comunidade e encontre oportunidades de
          trabalho e serviços locais.
        </p>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <IoBriefcaseOutline className={styles.featureIcon} />
            <h3>Vagas locais</h3>
            <p>
              Encontre oportunidades de trabalho e serviços perto de você. Desde
              vendas até serviços especializados.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FiUsers className={styles.featureIcon} />
            <h3>Prestadores de serviços</h3>
            <p>
              Contrate profissionais da sua região. Eletricistas, diaristas,
              jardineiros e muito mais.
            </p>
          </div>
          <div className={styles.featureItem}>
            <IoLocationOutline className={styles.featureIcon} />
            <h3>Comunidade</h3>
            <p>
              Fortaleça os laços da sua comunidade conectando vizinhos e criando
              oportunidades.
            </p>
          </div>
          <div className={styles.featureItem}>
            <HiOutlineBolt className={styles.featureIcon} />
            <h3>Fácil de Usar</h3>
            <p>
              Interface intuitiva para uma experiência sem complicações.
              Cadastre-se, encontre o que precisa e conecte-se em minutos.
            </p>
          </div>
          <div className={styles.featureItem}>
            <LuShield className={styles.featureIcon} />
            <h3>Segurança</h3>
            <p>
              Plataforma confiável com verificação de usuários e sistema de
              avaliações para garantir confiança.
            </p>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <section className={styles.tutorial}>
        <h2 className={styles.tutorialTitle}>Como funciona?</h2>
        <p className={styles.tutorialSubtitle}>
          Em apenas 3 passos simples, você estará conectado com oportunidades
          locais.
        </p>
        <div className={styles.tutorialSteps}>
          <div className={styles.tutorialStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Crie sua conta</h3>
            <p>
              Cadastre-se rapidamente com seu e-mail ou conta social. É grátis e
              fácil.
            </p>
          </div>
          <div className={styles.tutorialStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Complete seu perfil</h3>
            <p>
              Adicione suas habilidades, experiências e preferências para
              receber recomendações personalizadas.
            </p>
          </div>
          <div className={styles.tutorialStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Comece a explorar</h3>
            <p>
              Navegue pelas vagas e serviços disponíveis na sua comunidade. Use
              filtros para encontrar exatamente o que você precisa.
            </p>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------------------------------------------------- */}
      <section className={styles.feedbacks}>
        <h2 className={styles.feedbacksTitle}>O que nossos usuários dizem</h2>
        <p className={styles.feedbacksSubtitle}>
          Veja como a Conecta Bairro está ajudando pessoas a encontrar
          oportunidades locais.
        </p>
        <div className={styles.feedbackList}>
          <div className={styles.feedbackItem}>
            {/* component estrelas avaliacao */}
            <p>
              "Encontrei um trabalho incrível perto de casa, algo que jamais
              imaginei ser possível. A plataforma conectou-me com uma
              oportunidade única, e agora estou no meu emprego dos sonhos. Foi
              rápido, eficiente e me fez perceber como a busca por novas
              oportunidades pode ser simples e acessível."
            </p>
            <div className={styles.feedbackUser}>
              <FiUser className={styles.feedbackIcon} />
              <div>
                <strong>Maria Costa</strong>
                <p>Contadora</p>
              </div>
            </div>
          </div>
          <div className={styles.feedbackItem}>
            {/* component estrelas avaliacao */}
            <p>
              "A plataforma oferece um serviço excepcional. Além de ser fácil de
              usar, encontrei vários profissionais qualificados para expandir
              meus negócios. A qualidade das recomendações é impressionante e,
              sem dúvida, foi um dos melhores investimentos que fiz para o
              crescimento da minha empresa."
            </p>
            <div className={styles.feedbackUser}>
              <FiUser className={styles.feedbackIcon} />
              <div>
                <strong>João Pedro</strong>
                <p>Empresário</p>
              </div>
            </div>
          </div>
          <div className={styles.feedbackItem}>
            {/* component estrelas avaliacao */}
            <p>
              "Sou muito grato por ter encontrado essa comunidade. Graças a ela,
              agora posso oferecer meus serviços de maneira mais visível e
              encontrar clientes que realmente precisam do meu trabalho. A
              plataforma tem se mostrado uma excelente aliada para expandir meu
              alcance e encontrar novas oportunidades de forma constante."
            </p>
            <div className={styles.feedbackUser}>
              <FiUser className={styles.feedbackIcon} />
              <div>
                <strong>Guilherme Santos</strong>
                <p>Eletricista</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------------------------------------------------- */}
      <footer>
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
          <p className={styles.ctaSubtitle}>
            Junte-se a milhares de pessoas que já estão aproveitando as
            oportunidades locais.
          </p>
          <button className={styles.start}>Começar agora</button>
          <div className={styles.footerStamps}>
            {/* componente de stamp */}
            <div>
              <FiCheckCircle />
              <p>100% Gratuito</p>
            </div>
            <div>
              <FiCheckCircle />
              <p>Sem compromisso</p>
            </div>
            <div>
              <FiCheckCircle />
              <p>Cadastro rápido</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
