import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#" className={styles.brand}>
        <img src={logo} alt="Marketing Association NZ" className={styles.logo} />
        <span className={styles.brandName}>Marketing Association NZ</span>
      </a>

      {/* Burger button */}
      <button
        className={styles.burger}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Nav open class */}
      <nav className={open ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
        <ul className={styles.links}>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <button className={styles.login}>Login</button>
      </nav>
    </header>
  );
}

export default Header;
