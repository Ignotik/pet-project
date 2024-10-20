import React from "react";
import styles from "./CartEmpty.module.scss";

const CartEmpty: React.FC = () => {
  return <p className={styles.empty}>Корзина пуста</p>;
};

export default CartEmpty;
