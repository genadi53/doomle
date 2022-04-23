import React from "react";
import styles from "./MenuItem.module.scss";
const options = [
  { name: "frequency", title: "" },
  { name: "centralTrend", title: "" },
  { name: "distraction", title: "" },
  { name: "correlation", title: "" },
  { name: "logs", title: "" },
  { name: "grades", title: "" },
];
// https://ptsdoomle20220422194729.azurewebsites.net/api/frequency
// https://ptsdoomle20220422194729.azurewebsites.net/api/centralTrend
// https://ptsdoomle20220422194729.azurewebsites.net/api/distraction
// https://ptsdoomle20220422194729.azurewebsites.net/api/correlation
// https://ptsdoomle20220422194729.azurewebsites.net/api/logs
// https://ptsdoomle20220422194729.azurewebsites.net/api/grades
const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {options.map((option) => {
        return (
          <div className={styles["menu-item"]}>
            <p className={styles["title"]}>{option.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
