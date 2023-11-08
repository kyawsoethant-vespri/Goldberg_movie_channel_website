import React from "react";
import { ButtonProps } from "./type";
import styles from "./page.module.css";
import Link from "next/link";

const Button = ({
  type,
  text,
  onClick,
  disabled,
  alternative,
  url,
}: ButtonProps) => {
  return (
    <button>
      {url ? (
        <Link
          href={url}
          onClick={onClick}
          className={styles[alternative ?? "primaryBtn"]}
          type={type}
          style={{ textDecoration: "none" }}
        >
          {text}
        </Link>
      ) : (
        <>{text}</>
      )}
    </button>
  );
};

export default Button;
