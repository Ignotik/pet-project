import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export type ButtonProps = {
  title: React.ReactNode;
  color: string;
  width: string;
};

const Button: React.FC<ButtonProps> = ({ title, color, width }) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles[color]]: true,
    [styles[width]]: true,
  });
  return <button className={buttonClass}>{title}</button>;
};

export default Button;
