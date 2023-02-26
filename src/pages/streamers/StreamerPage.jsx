import React, { useEffect } from "react";

// styles
import "./streamerPage.css";

// favicon
import streamersPageFavicon from "../../assets/favicons/streamers-page-favicon.ico";

// common components
import HeadingSection from "../../components/common/HeadingSection";
import HelmetConsumer from "../../components/common/HelmetConsumer";

// streamers page component
import MostPopularStreams from "../../components/StreamersPage/MostPopularStreams/MostPopularStreams";
import TopCreatorsSlider from "../../components/StreamersPage/TopCreatorsSlider/TopCreatorsSlider";
import TopStreamersCard from "../../components/StreamersPage/TopStreamersCard/TopStreamersCard";

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
        pageFavicon={favicon}
      />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
              <div class="row">
                <div class="col-lg-8">
                  <div class="featured-games header-text">
                    <HeadingSection
                      firstTitle={"Top"}
                      secondTitle={" Creators"}
                    />
                    <TopCreatorsSlider />
                  </div>
                </div>

                <TopStreamersCard />
              </div>

              <MostPopularStreams />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreamerPage;
