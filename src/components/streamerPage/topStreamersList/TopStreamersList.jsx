import React from "react";

//styles
import "./topStreamersList.css";

// data
import { topStreamersData } from "../../../data/stream&streamersData";

// common components
import HeadingSection from "../../common/HeadingSection";

/*******************************************
 *
 * Top Streamers List component here
 *
 *******************************************/

const TopStreamersList = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="top-streamers">
          <HeadingSection firstTitle={"Top"} secondTitle={" Streamers"} />
          <ul>
            {topStreamersData.map((streamer, index) => (
              <li key={index}>
                <span>{streamer.serialNumber}</span>
                <img
                  src={streamer.topStreamerImage}
                  alt={`${streamer.topStreamerName}top-streamer`}
                  style={{
                    maxWidth: "36px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                  title={`${streamer.topStreamerName}`}
                />
                <h6>
                  <i className="fa fa-check"></i> {streamer.topStreamerName}{" "}
                </h6>
                <div className="main-button">
                  <a
                    href={streamer.topStreamerInstaLink}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Follow
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopStreamersList;
