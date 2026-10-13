import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <img
            src={logo}
            alt="Marketing Association NZ"
            className={styles.logo}
          />
          <p>
            The latest marketing news, events and insights from across Aotearoa.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Explore</h4>
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
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.links}>
            <li>
              <a href="mailto:info@MAassociation.com">info@MAassociation.com</a>
            </li>
            <li>Rotorua, New Zealand</li>
          </ul>
        </div>
      </div>

      <p className={styles.bottom}>
        © 2026 Marketing Association NZ. All rights reserved.
      </p>
    </footer>
  );
}
