import { NavLink } from "react-router-dom";
import "./footer.css";
import footerLogo from "../../assets/main-logo-images/footerLogo.png";

/**********************************************
 *
 * Footer component
 *
 **********************************************/

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <img
                src={footerLogo}
                className="footer-logo-img"
                alt="footer-logo"
              />
              <p className="menu">
                <NavLink to={"/"}> Home</NavLink>
                <NavLink to={"/news"}> News </NavLink>
                <NavLink to={"/esports"}> Esports </NavLink>
                <NavLink> Streamers </NavLink>
                <NavLink to={"/about"}>About us</NavLink>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="copyright">
                Copyright &copy; 2023 All rights reserved | Coded with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by:
                <a
                  className="footer-author-name"
                  href="https://shubhambhoj.in"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Shubham Singh{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
