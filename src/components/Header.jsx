import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const menuItems = [
    "Ecosystem",
    "Community",
    "Governance",
    "Developers",
    "Blog",
    "FAQ",
    "Jobs",
  ];

  return (
    <header className="landing--container">
      <div className="header--container">
        <Link>dydx</Link>
        <nav>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              className="menu-item"
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
          <Link>
            <button className="launch-app">Launch App</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
