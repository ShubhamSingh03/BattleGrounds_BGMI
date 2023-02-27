import React from "react";

// styles
import "./esportsTopRankedTeamsCard.css";

const EsportsTopRankedTeamsCard = ({
  teamGroupImage,
  teamName,
  teamTitleWon,
  teamLogo,
  playerOneName,
  playerTwoName,
  playerThreeName,
  playerFourName,
  playerOneRole,
  playerTwoRole,
  playerThreeRole,
  playerFourRole,
}) => {
  return (
    <>
      {/*  team - card here */}
      <div className="team-card" title={`${teamName}-roster-card`}>
        <div
          className="team-group-image"
          style={{
            background: `url(${teamGroupImage})`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="team-info">
          <h2 className="title">
            {teamName}
            <span
              className="team-logo"
              style={{
                background: `url(${teamLogo})`,
                backgroundRepeat: " no-repeat",
                backgroundPosition: "top right",
                backgroundSize: "100% auto",
              }}
            ></span>
          </h2>
          <h3 className="subtitle">
            {teamTitleWon}{" "}
            <i className="fa fa-trophy" style={{ color: "#E5B44A" }}></i>
          </h3>
          <span className="player-names">
            <table className="player-names-role">
              <tbody>
                <tr>
                  <td>{playerOneName}</td>
                  <td>{playerOneRole}</td>
                </tr>
                <tr>
                  <td>{playerTwoName}</td>
                  <td>{playerTwoRole}</td>
                </tr>
                <tr>
                  <td>{playerThreeName}</td>
                  <td>{playerThreeRole}</td>
                </tr>
                <tr>
                  <td>{playerFourName}</td>
                  <td>{playerFourRole}</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </div>
    </>
  );
};

export default EsportsTopRankedTeamsCard;
