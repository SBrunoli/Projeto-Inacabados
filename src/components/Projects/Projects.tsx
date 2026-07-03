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

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <div className={styles.project}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
