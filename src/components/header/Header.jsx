import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header role="banner" className={styles["navbar"]}>
      <nav role="navigation" className={styles["navbar-inner"]}>
        <div className={styles["container-fluid"]}>
          <a className={styles["brand"]} title="Home" href="/">
            DOOMLE
          </a>
          <div className={styles["usermenu"]}>
            <span className={styles["login"]}>
              You do not need to be logged in. (
              <a href="http://81.161.243.12/bgmoodle/login/index.php">Log in</a>
              )
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
