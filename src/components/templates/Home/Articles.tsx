"use client";
import { ArticlesType } from "@/components/Type/Products.type";
import SwiperComp from "@/components/modules/Swiper/SwiperComp";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type ArticlesProps = {
  articles: ArticlesType[];
};

function Articles({ articles }: ArticlesProps) {

  const dynamicSlidePerview = () => {
    return {
      1280: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      0:{
        slidesPerView: 1,
      }
    };
  };

  return (
    <>
      <div className="mt-8 h-[550px] sm:h-[450px]">
        <div className="relative container">
          <div className="flex items-center justify-center w-full twoLine mt-8">
            <h2 className="font-semibold w-fit text-base text-center bg-white px-3 z-10">
              مقالات کاج شاپ
            </h2>
          </div>
        </div>
        <div className="container mt-16 gap-x-2 h-[420px] xs:h-[450px] sm:h-[370px] lg:h-[400px] flex flex-wrap">
          <SwiperComp
            Articles={articles}
            showSlide={4}
            dynamicSlide={dynamicSlidePerview()}
            delay={2500}
            loop={true}
            circle={false}
          />
        </div>
      </div>
    </>
  );
}

export default Articles;
