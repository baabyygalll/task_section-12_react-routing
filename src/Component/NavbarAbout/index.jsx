import { Link } from "react-router-dom";
// useState
import { useState } from "react";
// css
import "./style.module.css";
// react icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// data
import { sidebarAbout } from "./sidebarAbout";

const NavbarAbout = () => {
  const [sidebar, setSidebar] = useState(false);
  // false means not showing

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars close">
                <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
              </Link>
            </li>
            {sidebarAbout.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default NavbarAbout;
