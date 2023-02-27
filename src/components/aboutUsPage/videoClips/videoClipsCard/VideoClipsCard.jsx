import React, { useState } from "react";

// styles
import "../videoClipsLayout.css";

// components
import VideoModal from "../../../modals/VideoModal";

/********************************************
 *
 * video clips card component here
 *
 ********************************************/

const VideoClipsCard = ({ videoClipThumbnail, videoClipLink }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="popular-clips" title="Popular video clips">
          <div
            className="item"
            style={{
              background: `url(${videoClipThumbnail})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "23px",
            }}
          >
            <div className="thumb">
              {/* handling modal */}
              <button onClick={handleModal} title="Click to Play">
                {modalIsOpen ? (
                  <VideoModal
                    handleModal={handleModal}
                    videoId={videoClipLink}
                  />
                ) : null}
                <i className="fa fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoClipsCard;
