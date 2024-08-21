"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import meetjohnny from "@/asset/materials/meetjohnny.png";
import ballersbar from "@/asset/materials/ballersbar.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://meetjohnny.com" target="_blank">
            <Image src={meetjohnny} alt="showcase_1" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://www.youtube.com/@ballersbarbasketballclips"
            target="_blank"
          >
            <Image src={ballersbar} alt="showcase_2" />
          </a>
        </SwiperSlide>

        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}
