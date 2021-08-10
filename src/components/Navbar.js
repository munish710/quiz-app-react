import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineLogout,
  AiOutlineLogin,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const { user, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="nav-center section-center">
        <div className="nav-header">
          <div className="logo">
            <span className="generic-icon">
              <AiOutlineQuestionCircle />
            </span>
            QuizMe
          </div>
          <div className="button-wrapper">
            <button
              className="nav-toggle"
              onClick={() => setShowNavLinks(!showNavLinks)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <ul
          className={`${showNavLinks ? "nav-links show-links" : "nav-links"}`}
        >
          <li>
            <Link
              className="nav-link"
              to="/"
              onClick={() => setShowNavLinks(false)}
            >
              <span className="generic-icon">
                <AiOutlineHome />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/dashboard"
              onClick={() => setShowNavLinks(false)}
            >
              <span className="generic-icon">
                <AiOutlineBarChart />
              </span>
              Dashboard
            </Link>
          </li>
        </ul>

        <div className={showNavLinks ? "nav-footer show" : "nav-footer"}>
          {user ? (
            <button
              className="nav-link nav-btn"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <span className="generic-icon">
                <AiOutlineLogout />
              </span>
              Logout
            </button>
          ) : (
            <button className="nav-link nav-btn" onClick={loginWithRedirect}>
              <span className="generic-icon">
                <AiOutlineLogin />
              </span>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
