/*******************************************
 *
 * Streamer card vertical col-span-1
 *
 *******************************************/

export const StreamerCard = ({
  streamerName,
  streamerImageSrc,
  streamerOrg,
  platformOneYt,
  platformTwoInsta,
}) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="item">
          <img
            src={streamerImageSrc}
            alt={`${streamerName} profile`}
            title={`${streamerName}`}
          />
          <h4>
            {streamerName}
            <br />
            <span>{streamerOrg}</span>
          </h4>
          <ul>
            <li>
              <i className="fa-brands fa-youtube"></i> {platformOneYt}+
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i> {platformTwoInsta}+
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

/*******************************************
 *
 * Streamer card horizontal col-span-2
 *
 *******************************************/

export const StreamerCardHorizontal = ({
  streamerName,
  streamerImageSrc,
  streamerOrg,
  platformOneYt,
  platformTwoInsta,
}) => {
  return (
    <>
      {" "}
      <div className="col-lg-12">
        <div className="item">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="item">
                <img
                  src={streamerImageSrc}
                  alt={`${streamerName} profile`}
                  title={`${streamerName}`}
                />
                <h4>
                  {streamerName}
                  <br />
                  <span>{streamerOrg}</span>
                </h4>
                <ul>
                  <li>
                    <i className="fa-brands fa-youtube"></i> {platformOneYt}+
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>{" "}
                    {platformTwoInsta}+
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
