import { useState, useEffect } from "react";

// react-router
import { Link } from "react-router-dom";

// data
import { newsDetailsData } from "../../data/newsDetailsData";

// favicons
import newsPageFavicon from "../../assets/favicons/news-page-favicon.ico";

// common components
import HelmetConsumer from "../../components/common/HelmetConsumer";
import HeadingSection from "../../components/common/HeadingSection";
import Loader from "../../components/common/loader/Loader";

// components
import NewsCard from "../../components/newsPage/newsCard/NewsCard";

const postOnInitialLoad = 6;
const postOnLoadMore = 3;

/*************************************
 *
 * News page
 *
 ************************************/

const NewsPage = () => {
  const [morePosts, setMorePosts] = useState(postOnInitialLoad);

  const handleMorePosts = () => {
    setMorePosts((prevState) => prevState + postOnLoadMore);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetConsumer
        pageTitle={"News | Battlegrounds Mobile India"}
        pageFavicon={newsPageFavicon}
      />
      <Loader />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="main-profile">
                  <HeadingSection
                    firstTitle={"Game Related"}
                    secondTitle={" News"}
                  />
                  <div className="row">
                    <div className="news-container">
                      {newsDetailsData
                        .slice(0, morePosts)
                        ?.map((news, index) => (
                          <NewsCard
                            key={index}
                            id={news.id}
                            newsImageSrc={news.newsImageSrc}
                            newsTag={news.newsTag}
                            newsPublishDate={news.newsPublishDate}
                            newsHeading={news.newsHeading}
                            newsSummary={news.newsSummary}
                          />
                        ))}
                    </div>
                  </div>
                  {morePosts < newsDetailsData.length && (
                    <div className="col-lg-12 text-center mt-4">
                      <div className="main-button">
                        <Link onClick={handleMorePosts}>Load More!</Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
