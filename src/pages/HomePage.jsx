import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/others/Header";
import { JobList } from "../components/home/JobList";
import { FooterNav } from "../components/others/FooterNav";
import styles from "../styles/home/HomePage.module.css";

export function HomePage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    fetch("https://remotive.com/api/remote-jobs?limit=10")
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs))
      .catch(() => setError("Erro ao carregar vagas"))
      .finally(() => setLoading(false));
  }, [navigate, user]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <Header user={user} onLogout={handleLogout} />

      <main className={styles.mainContent}>
        {loading && <p>Carregando vagas...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p>Nenhuma vaga encontrada.</p>
        )}
        {!loading && !error && <JobList jobs={jobs} />}
      </main>

      <FooterNav current="vagas" />
    </div>
  );
}
