import React from "react";
import Sidebar from "../Sidebar";
import styles from "./style.module.css"


const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.sidebarContainer}>{children}</div>
    </div>
  );
};

export default Layout;
