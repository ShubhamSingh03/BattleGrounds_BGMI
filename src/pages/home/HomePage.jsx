//css
import "./homePage.css";

// imports
import { Link, useLocation } from "react-router-dom";
import { gameDetailsData } from "../../config/gameDetailsData";

// components
import GameDetailsItem from "../../components/gameDetailsItem/GameDetailsItem";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="main-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h6>MADE BY SHUBHAM SINGH</h6>
                      <h4>
                        <em>INDIA</em> KA APNA BATTLEGROUNDS
                      </h4>
                      <div className="main-button">
                        <a href="/browse">Browse Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gaming Library component here */}

              <div className="gaming-library">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Other Games</em> Available
                    </h4>
                  </div>
                  {gameDetailsData?.slice(0, 4)?.map((game, index) => (
                    <GameDetailsItem
                      key={index}
                      gameImage={game.gameImage}
                      gameName={game.gameName}
                      gameCountry={game.gameCountry}
                      launchDate={game.launchDate}
                      totalDownloads={game.totalDownloads}
                      publisher={game.publisher}
                      downloadLink={game.downloadLink}
                    />
                  ))}
                </div>
                {location.pathname === "/" ? (
                  <div className="col-lg-12">
                    <div className="main-button">
                      <Link to="/about">View all Games Available</Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
