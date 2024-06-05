"use client";
import { Companies as CompaniesType } from "@/components/Type/Products.type";
import SwiperComp from "@/components/modules/Swiper/SwiperComp";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type CompaniesProps = {
  companies: CompaniesType[];
};

function Companies({ companies }: CompaniesProps) {

  const dynamicSlidePerview = () => {
    return {
      1280: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 3,
      },
      450: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 0,
      },
    };
  };

  return (
    <div className="flex container items-center justify-center h-[176px]">
      <SwiperComp
        companies={companies}
        showSlide={6}
        dynamicSlide={dynamicSlidePerview()}
        delay={2500}
        loop={true}
        circle={false}
      />
    </div>
  );
}

export default Companies;
