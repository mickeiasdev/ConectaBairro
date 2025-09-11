import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {HeaderHome} from "../components/home/HeaderHome";
import {JobList} from "../components/home/JobList";
import {FooterNav} from "../components/home/FooterNav";
import styles from "../styles/home/HomePage.module.css";

export function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    fetch("https://apis.camillerakoto.fr/fakejobs/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar vagas");
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Não foi possível carregar as vagas");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate, user]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <HeaderHome user={user} onLogout={handleLogout} />

      <main className={styles.mainContent}>
        {loading && <p>Carregando vagas...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {!loading && !error && <JobList jobs={jobs} />}
      </main>

      <FooterNav current="vagas" />
    </div>
  );
}
