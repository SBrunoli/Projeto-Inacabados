import { useState } from "react";
import styles from "./Filters.module.css";

interface Category {
  id: string;
  label: string;
}

interface FiltersProps {
  activeCategory: string;
  handleCategory: (category: string) => void;
  categories: Category[];
}

function Filters({ activeCategory, handleCategory, categories }: FiltersProps) {
  const options = [{ id: "todos", label: "Todos" }, ...categories];

  // controla se o dropdown está aberto ou fechado (só importa no mobile)
  const [isOpen, setIsOpen] = useState(false);

  const activeLabel =
    activeCategory === "todos"
      ? "Todos"
      : (categories.find((c) => c.id === activeCategory)?.label ?? "Todos");

  const handleSelect = (id: string) => {
    handleCategory(id);
    setIsOpen(false);
  };

  return (
    <section className={`section ${styles.filters}`}>
      {/* botão só aparece no mobile via CSS */}
      <button
        className={styles.filters__toggle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {activeLabel} {isOpen ? "▲" : "▼"}
      </button>

      <ul
        id="filter-list"
        className={`${styles.filters__list} ${isOpen ? styles["filters__list--open"] : ""}`}
      >
        {options.map(({ id, label }) => (
          <li key={id}>
            <button
              type="button"
              className={`${styles.filters__button} ${
                activeCategory === id ? styles["filters__button--active"] : ""
              }`}
              onClick={() => handleSelect(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filters;
