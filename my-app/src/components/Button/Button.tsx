import React from "react";
import styles from "./Button.module.scss";

export type ButtonProps = {
  title: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className={styles.button}>{title}</button>;
};

export default Button;
