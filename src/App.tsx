import { useEffect, useState } from "react";
import Filters from "./components/Filters/Filters";
import Hero from "./components/Hero/Hero";
import Infos from "./components/Infos/Infos";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import PublishProject from "./components/PublishProject/PublishProject";
import Footer from "./components/Footer/Footer";

interface Project {
  id: number;
  title: string;
  category: string;
  progress: number;
  stopped: string;
  author: string;
  reason: string;
}

interface Category {
  id: string;
  label: string;
}

function App() {
  const [category, setCategory] = useState("todos");
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResponse, categoriesResponse] = await Promise.all([
          fetch("http://localhost:3000/projects"),
          fetch("http://localhost:3000/categories"),
        ]);

        if (!projectsResponse.ok || !categoriesResponse.ok) {
          throw new Error("Erro ao carregar os dados da API");
        }

        const projectsData = await projectsResponse.json();
        const categoriesData = await categoriesResponse.json();

        setProjects(projectsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro inesperado");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <Navbar />
      <Hero
        categoriesCount={categories.length}
        stoppedProjectsCount={projects.length}
        searchValue={searched}
        handleSearch={setSearched}
      />
      <Infos projects={projects} categories={categories} />
      <Filters
        activeCategory={category}
        handleCategory={setCategory}
        categories={categories}
      />
      <Projects
        activeCategory={category}
        projects={projects}
        searchValue={searched}
      />
      <HowItWorks />
      <PublishProject />
      <Footer />
    </>
  );
}

export default App;
