import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <div>
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle coolapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="#" className="navbar-brand">
                Alex Berman Photography
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Photography
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/Africa">Africa</Link>
                    </li>
                    <li>
                      <Link to="/Central-America">Central America</Link>
                    </li>
                    <li>
                      <Link to="/Europe">Europe</Link>
                    </li>
                    <li>
                      <Link to="/North-America">North America</Link>
                    </li>
                    <li>
                      <Link to="/Middle-East">Middle East</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default Nav;
