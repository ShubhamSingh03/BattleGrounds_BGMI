import React, { useState } from "react";

// styles
import "./recentLiveStreams.css";

// react-router-dom
import { Link } from "react-router-dom";

// data
import { recentLiveStreamsData } from "../../../data/stream&streamersData";

// common components
import HeadingSection from "../../common/HeadingSection";

// logo & images
import streamersChannelLogo from "../../../assets/main-logo-images/streamers-page-channel-logo.svg";

const streamsOnInitialLoad = 6;
const streamsOnLoadMore = 3;

/*******************************************
 *
 * Recent Live Stream component here
 *
 *******************************************/

const RecentLiveStreams = () => {
  const [moreStreams, setMoreStreams] = useState(streamsOnInitialLoad);

  const handleMoreStreams = () => {
    setMoreStreams((prevState) => prevState + streamsOnLoadMore);
  };

  return (
    <>
      <div className="live-stream">
        <div className="col-lg-12">
          <HeadingSection firstTitle={"Recent"} secondTitle={" Live Streams"} />
        </div>
        <div className="row">
          {recentLiveStreamsData
            .slice(0, moreStreams)
            ?.map((streams, index) => (
              <div className="col-lg-4 col-xs-6" key={index}>
                <div className="item">
                  <div className="thumb">
                    {/* video container for yt embed videos */}
                    <div className="video-container">
                      <img
                        className="video-thumbnail"
                        src={`https://i.ytimg.com/vi/${streams.streamLink}/maxresdefault.jpg`}
                        alt={`${streams.streamTitle}-video-thumbnail`}
                      />
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${streams.streamLink}?rel=0&iv_load_policy=3&modestbranding=1`}
                        title={`${streams.streamTitle}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* on hover effect on thumbnail */}
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <p>Live</p>
                        </div>
                        <ul>
                          <li>
                            <p>
                              <i className="fa fa-eye"></i>{" "}
                              {streams.streamViews}
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="fa fa-gamepad"></i>{" "}
                              {streams.streamTopic}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* streams details content */}
                  <div className="down-content">
                    <div className="avatar" title={streams.streamerName}>
                      <img src={streamersChannelLogo} alt="channel-avatar" />
                    </div>
                    <span>
                      <i
                        className="fa fa-check"
                        title={streams.streamerName}
                      ></i>{" "}
                      {streams.streamerName}
                    </span>
                    <h4 title={streams.streamTitle}>{streams.streamTitle}</h4>
                  </div>
                </div>
              </div>
            ))}
          {moreStreams < recentLiveStreamsData.length && (
            <div className="col-lg-12">
              <div className="main-button">
                <Link onClick={handleMoreStreams}>Load More Clips !</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentLiveStreams;
