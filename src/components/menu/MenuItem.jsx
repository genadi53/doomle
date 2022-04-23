import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuItem.module.scss";

function MenuItem({ menuOption }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles["menu-item"]}
      onClick={(e) => {
        navigate(`/display/${menuOption.name}`);
      }}
    >
      <p className={styles["title"]}>{menuOption.title}</p>
    </div>
  );
}

export default MenuItem;
