import React from "react";
import { InputProps } from "./type";
import styles from "./page.module.css";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  disabled,
  alternative,
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={styles[alternative ?? "primaryInput"]}
      />
    </div>
  );
};

export default Input;
