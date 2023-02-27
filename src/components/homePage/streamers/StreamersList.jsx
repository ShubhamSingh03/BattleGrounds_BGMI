import React from "react";

// styles
import "./streamers.css";

// react-router-dom
import { Link } from "react-router-dom";

// data & images
import { homeStreamersData } from "../../../data/stream&streamersData";
import teamSoulRoster from "../../../assets/esports-teams-images/team-roster-images/team-soul-roster-home.png";

// common components
import HeadingSection from "../../common/HeadingSection";

// card components
import {
  StreamerCard,
  StreamerCardHorizontal,
} from "./streamersCard/StreamerCard";

const StreamersList = () => {
  return (
    <div className="most-popular">
      <div className="row">
        <div className="col-lg-12">
          <HeadingSection
            firstTitle={"Streamers"}
            secondTitle={" & Creators"}
          />
          <div className="row">
            {homeStreamersData?.slice(0, 4)?.map((streamer, index) => (
              <StreamerCard
                key={index}
                streamerName={streamer.streamerName}
                streamerImageSrc={streamer.streamerImageSrc}
                streamerOrg={streamer.streamerOrg}
                platformOneYt={streamer.platformOneYt}
                platformTwoInsta={streamer.platformTwoInsta}
              />
            ))}
            <div className="col-lg-6">
              <div className="item">
                <div className="row">
                  <StreamerCardHorizontal
                    streamerName={"Soul BGMI Roster"}
                    streamerImageSrc={teamSoulRoster}
                    streamerOrg={"SOUL Esports"}
                    platformOneYt={"10M"}
                    platformTwoInsta={"5M"}
                  />
                </div>
              </div>
            </div>
            {homeStreamersData.slice(5).map((streamer, index) => (
              <StreamerCard
                key={index}
                streamerName={streamer.streamerName}
                streamerImageSrc={streamer.streamerImageSrc}
                streamerOrg={streamer.streamerOrg}
                platformOneYt={streamer.platformOneYt}
                platformTwoInsta={streamer.platformTwoInsta}
              />
            ))}
            <div className="col-lg-12">
              <div className="main-button">
                <Link to="/streamers">Discover Popular</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamersList;
