import React from "react";
import styles from "./ProductList.module.scss";

const ProductList = (props) => (
  <h1 className={styles.ProductList}>{props.children}</h1>
);
export default ProductList;
