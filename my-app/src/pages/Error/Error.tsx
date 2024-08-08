import React from "react";
import styles from "./Error.module.scss";

const Error: React.FC = () => {
  return <div className={styles.error}>Упс...Такой страницы нет</div>;
};

export default Error;
