import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./offerSlider.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./offerSlider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import OfferSliderCard from "../offerSliderCard/offerSliderCard";
import { offerCardInfo } from "../constants";

export default function OfferSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper offerSwiper"
      >
        {offerCardInfo.map((item) => (
          <SwiperSlide key={item.id} className="offer-slide">
            <OfferSliderCard
              id={item.id}
              title={item.title}
              people={item.people}
              price={item.price}
            />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
