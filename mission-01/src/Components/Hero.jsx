import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Marketing News that moves NZ</h1>

        <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Search articles..."
            aria-label="Search articles"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
