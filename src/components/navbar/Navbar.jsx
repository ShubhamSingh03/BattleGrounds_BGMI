import "./navbar.css";
import logo from "../../assets/main-logo-images/navLogo.png";
import { Link, NavLink } from "react-router-dom";

/***************************************
 *
 * Navbar Component here
 *
 **************************************/

const Navbar = () => {
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
                  <img src={logo} alt="logo" />
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

                <ul className="nav">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/news">News</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                </ul>
                <p className="menu-trigger">
                  <span>Menu</span>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
