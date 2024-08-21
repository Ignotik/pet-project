import { FC } from "react";
import styles from "./CartBanner.module.scss";

const CartBanner: FC = () => {
  return (
    <section className={styles.banner}>
      <h2>КОРЗИНА</h2>
    </section>
  );
};

export default CartBanner;
