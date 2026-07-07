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
        {categories.map((category) => (
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
