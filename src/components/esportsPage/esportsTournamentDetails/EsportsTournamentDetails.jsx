import React from "react";

// styles
import "./esportsTournamentDetails.css";

// images
import teamSoulLogo from "../../../assets/esports-teams-images/team-logos/team-soul-logo.png";
import teamEnigmaLogo from "../../../assets/esports-teams-images/team-logos/team-enigma-logo.png";
import team7seaLogo from "../../../assets/esports-teams-images/team-logos/team-7sea-logo.png";

const EsportsTournamentDetails = () => {
  return (
    <>
      <div className="game-details">
        <div className="row">
          <div className="col-lg-12">
            <h2>BGMI Pro Series - Season 2</h2>
          </div>
          <div className="col-lg-12">
            <div className="content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left-info table-responsive">
                    {/*********************************
                     * Points distribution table
                     ****************************** */}
                    <h4>Points Distribution</h4>
                    <table class="table points-table text-center table-primary">
                      <thead>
                        <tr>
                          <th colspan="2">Points Distribution</th>
                        </tr>
                        <tr className="table-secondary">
                          <th>Finish Points</th>
                          <th>1 per finish</th>
                        </tr>
                        <tr>
                          <th>Place </th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="table-danger">1st</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td className="table-warning">2nd</td>
                          <td>12</td>
                        </tr>
                        <tr className="table-info">
                          <td>3rd</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>4th</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>5th</td>
                          <td>6</td>
                        </tr>
                        <tr>
                          <td>6th</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>7th</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>8th - 12th</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>13th - 16th </td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/*********************************
                   * Tournament schedule table
                   ****************************** */}
                  <div className="right-info table-responsive">
                    <h4>Tournament Schedule </h4>
                    <table class="table schedule-table text-center table-primary">
                      <thead>
                        <tr>
                          <th className="w-45">Week #</th>
                          <th>Matchdays</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td class="table-warning">Dec 19th - Dec 22nd</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td class="table-warning">Dec 26th - Dec 29th</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td class="table-warning">Jan 2nd - Jan 5th</td>
                        </tr>
                        <tr class="table-danger">
                          <td>Grand Finals</td>
                          <td>Jan 9th - Jan 12th</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/*********************************
                   * Awards table
                   ****************************** */}
                  <div className="team-awards-info table-responsive">
                    <table class="table team-awards-info-table text-center table-primary">
                      <thead>
                        <tr>
                          <th>Award</th>
                          <th>$ USD</th>
                          <th>Team</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fan Favorite</td>
                          <td>$1,283</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Most Finishes</td>
                          <td>$2,567</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Rising Stars</td>
                          <td>$1,000</td>
                          <td>
                            <img
                              src={team7seaLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            7Sea Esports
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-lg-10">
                  {/*********************************
                   * Prize pool table
                   ****************************** */}
                  <div className="prize-pool-info table-responsive">
                    <h4> Prize Pool </h4>
                    <p>
                      ₹2,00,00,000 INR ( ≃ $261,290 USD ) are spread among the
                      teams as seen below:
                    </p>
                    <table class="table prize-pool-info-table text-center table-secondary">
                      <thead>
                        <tr>
                          <th>Place</th>
                          <th>$ USD</th>
                          <th>₹ INR</th>
                          <th>Qualifies To</th>
                          <th>Participant</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-danger">
                          <td>
                            <i
                              className="fa fa-medal"
                              style={{ color: "gold" }}
                            ></i>{" "}
                            1st
                          </td>
                          <td>$96,258.38</td>
                          <td>₹7,500,000</td>
                          <td>PMWI - 2023</td>
                          <td>Team SouL</td>
                        </tr>
                        <tr className="table-warning">
                          <td>
                            <i
                              className="fa fa-medal"
                              style={{ color: "silver" }}
                            ></i>
                            2nd
                          </td>
                          <td>$44,920.58</td>
                          <td>₹3,500,000</td>
                          <td> - </td>
                          <td>OREsports</td>
                        </tr>
                        <tr className="table-info">
                          <td>
                            <i
                              className="fa fa-medal"
                              style={{ color: "brown" }}
                            ></i>{" "}
                            3rd
                          </td>
                          <td>$25,668.90</td>
                          <td>₹2,000,000</td>
                          <td> - </td>
                          <td>Enigma Gaming</td>
                        </tr>
                        <tr className="table-primary">
                          <td>4th</td>
                          <td>$12,834.45</td>
                          <td>₹1,000,000</td>
                          <td> - </td>
                          <td>Team XO</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      (Converted USD prizes are based on the exchange rate on
                      Jan 12, 2023: ₹1 INR ≃ $0.0128 USD)
                    </p>
                  </div>
                </div>

                <div className="col-lg-11">
                  {/*********************************
                   * Players awards table
                   ****************************** */}
                  <div className="player-awards-info table-responsive">
                    <h4> Player Awards </h4>
                    <table class="table player-awards-info-table text-center table-primary">
                      <thead>
                        <tr>
                          <th>Award</th>
                          <th>$ USD</th>
                          <th>₹ INR</th>
                          <th>Player</th>
                          <th>Team</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>MVP</td>
                          <td>$3,209</td>
                          <td>₹2,50,000</td>
                          <td>Goblin</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Lone Survivor</td>
                          <td>$1,283</td>
                          <td>₹1,00,000</td>
                          <td>AkshaT</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Rampage Freak</td>
                          <td>$1,283</td>
                          <td>₹1,00,000</td>
                          <td>Goblin</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Fan Favorite Player</td>
                          <td>$1,283</td>
                          <td>₹1,000,00</td>
                          <td>Goblin</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Player of the Day 1</td>
                          <td>$1,283</td>
                          <td>₹1,000,00</td>
                          <td>EGGY</td>
                          <td>
                            <img
                              src={teamEnigmaLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Enigma Gaming
                          </td>
                        </tr>
                        <tr>
                          <td>Player of the Day 2</td>
                          <td>$1,283</td>
                          <td>₹1,000,00</td>
                          <td>Goblin</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Player of the Day 3</td>
                          <td>$1,283</td>
                          <td>₹1,000,00</td>
                          <td>Goblin</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                        <tr>
                          <td>Player of the Day 4</td>
                          <td>$1,283</td>
                          <td>₹1,000,00</td>
                          <td>Goblin</td>
                          <td>
                            <img
                              src={teamSoulLogo}
                              className="team-logo-img"
                              alt="team-logo-small"
                            />{" "}
                            Team SouL
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsportsTournamentDetails;
