import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <header className="landing--container">
      <div className="nav--container">
        <nav>
          <NavLink>dydx</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default LandingPage;
