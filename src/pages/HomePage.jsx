import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home/HomePage.module.css";
// Estilos da página home
import { Header } from "../components/others/Header";
// Header com título e botão de logout
import { FooterNav } from "../components/others/FooterNav";
// Menu inferior
import JobCard from "../components/home/JobCard";
// Card de vaga
import JobDetail from "../components/home/JobDetail";
// Detalhes da vaga selecionada

export function HomePage() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  // Lista de vagas
  const [loading, setLoading] = useState(true);
  // Estado de carregamento
  const [error, setError] = useState(null);
  // Mensagem de erro
  const [selectedJob, setSelectedJob] = useState(null);
  // Vaga selecionada
  const [user, setUser] = useState(null);
  // Usuário logado

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usuarioLogado"));
    setUser(storedUser);

    if (!storedUser) {
      navigate("/");
      // Redireciona para login se não estiver logado
      return;
    }

    setLoading(true);
    fetch("https://remotive.com/api/remote-jobs?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        // Salva vagas
        setError(null);
      })
      .catch(() => {
        setError("Erro ao carregar vagas");
        // Mensagem de erro
        setJobs([]);
      })
      .finally(() => {
        setLoading(false);
        // Finaliza carregamento
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    // Remove usuário logado
    navigate("/");
    // Redireciona para login
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    // Seleciona vaga
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
    // Fecha detalhes da vaga
  };

  const renderMainContent = () => {
    if (loading) return <p>Carregando vagas...</p>;
    // Mostra carregando
    if (error) return <p className={styles.error}>{error}</p>;
    // Mostra erro
    if (selectedJob)
      return <JobDetail job={selectedJob} onClose={handleCloseDetails} />;
    // Mostra detalhes
    if (jobs.length > 0)
      return jobs.map((job) => (
        <JobCard key={job.id} job={job} onCardClick={handleJobSelect} />
      ));
    // Lista vagas
    return <p>Nenhuma vaga encontrada.</p>;
    // Nenhuma vaga
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header com título e logout */}
      <Header user={user} onLogout={handleLogout} type="Vagas" btn={true} />
      {/* Conteúdo principal */}
      <main className={styles.mainContent}>{renderMainContent()}</main>
      {/* Menu inferior */}
      <FooterNav current="vagas" />
    </div>
  );
}
