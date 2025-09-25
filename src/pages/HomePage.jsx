import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home/HomePage.module.css";
import { Header } from "../components/others/Header";
import { FooterNav } from "../components/others/FooterNav";
import JobCard from "../components/home/JobCard";
import JobDetail from "../components/home/JobDetail";

export function HomePage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usuarioLogado"));
    setUser(storedUser);

    if (!storedUser) {
      navigate("/");
      return;
    }

    setLoading(true);
    fetch("https://remotive.com/api/remote-jobs?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setError(null);
      })
      .catch(() => {
        setError("Erro ao carregar vagas");
        setJobs([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  const renderMainContent = () => {
    if (loading) {
      return <p>Carregando vagas...</p>;
    }
    if (error) {
      return <p className={styles.error}>{error}</p>;
    }
    if (selectedJob) {
      return <JobDetail job={selectedJob} onClose={handleCloseDetails} />;
    }
    if (jobs.length > 0) {
      return jobs.map((job) => (
        <JobCard key={job.id} job={job} onCardClick={handleJobSelect} />
      ));
    }
    return <p>Nenhuma vaga encontrada.</p>;
  };

  return (
    <div className={styles.pageContainer}>
      <Header user={user} onLogout={handleLogout} type="Vagas" btn={true} />
      <main className={styles.mainContent}>{renderMainContent()}</main>
      <FooterNav current="vagas" />
    </div>
  );
}