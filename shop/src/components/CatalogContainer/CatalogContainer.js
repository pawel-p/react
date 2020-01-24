import React from "react";
import styles from "./CatalogContainer.module.scss";
const CatalogContainer = (props) => (
  <div className={styles.catalog}>{props.children}</div>
);

export default CatalogContainer;
