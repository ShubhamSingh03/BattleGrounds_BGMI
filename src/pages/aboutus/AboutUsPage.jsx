import React, { useEffect } from "react";
import "./aboutUsPage.css";
import MainProfile from "../../components/aboutUsPage/main-Profile/MainProfile";

/***************************************
 *
 * About us page here
 *
 ***************************************/

const AboutusPage = () => {
  // scroll to TOP at each render or updation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-profile">
                    {/*****************************
                     * main-profile component here
                     *****************************/}
                    <MainProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
