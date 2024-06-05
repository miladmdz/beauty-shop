"use client";
import { ProductsType } from "@/components/Type/Products.type";
import SwiperComp from "@/components/modules/Swiper/SwiperComp";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

type SpecialProps = {
  products: ProductsType[];
};

function Special({ products }: SpecialProps) {
  const dynamicSlidePerview = () => {
    return {
      1100: {
        slidesPerView: 3,
      },
      510: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    };
  };

  return (
    <>
      <SwiperComp
        products1={products}
        showSlide={3}
        dynamicSlide={dynamicSlidePerview()}
        delay={2500}
        loop={true}
        circle={true}
      />
    </>
  );
}

export default Special;
