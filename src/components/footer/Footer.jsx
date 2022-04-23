import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles["page-footer"]}>
      <p className="helplink"></p>
      <div className={styles["logininfo"]}>
        You are not logged in. (
        <a href="http://81.161.243.12/bgmoodle/login/index.php">Log in</a>)
      </div>
      <div className={styles["sitelink"]}>
        <a title="Moodle" href="http://moodle.org/">
          <img
            src="http://81.161.243.12/bgmoodle/theme/image.php/clean/core/1545917344/moodlelogo"
            alt="Moodle logo"
          />
        </a>
      </div>
      <div className={styles["tool_dataprivacy"]}>
        <a href="http://81.161.243.12/bgmoodle/admin/tool/dataprivacy/summary.php">
          Data retention summary
        </a>
      </div>
      <a
        className={styles["mobile_app"]}
        href="https://download.moodle.org/mobile?version=2018120301.05&amp;lang=en&amp;iosappid=633359593&amp;androidappid=com.moodle.moodlemobile"
      >
        Get the mobile app
      </a>
    </footer>
  );
}

export default Footer;