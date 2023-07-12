import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/user-panel",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Profile",
    path: "/user-panel/profile",
    icon: <FiIcons.FiUser />,
  },
  {
    title: "Top Trends",
    path: "/user-panel/trends",
    icon: <AiIcons.AiOutlineRise />,
  },
  {
    title: "Report",
    path: "#",
    icon: <BsIcons.BsBarChartLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Custom Reports",
        path: "/user-panel/reports/custom-reports",
        icon: <AiIcons.AiOutlinePieChart />,
        cName: "sub-nav",
      },
      {
        title: "View Custom Reports",
        path: "#",
        icon: <BsIcons.BsFileEarmarkBarGraph />,
        cName: "sub-nav",
      },
      {
        title: "Annual Reports",
        path: "/user-panel/reports/annual-reports",
        icon: <BsIcons.BsFileEarmarkBarGraph />,
      },
    ],
  },
  {
    title: "User Hub",
    path: "#",
    icon: <CgIcons.CgUserList />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Liked Trends",
        path: "/user-panel/liked-trends",
        icon: <BiIcons.BiLike />,
        cName: "sub-nav",
      },
      // {
      //   title: "Watch History",
      //   path: "#",
      //   icon: <AiIcons.AiOutlineFieldTime />,
      //   cName: "sub-nav",
      // },
      {
        title: "Saved Trends",
        path: "/user-panel/saved-trends",
        icon: <AiIcons.AiOutlineSave />,
        cName: "sub-nav",
      },
      // {
      //   title: "Comments Activity",
      //   path: "#",
      //   icon: <AiIcons.AiOutlineComment />,
      //   cName: "sub-nav",
      // },
    ],
  },
  // {
  //   title: "Learning Hub",
  //   path: "#",
  //   icon: <BiIcons.BiBookReader />,
  // },
  // {
  //   title: "Ideation",
  //   path: "#",
  //   icon: <HiIcons.HiOutlineLightBulb />,
  // },
  {
    title: "Events",
    path: "/user-panel/events",
    icon: <BiIcons.BiCalendar />,
  },
  {
    title: "Subscription",
    path: "/user-panel/subscription-plan",
    icon: <IoIcons.IoMdNotificationsOutline />,
  },
  {
    title: "Contact Us",
    path: "/user-panel/contact-us",
    icon: <FiIcons.FiPhone />,
  },
];
