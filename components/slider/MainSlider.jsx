import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slid1 from '../../public/images/mainslider/person1.jpg'
// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/pagination";

import "./MainSliderStyles.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import SlidContent from "./SlideContent";
export default function MainSlider() {
  return (
    <div className="">
      <Swiper
      style={{
        width:"100%",
        float:'right',
      }}
        spaceBetween={25}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination , Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <SlidContent image="https://thecaferobot.com/store/pub/media/logo/stores/1/cafe-robot-logo-new-color-dark-small.png"/>
        </SwiperSlide>
        <SwiperSlide>
        <SlidContent image="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}