import { FC } from "react";
import styles from "./CatalogBanner.module.scss";

const CatalogBanner: FC = () => {
  return (
    <section className={styles.banner}>
      <h2 className={styles.title}>КАТАЛОГ</h2>
    </section>
  );
};

export default CatalogBanner;
