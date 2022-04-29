import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();
  return (
    <header role="banner" className={styles["navbar"]}>
      <nav role="navigation" className={styles["navbar-inner"]}>
        <div className={styles["container-fluid"]}>
          {/*<a className={styles["brand"]} title="Home" href="/">
              DOOMLE
          </a>*/}
          <img
            className={styles["brand"]}
            style={{
              width: "100px",
              verticalAlign: "middle",
              paddingTop: 0,
              // border: 0,
            }}
            src="/Doomle2.png"
            alt="Moodle logo"
            onClick={() => {
              navigate("/");
            }}
          />

          <div className={styles["usermenu"]}>
            <span className={styles["login"]}>
              You do not need to be logged in.
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// <div className="nav-collapse collapse">
//     <ul className="nav pull-right">
//       <li></li>
//     </ul>
//   </div>
