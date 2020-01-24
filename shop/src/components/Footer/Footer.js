import React from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";

const Footer = () => (
  <footer className={styles.footerCn}>
    <Container>
      <p>
        Shop © 2020 <br />
        Designed by Pawel P
      </p>
    </Container>
  </footer>
);
export default Footer;
