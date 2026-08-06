import styles from "./Hero.module.css";

interface HeroProps {
  categoriesCount: number;
  stoppedProjectsCount: number;
  searchValue: string;
  handleSearch: (value: string) => void;
}

function Hero({
  categoriesCount,
  stoppedProjectsCount,
  handleSearch,
  searchValue,
}: HeroProps) {
  return (
    <section className={`section ${styles.hero}`}>
      {/* Categories and Projects */}
      <div className={styles.hero__infos}>
        <span>{categoriesCount} categorias ativas</span>
        <span>|</span>
        <span>{stoppedProjectsCount} projetos parados</span>
      </div>

      {/* title */}
      <h1 className={styles.hero__title}>
        Todo projeto abandonado <span className="accent">já foi</span> uma
        vontade real.
      </h1>

      {/* description */}
      <p className={styles.hero__description}>
        Inacabados é onde código, móveis, livros, jardins e músicas que pararam
        no meio do caminho esperam por alguém disposto a continuar — do exato
        ponto em que a última pessoa parou.
      </p>

      {/* Button */}
      <div className={styles.hero__buttons}>
        <a href="#explore" className="btn btn__primary">
          Explorar Projetos
        </a>

        <a href="#howItWorks" className="btn btn__transparent">
          Como funciona <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>

      {/* search */}
      <div className={styles.hero__search}>
        <i
          className={`fa-solid fa-magnifying-glass ${styles.hero__searchIcon}`}
        ></i>
        <form
          className={styles.hero__searchForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className={styles.hero__searchInput}
          />
        </form>
      </div>
    </section>
  );
}

export default Hero;
