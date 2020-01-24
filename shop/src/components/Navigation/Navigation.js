import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Container from "../Container/Container";
const Navigation = () => (
  <nav className={styles.navbar}>
    <Container>
      <ul className={styles.wrapper}>
        <li className={styles.navItem}>
          <Link className={styles.navItemLink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navItemLink} to="/catalog" target="_blank">
            Catalog
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navItemLink} to="/about" target="_blank">
            About
          </Link>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Navigation;
