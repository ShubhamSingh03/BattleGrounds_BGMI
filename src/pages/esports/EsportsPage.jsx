import React, { useState, useEffect } from "react";

// styles
import "./esportsPage.css";

// images & favicons
import esportsBannerImage1 from "../../assets/banner-images/esports-banner-image-1.png";
import esportsBannerImage2 from "../../assets/banner-images/esports-banner-image-2.webp";
import esportsPageFavicon from "../../assets/favicons/esports-page-favicon.ico";

// common components
import HelmetConsumer from "../../components/common/HelmetConsumer";
import Loader from "../../components/common/loader/Loader";

// components
import VideoModal from "../../components/modals/VideoModal";
import EsportsTournamentDetails from "../../components/esportsPage/esportsTournamentDetails/EsportsTournamentDetails";
import EsportsTopRankedTeams from "../../components/esportsPage/esportsTopRankedTeams/EsportsTopRankedTeams";

/********************************************
 *
 * Esports page
 *
 *******************************************/

const EsportsPage = () => {
  //handling video modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  // scroll to TOP at each render or updation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      <HelmetConsumer
        pageTitle={"Esports | Battlegrounds Mobile India"}
        pageFavicon={esportsPageFavicon}
      />
      <Loader />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-banner header-text">
                    {/* feature banner with video modal */}
                    <div className="row">
                      <div className="col-lg-4" title="esports banner">
                        <img
                          src={esportsBannerImage2}
                          alt="esports-Banner-2"
                          style={{ borderRadius: "23px" }}
                        />
                      </div>
                      <div className="col-lg-8">
                        <div className="thumb">
                          <img
                            src={esportsBannerImage1}
                            alt="esports-Banner-1"
                            style={{ borderRadius: "23px" }}
                          />
                          <button
                            onClick={handleModal}
                            title="Video Modal Click!"
                          >
                            {modalIsOpen ? (
                              <VideoModal
                                handleModal={handleModal}
                                videoId={"poUVFYOAHPI?start=12&autoplay=1"}
                              />
                            ) : null}
                            <i className="fa fa-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* esports tournament game details component */}

              <EsportsTournamentDetails />

              {/* esports top ranked teams -  INDIA */}

              <EsportsTopRankedTeams />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsportsPage;
