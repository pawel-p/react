import React from "react";
import styles from "./HeaderSmall.module.scss";

const HeaderSmall = (props) => (
  <h2 className={styles.headerSmall}>{props.headerSmall}</h2>
);
export default HeaderSmall;
