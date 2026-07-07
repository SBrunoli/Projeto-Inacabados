import { useEffect, useState } from "react";
import styles from "./Filters.module.css";

interface Categories {
  id: string;
  label: string;
}

interface FiltersProps {
  activeCategory: string;
  handleCategory: (category: string) => void;
}

function Filters({ activeCategory, handleCategory }: FiltersProps) {
  const [filters, setFilters] = useState<Categories[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar categorias");
        return response.json();
      })
      .then((data: Categories[]) => setFilters(data))
      .catch((err) =>
        setError(err instanceof Error ? err : new Error(String(err))),
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando Filtros...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className={styles.filters}>
      <ul className={styles.filters__list}>
        <li>
          <button
            className={`${styles.filters__button} ${activeCategory === "todos" ? styles["filters__button--active"] : ""}`}
            onClick={() => handleCategory("todos")}
          >
            Todos
          </button>
        </li>
        {filters.map((category) => (
          <li key={category.id}>
            <button
              className={`${styles.filters__button} ${activeCategory === category.id ? styles["filters__button--active"] : ""}`}
              onClick={() => handleCategory(category.id)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
