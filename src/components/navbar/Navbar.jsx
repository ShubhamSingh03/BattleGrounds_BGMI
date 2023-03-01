import React, { useState } from "react";

//styles
import "./navbar.css";

// images
import logo from "../../assets/main-logo-images/navLogo.png";

// react-router-dom
import { Link, NavLink } from "react-router-dom";

/***************************************
 *
 * Navbar Component here
 *
 **************************************/

const Navbar = () => {
  // controlling menu trigger
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Do nothing Eat 5star");
    }
  };

  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src={logo} alt="logo" title="page-logo" />
                </Link>

                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something..."
                      id="searchText"
                      name="searchKeyword"
                      onKeyDown={handleKeyPress}
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>

                <ul className={`nav ${isOpen ? "hidden" : ""}`}>
                  <li>
                    <NavLink to={"/"} title="Home">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/news" title="News">
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/esports" title="E-sports">
                      E-Sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/streamers" title="Streamers">
                      Streamers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" title="About Us">
                      About Us
                    </NavLink>
                  </li>
                </ul>
                <p
                  className={`menu-trigger ${isOpen ? "active" : ""}`}
                  onClick={toggleNav}
                >
                  <span>Menu</span>
                </p>
                {isOpen ? (
                  <div
                    className="nav-overlay"
                    data-nav-overlay
                    onClick={closeNav}
                  >
                    <ul className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
                      <li>
                        <NavLink to={"/"}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li>
                        <NavLink to="/esports">E-Sports</NavLink>
                      </li>
                      <li>
                        <NavLink to="/streamers">Streamers</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
