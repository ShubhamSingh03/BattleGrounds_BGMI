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
      <div class="team-card">
        <div
          class="team-group-image"
          style={{
            background: `url(${teamGroupImage})`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div class="team-info">
          <h2 class="title">
            {teamName}
            <span
              class="team-logo"
              style={{
                background: `url(${teamLogo})`,
                backgroundRepeat: " no-repeat",
                backgroundPosition: "top right",
                backgroundSize: "100% auto",
              }}
            ></span>
          </h2>
          <h3 class="subtitle">
            {teamTitleWon}{" "}
            <i className="fa fa-trophy" style={{ color: "#E5B44A" }}></i>
          </h3>
          <p class="player-names">
            <table class="player-names-role">
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
            </table>
          </p>
        </div>
      </div>
    </>
  );
};

export default EsportsTopRankedTeamsCard;
