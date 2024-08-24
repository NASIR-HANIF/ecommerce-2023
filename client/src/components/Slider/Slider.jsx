import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="images/a.webp" alt="a.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/b.webp" alt="b.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/c.webp" alt="c.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
