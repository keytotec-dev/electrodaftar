import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slid1 from '../../public/images/mainslider/slid1.jpg';
import slid2 from '../../public/images/mainslider/slid2.jpg';
import slid3 from '../../public/images/mainslider/slid3.jpg';
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
        <SlidContent image={slid1}/>
        </SwiperSlide>
        <SwiperSlide>
        <SlidContent image={slid2}/>
        </SwiperSlide>
        <SwiperSlide>
        <SlidContent image={slid3}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}