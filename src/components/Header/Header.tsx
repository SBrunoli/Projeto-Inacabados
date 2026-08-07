import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`section ${styles.header}`}>
      {/* logo */}
      <a href="/" className={styles.header__logo}>
        Inacaba<span className="accent">dos</span>
      </a>

      {/* links */}
      <nav aria-label="Navegação principal" className={styles.header__nav}>
        <a href="#projects" className={styles.header__links}>
          Explorar
        </a>

        <a href="#howItWorks" className={styles.header__links}>
          Como funciona
        </a>

        <a href="#publish" className={styles.header__links}>
          publicar o meu
        </a>
      </nav>

      {/* Button */}
      <a href="#" aria-label="Fazer login" className="btn btn__primary">
        Login
      </a>
    </header>
  );
}

export default Header;
