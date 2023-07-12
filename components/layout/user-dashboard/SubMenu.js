import React, { useState } from "react";
import Link from "next/link";
import styles from "./dashboardsidebar.module.css";
import Router, { useRouter } from "next/router";

const SubMenu = ({ item }) => {
  const router = useRouter();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link href={item.path}>
        <div onClick={item.subNav && showSubnav} className={item.path == router.pathname ? styles.submenudata +" "+styles.active : styles.submenudata}>
          <div className={styles.sidemenu_link}>
            {item.icon}
            <span>{item.title}</span>
          </div>
          <div className={styles.sidesubmenu_link}>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div className={styles.sub_menu_div}>
              <Link href={item.path} key={index} >
                <div className={item.path == router.pathname ? styles.subinksmenudata +" "+styles.active : styles.subinksmenudata} >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              </Link>
            </div>
           
          );
        })}
    </>
  );
};

export default SubMenu;
