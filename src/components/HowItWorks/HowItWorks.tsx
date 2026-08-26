import styles from "./HowItWorks.module.css";

interface CardInfo {
  id: string;
  title: string;
  description: string;
}

function HowItWorks() {
  const cardInfos: CardInfo[] = [
    {
      id: "1",
      title: "Publique o que você abandonou",
      description:
        "Conte em que ponto parou, por quê, e o que ainda falta para terminar.",
    },
    {
      id: "2",
      title: "Alguém se identifica e adota",
      description:
        "A pessoa vê exatamente onde você parou e decide se quer levar adiante.",
    },
    {
      id: "3",
      title: "O projeto ganha vida de novo",
      description:
        "Vocês trocam contexto, o novo dono assume e o projeto volta a andar, sem precisar começar do zero.",
    },
  ];

  return (
    <section id="howItWorks" className={`section ${styles.howItWorks}`}>
      <h2 className={styles.howItWorks__title}>
        Da desistência de alguém até a continuação de outra pessoa.
      </h2>

      {/* HowItWorksCards */}
      <div className={styles.howItWorks__cardsConteiner}>
        {cardInfos.map((cardInfo) => {
          return (
            <div key={cardInfo.id} className={styles.howItWorks__card}>
              <span className="accent">{cardInfo.id}</span>
              <h3 className={styles.howItWorks__cardTitle}>{cardInfo.title}</h3>
              <p className={styles.howItWorks__cardDescription}>
                {cardInfo.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;
