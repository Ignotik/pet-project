import { FC } from "react";
import styles from "./LinkToCatalog.module.scss";
import { Link } from "react-router-dom";
import pilo from "../../../assets/images/pilo.png";
import sand from "../../../assets/images/sand.png";
import coal from "../../../assets/images/coal.png";
import cheb from "../../../assets/images/cheb.png";
import chem from "../../../assets/images/chem.png";

const LinkToCatalog: FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container_list}>
        <li className={styles.container_link1}>
          <Link to="/lumber">
            <img src={pilo} alt="пиломатериалы" />
          </Link>
        </li>
        <li className={styles.container_link2}>
          <Link to="/coal">
            <img src={coal} alt="уголь" />
          </Link>
        </li>
        <li className={styles.container_link3}>
          <Link to="/rubble">
            <img src={cheb} alt="щебень" />
          </Link>
        </li>
        <li className={styles.container_link4}>
          <Link to="/sand">
            <img src={sand} alt="песок" />
          </Link>
        </li>
        <li className={styles.container_link5}>
          <Link to="/cement">
            <img src={chem} alt="цемент" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkToCatalog;
