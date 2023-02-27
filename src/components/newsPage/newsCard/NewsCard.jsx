import React from "react";

// styles
import "./newsCard.css";

// react-router
import { Link } from "react-router-dom";

/********************************
 *
 * News card component
 *
 *******************************/

const NewsCard = ({
  id,
  newsImageSrc,
  newsTag,
  newsTagColor,
  newsPublishDate,
  newsHeading,
  newsSummary,
}) => {
  return (
    <>
      <Link
        className="card"
        to={`/news/${id}`}
        title={`${newsHeading}-${newsTag}-news`}
      >
        <div className="card__header">
          <img
            src={newsImageSrc}
            alt={`${newsHeading} news`}
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <span className={`tag ${newsTagColor}`}>{newsTag}</span>
          <span className="date-name-tag">{newsPublishDate}</span>
          <h4>{newsHeading}</h4>
          <p>{newsSummary}</p>
        </div>

        <Link to={`/news/${id}`} className="read-more-button text-center">
          Read More! <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </Link>
    </>
  );
};

export default NewsCard;
