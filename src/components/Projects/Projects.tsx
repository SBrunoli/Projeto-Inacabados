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

interface ProjectsProps {
  activeCategory: string;
  projects: Project[];
  searchValue: string;
}

const INITIAL_VISIBLE = 10;
const LOAD_STEP = 10;

function Projects({ activeCategory, projects, searchValue }: ProjectsProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeCategory, searchValue]);

  const filteredProjects = projects
    .filter((project) =>
      activeCategory === "todos" ? true : project.category === activeCategory,
    )
    .filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

  const hasNoResults = filteredProjects.length === 0;

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((current) => current + LOAD_STEP);
  };

  return (
    <div className={styles.project}>
      {hasNoResults ? (
        <p className={styles.project__empty}>
          Nenhum Projeto Encontrado para esses filtros.
        </p>
      ) : (
        <div className={styles.project__grid}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className={styles.project__footer}>
          <button className={styles.project__loadMore} onClick={handleLoadMore}>
            Carregar mais projetos
          </button>
          <span className={styles.project__counter}>
            {visibleCount} de {filteredProjects.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default Projects;
