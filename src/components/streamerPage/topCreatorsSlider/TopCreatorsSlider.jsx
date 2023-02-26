import React from "react";

// styles
import "./topCreatorsSlider.css";

// data
import { topCreatorsData } from "../../../data/stream&streamersData";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Mousewheel } from "swiper";

/*****************************************
 *
 * Top creators Slider here
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
        {topCreatorsData.map((creator, index) => (
          <SwiperSlide key={index}>
            <div class="item">
              <div class="thumb">
                <img
                  src={creator.creatorImage}
                  alt={`${creator.creatorGameName}-profile`}
                />
                <div class="hover-effect">
                  <a href={creator.creatorInstaLink}>Instagram</a>
                </div>
              </div>
              <h4>
                {creator.creatorGameName}
                <br />
              </h4>
              <span>{creator.creatorRealName}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopCreatorsSlider;
