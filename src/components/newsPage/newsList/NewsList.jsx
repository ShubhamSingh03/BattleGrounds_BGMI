import React from "react";

// styles
import "./newsList.css";

// react-router
import { Link } from "react-router-dom";

// common component
import HeadingSection from "../../common/HeadingSection";

// components
import NewsCard from "../newsCard/NewsCard";

/********************************
 *
 * News list component
 *
 *******************************/

const NewsList = (props) => {
  const newsDetails = props.newsDetailsData
    ?.slice(0, 3)
    .map((news, index) => (
      <NewsCard
        key={index}
        id={news.id}
        newsImageSrc={news.newsImageSrc}
        newsTag={news.newsTag}
        newsTagColor={news.newsTagColor}
        newsPublishDate={news.newsPublishDate}
        newsHeading={news.newsHeading}
        newsSummary={news.newsSummary}
      />
    ));

  return (
    <>
      <div className="most-popular">
        <HeadingSection firstTitle={"Recent"} secondTitle={" News"} />
        <div className="row">
          <div className="news-container">{newsDetails}</div>
        </div>

        <div className="col-lg-12">
          <div className="main-button">
            <Link to="/news" title="Load More">
              Load More!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
