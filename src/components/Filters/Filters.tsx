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
    <div className={styles.filters}>
      {/* botão só aparece no mobile via CSS */}
      <button
        className={styles.filters__toggle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {activeLabel} {isOpen ? "▲" : "▼"}
      </button>

      <ul
        className={`${styles.filters__list} ${isOpen ? styles["filters__list--open"] : ""}`}
      >
        <li>
          <button
            className={`${styles.filters__button} ${activeCategory === "todos" ? styles["filters__button--active"] : ""}`}
            onClick={() => handleSelect("todos")}
          >
            Todos
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`${styles.filters__button} ${activeCategory === category.id ? styles["filters__button--active"] : ""}`}
              onClick={() => handleSelect(category.id)}
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
