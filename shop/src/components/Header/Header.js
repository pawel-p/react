import React from "react";
import styles from "./Header.module.scss";

const HeaderFunction = (props) => (
  <h1 className={styles.headerBig}>{props.header}</h1>
);
export default HeaderFunction;
