import React, { useState } from "react";

// styles
import "./videoClipsLayout.css";

// react-router-dom
import { Link } from "react-router-dom";

// data
import { videoClipsData } from "../../../data/stream&streamersData";

// common components
import HeadingSection from "../../common/HeadingSection";

// components
import VideoClipsCard from "./videoClipsCard/VideoClipsCard";

const clipsOnInitialLoad = 4;
const clipOnLoadMore = 8;

/********************************************
 *
 * video clips layout component here
 *
 ********************************************/

const VideoClipsLayout = () => {
  const [moreClips, setMoreClips] = useState(clipsOnInitialLoad);

  const handleMoreClips = () => {
    setMoreClips((prevState) => prevState + clipOnLoadMore);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="clips">
            <div className="row">
              <div className="col-lg-12">
                <HeadingSection
                  firstTitle={"Most Popular"}
                  secondTitle={" Clips"}
                />
              </div>
              {/* mapping over videoClips data */}
              {videoClipsData.slice(0, moreClips)?.map((clips, index) => (
                <VideoClipsCard
                  key={index}
                  videoClipThumbnail={clips.videoClipThumbnail}
                  videoClipLink={clips.videoClipLink}
                />
              ))}
              {moreClips < videoClipsData.length && (
                <div className="col-lg-12">
                  <div className="main-button">
                    <Link onClick={handleMoreClips}>Load More Clips !</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoClipsLayout;
