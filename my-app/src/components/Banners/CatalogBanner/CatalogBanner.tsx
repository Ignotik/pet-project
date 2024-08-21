import { FC } from "react";
import styles from "./CatalogBanner.module.scss";

const CatalogBanner: FC = () => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>КАТАЛОГ</h2>
    </div>
  );
};

export default CatalogBanner;
