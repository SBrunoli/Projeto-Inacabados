import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [signUp, setSignUp] = useState(false);

  return (
    <section className={styles.login}>
      <div
        className={`${styles.container} ${signUp ? styles.signUp__active : ""}`}
      >
        <div className={styles.formsContainer}>
          {/* Container Login */}
          <div
            className={`${styles.form__box} ${styles.form__boxLogin} ${!signUp ? styles.form__boxActive : ""}`}
          >
            <form className={styles.form}>
              <span className="accent">Bem-vindo de volta</span>
              <h2 className={styles.form__title}>Entrar</h2>

              <input
                className={styles.form__Input}
                type="email"
                placeholder="E-mail"
              />
              <input
                className={styles.form__Input}
                type="password"
                placeholder="Senha"
              />

              <a className={styles.form__link} href="#">
                Esqueceu sua senha?
              </a>

              <button className={styles.form__btn} type="submit">
                Entrar
              </button>

              <p className={styles.form__toggle}>
                Não tem conta?{" "}
                <button
                  type="button"
                  className={styles.form__toggleBtn}
                  onClick={() => setSignUp(true)}
                >
                  Criar uma
                </button>
              </p>
            </form>
          </div>

          {/* Container Signup */}
          <div
            className={`${styles.form__box} ${styles.form__boxSignup} ${signUp ? styles.form__boxActive : ""}`}
          >
            <form className={styles.form}>
              <span className="accent">Novo por aqui</span>
              <h2 className={styles.form__title}>Criar conta</h2>

              <input
                className={styles.form__Input}
                type="text"
                placeholder="Nome"
              />
              <input
                className={styles.form__Input}
                type="email"
                placeholder="E-mail"
              />
              <input
                className={styles.form__Input}
                type="password"
                placeholder="Senha"
              />

              <button className={styles.form__btn} type="submit">
                Criar conta
              </button>

              <p className={styles.form__toggle}>
                Já tem conta?{" "}
                <button
                  type="button"
                  className={styles.form__toggleBtn}
                  onClick={() => setSignUp(false)}
                >
                  Fazer login
                </button>
              </p>
            </form>
          </div>
        </div>

        {/* wrapper */}
        <div className={styles.slider__wrapper}>
          {/* Slider */}
          <div className={styles.slider}>
            {/* Signup Slider */}
            <div className={styles.slider__box}>
              <h2>Ainda não tem conta?</h2>
              <p>
                Crie sua conta e comece a documentar o que ficou pelo caminho.
              </p>
              <button
                type="button"
                className={styles.slider__btn}
                onClick={() => setSignUp(true)}
              >
                Criar conta
              </button>
            </div>

            {/* Login Slider */}
            <div className={styles.slider__box}>
              <h2>Ja tem conta?</h2>
              <p>Entre com seus dados para continuar de onde parou.</p>
              <button
                type="button"
                className={styles.slider__btn}
                onClick={() => setSignUp(false)}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className={styles.home__btn}>
        <i className="fa-solid fa-arrow-left-long"></i> Voltar ao início
      </Link>
    </section>
  );
}

export default Login;
