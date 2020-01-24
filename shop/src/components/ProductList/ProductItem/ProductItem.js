import React from "react";
import styles from "./ProductItem.module.scss";
const ProductsItem = ({ image, amount, name, manufacture }) => (
  <div className={styles.ProductItem__list}>
    <img
      src={image}
      className={styles.ProductItem__image}
      alt={manufacture + " " + name}
    />
    <h3 className={styles.ProductItem__price}> {"$" + amount}</h3>
    <h6 className={styles.ProductItem__name}>{name}</h6>
  </div>
);

export default ProductsItem;
