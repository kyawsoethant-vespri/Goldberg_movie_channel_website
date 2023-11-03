import React from "react";
import { ButtonProps } from "./type";
import styles from "./page.module.css";

const Button = ({
  type,
  text,
  onClick,
  disabled,
  alternative,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles[alternative ?? "primaryBtn"]}
    >
      {text}
    </button>
  );
};

export default Button;
