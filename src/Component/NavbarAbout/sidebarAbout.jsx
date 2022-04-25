import React from "react";
// react icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sidebarAbout = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "About App",
    path: "/about/about-app",
    icon: <AiIcons.AiTwotoneAppstore />,
    cName: "nav-text",
  },
  {
    title: "About Author",
    path: "/about/about-author",
    icon: <AiIcons.AiOutlineIdcard />,
    cName: "nav-text",
  },
];
