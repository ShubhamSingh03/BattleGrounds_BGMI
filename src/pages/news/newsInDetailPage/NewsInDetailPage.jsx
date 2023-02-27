import React, { useEffect, useState } from "react";

// styles
import "./newsInDetail.css";

// markdown-to-jsx
import Markdown from "markdown-to-jsx";

// react-router-dom
import { Link, useParams } from "react-router-dom";

// data
import { newsDetailsData } from "../../../data/newsDetailsData";

// common components
import HelmetConsumer from "../../../components/common/HelmetConsumer";
import Loader from "../../../components/common/loader/Loader";

// components
import PageNotFound from "../../pageNotFound/PageNotFound";

/*************************************
 *
 * News in detail page
 *
 ************************************/

const NewsInDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [blog, setCurrentBlog] = useState(null);

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      const foundBlog = newsDetailsData.find(
        (blog) => blog.id === id.toString()
      );
      if (foundBlog) {
        setCurrentBlog(foundBlog);
        try {
          const markdownFile = await import(
            `../../../assets/markdown-files/${foundBlog.newsInDetail}`
          );
          const response = await fetch(markdownFile.default);
          const text = await response.text();
          setPost(text);
        } catch (error) {
          console.error(`Error fetching markdown file: ${error}`);
        }
      }
    };
    fetchMarkdownFile();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {blog ? (
        <>
          <Loader />
          <HelmetConsumer pageTitle={`${blog.newsHeading}`} />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-content">
                  <Link className="news-goBack" to="/news">
                    <span> &#8592;</span>{" "}
                    <span title="Go-back to News"> Go Back</span>
                  </Link>
                  <h1 className="news-heading">{blog.newsHeading}</h1>
                  <div
                    className="main-banner"
                    style={{
                      background: `url(${blog.newsImageSrc})`,
                      backgroundPosition: "bottom center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="news-details">
                    <p className="news-date">
                      Published: {blog.newsPublishDate}
                    </p>
                    <p className="news-tag">Tag: {blog.newsTag}</p>
                  </div>
                  <div className="news-in-detail">
                    <p> Dear BATTLEGROUNDS MOBILE INDIA fans,</p>
                    <Markdown>{post}</Markdown>
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="main-button">
                      <Link to="/news">Back to News</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default NewsInDetailPage;
