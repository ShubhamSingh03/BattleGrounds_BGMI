import React, { useEffect } from "react";

// styles
import "./loader.css";

// jquery
import $ from "jquery";

/*************************************
 *
 * Loader component on page Load
 *
 ************************************/

const Loader = () => {
  useEffect(() => {
    // Page loading animation
    $(window).on("load", function () {
      $("#js-preloader").addClass("loaded");
    });

    // Fade out and hide preloader element
    $("#js-preloader").animate(
      {
        opacity: ".8",
      },
      800,
      function () {
        setTimeout(function () {
          $("#js-preloader").css("visibility", "hidden").fadeOut();
        }, 400);
      }
    );
  }, []);

  return (
    <>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
