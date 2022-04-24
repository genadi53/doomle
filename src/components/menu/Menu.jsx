import React from "react";
import MenuItem from "./MenuItem";
const options = [
  { name: "frequency", title: "Show Frequency Analysis" },
  { name: "centralTrend", title: "Show Central Trend Information" },
  { name: "distraction", title: "Show Distraction Information" },
  { name: "correlation", title: "Show Correlation Analysis" },
  { name: "grades", title: "Display Grades" },
  { name: "logs", title: "Get Data From Logs" },
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
        return <MenuItem key={option.name} menuOption={option} />;
      })}
    </div>
  );
};

export default Menu;
