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
}

const INITIAL_VISIBLE = 10;
const LOAD_STEP = 10;

function Projects({ activeCategory }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // Quantidade de projetos visíveis na tela
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  // Busca os projetos na API assim que o componente é montado
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

  // Sempre que o filtro de categoria mudar, volta a quantidade
  // visível pro valor inicial (evita carregar "sobras" do filtro anterior)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeCategory]);

  if (loading) return <p>Carregando projetos...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  // Se a categoria ativa for "todos", mostra tudo;
  // senão, filtra só os projetos da categoria selecionada
  const filteredProjects =
    activeCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Corta a lista filtrada, mostrando só a quantidade permitida agora
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Verdadeiro quando ainda existem projetos escondidos pra mostrar
  const hasMore = visibleCount < filteredProjects.length;

  // Carrega mais projetos ao clicar no botão
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

      {/* Só mostra o botão "carregar mais" se ainda houver projetos escondidos */}
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
