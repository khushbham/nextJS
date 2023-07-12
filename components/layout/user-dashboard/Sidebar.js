import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import styles from "./dashboardsidebar.module.css";
import { AiFillHome, AiOutlineRise, AiOutlineBell } from "react-icons/ai";
import { GrLineChart } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBarChartLine } from "react-icons/bs";
import {BiCalendarStar} from "react-icons/bi";
import {FiUser} from "react-icons/fi";
import { IconContext } from 'react-icons/lib';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

const Sidebar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    {/* <div className={styles.sidebar_header}>
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <div className="logo-user">
        <img src="../images/logo.png" alt="" />
      </div>
    </div> */}
    <div className={styles.side_menu}>

    <IconContext.Provider value={{ color: '#fff' }}>
        {/* <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav> */}
        <Nav className={styles.sidebar_nav_data}>
          <div className="w-100">
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </Nav>
      </IconContext.Provider>

      {/* { items.map((item, index) => <SidebarItem key={index} item={item} />) } */}
      {/* <Nav vertical className={`${styles.user_sidebar} list-unstyled main_sidebar_dash pb-3`}>
        <NavItem>
          <NavLink to="/">
            <AiFillHome />
            Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <AiOutlineRise />
            Top Trends</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <FaBookReader />
            Learning Hub</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <HiOutlineLightBulb />
            Ideation</NavLink>
        </NavItem>
        <SubMenu title="Reports" items={submenus[0]} />
        <SubMenu title="User Hub" items={submenus[1]} />
        <NavItem>
          <NavLink to="/">
            <BiCalendarStar/>
            Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <AiOutlineBell />
            Subscription
            </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <FiUser />
            Profile</NavLink>
        </NavItem>
      </Nav> */}
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Custom  Reports",
      target: "custom-reports",
      IconType: 'Feather',
      IconName: 'settings'
    },
    {
      title: "View Custom Reports",
      target: "view-custom-reports",
    },
    {
      title: "Annual Reports",
      target: "annual-reports",
    },
  ],
  [
    {
      title: "Likes",
      target: "user-likes",
    },
    {
      title: "Watch History",
      target: "user-watch-history",
    },
    {
      title: "Saved Trends",
      target: "user-saved-trends",
    },
  ],
];

export default Sidebar;
