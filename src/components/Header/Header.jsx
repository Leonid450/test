import React from "react";

import styles from "./Header.module.sass";

const Header = (props) => {
  return (
    <nav className={styles.headerContainer}>
      <div className={styles.headerInner}>
        <ul className={styles.navContainer}>
          <li>
            <a href="http://www.google.com">Email</a>
          </li>
          <li>
            <a href="#" id="print">
              Print
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
