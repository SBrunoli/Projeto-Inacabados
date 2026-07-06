import { useEffect, useState } from "react";
import ProjectCard from "../ProjectsCards/ProjectsCards";
import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  category: string;
  progress: number;
  stopped: string;
  author: string;
  reason: string;
}

const INITIAL_VISIBLE = 10;
const LOAD_STEP = 10;

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  //requisition to fetch projects from the API
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar projetos");
        return response.json();
      })
      .then((data: Project[]) => setProjects(data))
      .catch((err) =>
        setError(err instanceof Error ? err : new Error(String(err))),
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando projetos...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((current) => current + LOAD_STEP);
  };

  return (
    <div className={styles.project}>
      <div className={styles.project__grid}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className={styles.project__footer}>
          <button className={styles.project__loadMore} onClick={handleLoadMore}>
            Carregar mais projetos
          </button>
          <span className={styles.project__counter}>
            {visibleCount} de {projects.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default Projects;
