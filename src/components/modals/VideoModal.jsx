import React, { useState, useEffect } from "react";

// styles
import "./videoModal.css";

// react-icons
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

/***************************************
 *
 * VideoModal for YouTube video
 *
 **************************************/

const VideoModal = (props) => {
  const [videoLoading, setVideoLoading] = useState(true);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <>
      <div className="videoModal-section">
        <div className="videoModal-section-container">
          <div className="videoModal-section-container-content">
            <IoCloseOutline
              className="modal-close-btn"
              arial-label="Close modal"
              onClick={props.handleModal}
            />
            <div className="videoModal-section-videocontainer">
              {videoLoading ? (
                <div className="videoModal-section-videocontainer-loader">
                  <BiLoaderAlt className="animate-spin" />
                </div>
              ) : null}
              <iframe
                className="videoModal-section-videocontainer-yt"
                onLoad={spinner}
                loading="lazy"
                width="800"
                height="500"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
