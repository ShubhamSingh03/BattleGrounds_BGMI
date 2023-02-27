import React, { useState, useEffect } from "react";

/*******************************************
 *
 * Back to top component
 *
 ******************************************/
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  }, []);

  /*******************************************
   *
   * Back to top component styles
   *
   ******************************************/
  const styles = {
    position: "fixed",
    right: "22px",
    bottom: "16px",
    cursor: "pointer",
    fontSize: "36px",
    color: "rgba( 255, 255, 255, 0.2 )",
    backdropFilter: "blur( 4.5px )",
  };

  return (
    <>
      {isVisible && (
        <i
          style={styles}
          title="Go to Top"
          id="topBtn"
          className="fa-solid fa-circle-arrow-up"
          onClick={() => window.scrollTo(0, 0)}
        ></i>
      )}
    </>
  );
};

export default BackToTop;
