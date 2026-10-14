import styles from "./Cardgrid.module.css";
import article from "../assets/data/articles";

function Cardgrid() {
  return (
    <section className={styles.news}>
      <h2 className={styles.heading}>The Latest Marketing News</h2>

      <div className={styles.grid}>
        {article.map((article) => (
          <article key={article.id} className={styles.card}>
            <img
              src={article.image}
              alt={article.alt}
              className={styles.image}
            />
            <div className={styles.body}>
              <h3 className={styles.title}>{article.title}</h3>
              <p className={styles.subtitle}>{article.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cardgrid;
