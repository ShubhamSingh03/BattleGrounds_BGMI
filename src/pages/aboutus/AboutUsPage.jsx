import React, { useEffect } from "react";

// styles
import "./aboutUsPage.css";

// data
import { gameDetailsData } from "../../data/gameDetailsData";

// common components & favicon
import HeadingSection from "../../components/common/HeadingSection";
import HelmetConsumer from "../../components/common/HelmetConsumer";
import aboutPageFavicon from "../../assets/favicons/about-page-favicon.ico";
import Loader from "../../components/common/loader/Loader";

// components
import MainProfile from "../../components/aboutUsPage/main-Profile/MainProfile";
import GameDetailsItem from "../../components/gameDetailsItem/GameDetailsItem";
import VideoClipsLayout from "../../components/aboutUsPage/videoClips/VideoClipsLayout";

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
      <HelmetConsumer
        pageTitle={"About Us | Battlegrounds Mobile India"}
        pageFavicon={aboutPageFavicon}
      />
      <Loader />
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

                    {/*****************************
                     * video clips layout here
                     *****************************/}
                    <VideoClipsLayout />
                  </div>
                </div>
              </div>

              {/*****************************
               * Gaming Library here
               *****************************/}

              <div className="gaming-library">
                <div className="col-lg-12">
                  <HeadingSection
                    firstTitle={"Other Games"}
                    secondTitle={" Available"}
                  />
                  {gameDetailsData?.map((game, index) => (
                    <GameDetailsItem
                      key={index}
                      gameImage={game.gameImage}
                      gameName={game.gameName}
                      gameCountry={game.gameCountry}
                      launchDate={game.launchDate}
                      totalDownloads={game.totalDownloads}
                      publisher={game.publisher}
                      downloadLink={game.downloadLink}
                    />
                  ))}
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
