import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperInfo } from "../constants";
import { Button } from "../ui/button";
import SliderButton from "../sliderButton/sliderButton";
import SliderCard from "../sliderCard/sliderCard";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwiperInfo.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`slider ${item.id !== 1 ? `slider${item.id}` : ""}`}
          >
            <div className="container-fluid">
              <h2 className="swiper-subtitle">{item.subtitle}</h2>
              <h1 className="swiper-title">{item.title}</h1>
              <SliderButton />
              <SliderCard item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
  debugger;
}
