import { FC } from "react";
import styles from "./Error.module.scss";

const Error: FC = () => {
  return (
    <>
      <div className={styles.error}>Упс...Такой страницы нет</div>;
    </>
  );
};

export default Error;
