"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="mt-12 text-white">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/images/banner.jpg"
              style={{ width: "100%", height: "550px", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
              <div className="flex-2 flex flex-col w-[700px] items-stretch px-24 space-y-8">
                <input
                  type="text"
                  className="h-16 w-[350px] p-3 border border-gray-500"
                  placeholder="Search of Services"
                />
                <h1 className="text-white text-4xl font-bold">
                  Welcome to My Website
                </h1>
                <p>
                  A home should always possess comfortable and functional
                  features regardless of how grand or simple the style is. We
                  provide architectural and engineering assistance to get
                  approvals for your residential projects especially villa
                  design in Abu Dhabi. Our expert team will help you give shape
                  and build your dream home.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/banner.jpg"
              style={{ width: "100%", height: "550px", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
              <div className="flex-2 flex flex-col w-[700px] items-stretch px-24 space-y-8">
                <input
                  type="text"
                  className="h-16 border border-gray-500"
                  placeholder="Search of Services"
                />
                <h1 className="text-white text-4xl font-bold">
                  Welcome to My Website
                </h1>
                <p>
                  A home should always possess comfortable and functional
                  features regardless of how grand or simple the style is. We
                  provide architectural and engineering assistance to get
                  approvals for your residential projects especially villa
                  design in Abu Dhabi. Our expert team will help you give shape
                  and build your dream home.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
