
import { useState } from "react";
import { Element } from "react-scroll";
import Hero from "../components/landingpage/Hero";
import Feature from "../components/landingpage/Features";
import Tutorial from "../components/landingpage/Tutorial";
import Feedback from "../components/landingpage/Feedback";
import Cta from "../components/landingpage/Cta";
import { Footer } from "../components/landingpage/Footer";
import Modal from "../components/Modal";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import styles from "../styles/landingpage/LandingPage.module.css";

export function LandingPage() {
  const [modalOpen, setModalOpen] = useState(null);

  const closeModal = () => setModalOpen(null);

  return (
    <div className={styles.main}>
      <Hero
        onLoginClick={() => setModalOpen("login")}
        onRegisterClick={() => setModalOpen("register")}
      />
      <Element name="feature">
        <Feature />
      </Element>
      <Element name="tutorial">
        <Tutorial />
      </Element>
      <Element name="feedback">
        <Feedback />
      </Element>
      <Cta  onRegisterClick={() => setModalOpen("register")} />
      <Element name="others">
        <Footer />
      </Element>

      {modalOpen && (
  <Modal onClose={closeModal}>
    {modalOpen === 'login' ? (
      <LoginForm onSuccess={(next) => {
        if (next === 'register') {
          setModalOpen('register'); 
        } else {
          closeModal();
        }
      }} />
    ) : (
      <RegisterForm onSuccess={(next) => {
        if (next === 'login') {
          setModalOpen('login');
        } else {
          closeModal();
        }
      }} />
    )}
  </Modal>
)}
    </div>
  );
}
