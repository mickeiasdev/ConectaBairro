import { useState } from "react";
import { Element } from "react-scroll";
// Para rolagem suave entre seções
import { Hero } from "../components/landingpage/Hero";
// Seção principal com header, logo e CTA
import { Feature } from "../components/landingpage/Features";
// Seção de recursos/features
import { Tutorial } from "../components/landingpage/Tutorial";
// Seção explicando como funciona
import { Feedback } from "../components/landingpage/Feedback";
// Depoimentos de usuários
import { Cta } from "../components/landingpage/Cta";
// Call to Action
import { Footer } from "../components/landingpage/Footer";
// Rodapé
import { Modal } from "../components/others/Modal";
// Componente de modal genérico
import { LoginForm } from "../components/auth/LoginForm";
// Formulário de login
import { RegisterForm } from "../components/auth/RegisterForm";
// Formulário de registro
import styles from "../styles/landingpage/LandingPage.module.css";
// Estilos da landing page

export function LandingPage() {
  const [modalOpen, setModalOpen] = useState(null);
  // Controle de qual modal está aberto ("login" ou "register")

  const closeModal = () => setModalOpen(null);
  // Fecha modal

  return (
    <div className={styles.main}>
      {/* Hero com opções de login e registro */}
      <Hero
        onLoginClick={() => setModalOpen("login")}
        onRegisterClick={() => setModalOpen("register")}
      />

      {/* Seção de Features */}
      <Element name="feature">
        <Feature />
      </Element>

      {/* Seção de Tutorial */}
      <Element name="tutorial">
        <Tutorial />
      </Element>

      {/* Seção de Feedback */}
      <Element name="feedback">
        <Feedback />
      </Element>

      {/* Call to Action */}
      <Cta onRegisterClick={() => setModalOpen("register")} />

      {/* Seção de Rodapé */}
      <Element name="others">
        <Footer />
      </Element>

      {/* Modal de Login ou Registro */}
      {modalOpen && (
        <Modal onClose={closeModal}>
          {modalOpen === "login" ? (
            <LoginForm
              onSuccess={(next) => {
                if (next === "register") {
                  setModalOpen("register");
                  // Troca para modal de registro
                } else {
                  closeModal();
                  // Fecha modal após login
                }
              }}
            />
          ) : (
            <RegisterForm
              onSuccess={(next) => {
                if (next === "login") {
                  setModalOpen("login");
                  // Troca para modal de login
                } else {
                  closeModal();
                  // Fecha modal após registro
                }
              }}
            />
          )}
        </Modal>
      )}
    </div>
  );
}
