import React, { useState, useEffect, useMemo } from "react";

// styles
import "./homePage.css";

// imports
import { Link, useLocation } from "react-router-dom";

// data
import { gameDetailsData } from "../../data/gameDetailsData";
import { newsDetailsData } from "../../data/newsDetailsData";

// images & favicons
import homePageFavicon from "../../assets/favicons/home-page-favicon.ico";
import homePageBannerImage1 from "../../assets/banner-images/home-page-banner-image-1.jpg";
import homePageBannerImage2 from "../../assets/banner-images/home-page-banner-image-2.jpg";
import homePageBannerImage3 from "../../assets/banner-images/home-page-banner-image-3.jpg";
import homePageBannerImage4 from "../../assets/banner-images/home-page-banner-image-4.jpg";
import homePageBannerImage5 from "../../assets/banner-images/home-page-banner-image-5.jpg";

// common components
import HelmetConsumer from "../../components/common/HelmetConsumer";
import HeadingSection from "../../components/common/HeadingSection";

// components
import StreamersList from "../../components/homePage/streamers/StreamersList";
import NewsList from "../../components/newsPage/newsList/NewsList";
import GameDetailsItem from "../../components/gameDetailsItem/GameDetailsItem";

import Loader from "../../components/common/loader/Loader";

const HomePage = () => {
  const location = useLocation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = useMemo(
    () => [
      homePageBannerImage1,
      homePageBannerImage4,
      homePageBannerImage2,
      homePageBannerImage3,
      homePageBannerImage5,
    ],
    []
  );

  useEffect(() => {
    // Load all images in memory to avoid delay and flicker
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    // Start slideshow
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    backgroundImage: `url(${images[currentSlide]})`,
  };

  return (
    <>
      <HelmetConsumer
        pageTitle={"Home | Battlegrounds Mobile India"}
        pageFavicon={homePageFavicon}
      />
      <Loader />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="main-banner" style={styles}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h6>Welcome, to the Official Page of</h6>
                      <h4>
                        <em>INDIA</em> KA APNA <br /> BATTLEGROUNDS
                      </h4>
                      <div className="main-button">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.pubg.imobile&gl=US"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* home page streamers component */}
              <StreamersList />

              {/* news */}
              <NewsList newsDetailsData={newsDetailsData} />

              {/* Gaming Library component here */}

              <div className="gaming-library">
                <div className="col-lg-12">
                  <HeadingSection
                    firstTitle={"Other Games"}
                    secondTitle={" Available"}
                  />
                  {gameDetailsData?.slice(0, 4)?.map((game, index) => (
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
                {location.pathname === "/" ? (
                  <div className="col-lg-12">
                    <div className="main-button">
                      <Link to="/about">View Games Available</Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
