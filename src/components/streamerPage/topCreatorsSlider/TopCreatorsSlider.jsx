import React from "react";

// styles
import "./topCreatorsSlider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Mousewheel } from "swiper";

/*****************************************
 *
 * Top creators Slider
 *
 ****************************************/

const TopCreatorsSlider = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {streamDetails.map((stream, index) => (
          <SwiperSlide key={index}>
            <div class="item">
              <div class="thumb">
                <img src={stream.streamersImage} alt="" />
                <div class="hover-effect">
                  <a href={stream.streamersInsta}>Instagram</a>
                </div>
              </div>

              <h4>
                {stream.streamersGame}
                <br />
              </h4>
              <span>{stream.streamerRealName}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopCreatorsSlider;
