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

              {/*****************************
               * Gaming Library here
               *****************************/}

              <div className="gaming-library">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Other Games</em> Available
                    </h4>
                  </div>
                  {gameDetails?.map((game, index) => (
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
