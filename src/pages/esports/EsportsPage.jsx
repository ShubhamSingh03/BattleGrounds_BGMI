import React, { useState, useEffect } from "react";
import "./esportsPage.css";
import esportsBannerImage1 from "../../assets/banner-images/esports-banner-image-1.png";
import esportsBannerImage2 from "../../assets/banner-images/esports-banner-image-2.webp";

const EsportsPage = () => {
  // scroll to TOP at each render or updation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-banner header-text">
                    <div className="row">
                      <div className="col-lg-4">
                        <img
                          src={esportsBannerImage2}
                          alt="esports-banner-1"
                          style={{ borderRadius: "23px" }}
                        />
                      </div>
                      <div className="col-lg-8">
                        <div className="thumb">
                          <img
                            src={esportsBannerImage1}
                            alt="esports-banner-2"
                            style={{ borderRadius: "23px" }}
                          />
                          <button>
                            <i className="fa fa-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
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

export default EsportsPage;
