import React from "react";

// styles
import "./esportsTopRankedTeams.css";

// data
import { esportsTopRankedTeamsData } from "../../../data/esportsTopRankedTeamsData";

// common components
import HeadingSection from "../../common/HeadingSection";

// components
import EsportsTopRankedTeamsCard from "./esportsTopRankedTeamsCard/EsportsTopRankedTeamsCard";

const EsportsTopRankedTeams = () => {
  return (
    <>
      <div className="other-games">
        <div className="row">
          <div className="col-lg-12">
            <HeadingSection firstTitle={"Top Ranked"} secondTitle={" Teams"} />
            <div className="tournament-participating-teams">
              {esportsTopRankedTeamsData.map((team, index) => (
                <EsportsTopRankedTeamsCard
                  key={index}
                  teamGroupImage={team.teamGroupImage}
                  teamName={team.teamName}
                  teamTitleWon={team.teamTitleWon}
                  teamLogo={team.teamLogo}
                  playerOneName={team.playerOneName}
                  playerTwoName={team.playerTwoName}
                  playerThreeName={team.playerThreeName}
                  playerFourName={team.playerFourName}
                  playerOneRole={team.playerOneRole}
                  playerTwoRole={team.playerTwoRole}
                  playerThreeRole={team.playerThreeRole}
                  playerFourRole={team.playerFourRole}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsportsTopRankedTeams;
