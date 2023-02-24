import React from "react";
import "./mainProfile.css";
import bgmiLogo from "../../../assets/games-logos/bgmiLogo.jpg";

const MainProfile = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <img src={bgmiLogo} alt="" style={{ borderRadius: "23px" }} />
        </div>
        <div className="col-lg-4 align-self-center">
          <div className="main-info header-text">
            <span>version 2.1.0</span>
            <h4>Battlegrounds Mobile INDIA </h4>
            <p>
              So, what are you waiting for? Call your friends and jump into
              BATTLEGROUNDS today!
            </p>
            <div className="main-border-button">
              <a
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&gl=US"
                target={"_blank"}
                rel="noreferrer"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 align-self-center">
          <ul>
            <li>
              Rating{" "}
              <span>
                4.3 <i className="fa fa-star"></i>
              </span>
            </li>
            <li>
              Updated on <span>Jul 11, 2022</span>
            </li>
            <li>
              Total Downloads <span>100 Million+</span>
            </li>

            <li>
              Publisher <span>KRAFTON, Inc.</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainProfile;
