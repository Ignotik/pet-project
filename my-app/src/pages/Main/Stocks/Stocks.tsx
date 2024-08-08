import { FC } from "react";
import styles from "./Stocks.module.scss";

const Stocks: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наши акции</h2>
    </div>
  );
};

export default Stocks;
