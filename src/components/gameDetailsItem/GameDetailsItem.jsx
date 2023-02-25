import React from "react";
import "./gameDetailsItem.css";

/************************************
 *
 * Game Details Item component
 *
 ***********************************/

const GameDetailsItem = ({
  gameImage,
  gameName,
  gameCountry,
  launchDate,
  totalDownloads,
  publisher,
  downloadLink,
}) => {
  return (
    <>
      <div className="item text-center">
        <ul>
          <li>
            <img src={gameImage} alt="" className="templatemo-item" />
          </li>
          <li>
            <h4>{gameName}</h4>
            <span>{gameCountry}</span>
          </li>
          <li>
            <h4>Launch Date</h4>
            <span>{launchDate}</span>
          </li>
          <li>
            <h4>Total Downloads</h4>
            <span>{totalDownloads}</span>
          </li>
          <li>
            <h4>Publisher</h4>
            <span>{publisher}</span>
          </li>
          <li>
            <div className="main-border-button">
              {" "}
              {/*border-no-active */}
              <a href={downloadLink} target={"_blank"} rel="noreferrer">
                Download
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GameDetailsItem;
