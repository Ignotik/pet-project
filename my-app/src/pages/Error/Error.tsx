import { FC } from "react";
import styles from "./Error.module.scss";

const Error: FC = () => {
  return (
    <>
      <section className={styles.error}>Упс...Такой страницы нет</section>;
    </>
  );
};

export default Error;
