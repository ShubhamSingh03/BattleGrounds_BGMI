import React, { useEffect } from "react";

// styles
import "./streamerPage.css";

// favicon
import streamersPageFavicon from "../../assets/favicons/streamers-page-favicon.ico";

// common components
import HeadingSection from "../../components/common/HeadingSection";
import HelmetConsumer from "../../components/common/HelmetConsumer";
import Loader from "../../components/common/loader/Loader";

// streamers page component
import TopCreatorsSlider from "../../components/streamerPage/topCreatorsSlider/TopCreatorsSlider";
import TopStreamersList from "../../components/streamerPage/topStreamersList/TopStreamersList";
import RecentLiveStream from "../../components/streamerPage/recentLiveStreams/RecentLiveStreams";

/******************************************
 *
 * Streamer Page here
 *
 ******************************************/

const StreamerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetConsumer
        pageTitle={"Streamers & Creators | Battlegrounds Mobile India"}
        pageFavicon={streamersPageFavicon}
      />
      <Loader />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-8">
                  <div className="featured-games header-text">
                    <HeadingSection
                      firstTitle={"Top"}
                      secondTitle={" Creators"}
                    />
                    {/*****************************
                     *
                     * creators slider component
                     *
                     *****************************/}
                    <TopCreatorsSlider />
                  </div>
                </div>

                {/*****************************
                 *
                 * streamers list component
                 *
                 *****************************/}
                <TopStreamersList />
              </div>

              {/*****************************
               *
               * recent live streams component
               *
               *****************************/}
              <RecentLiveStream />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreamerPage;
