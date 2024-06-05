"use client";
import SwiperComp from "@/components/modules/Swiper/SwiperComp";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SpecialMain() {
  let products = [
    {
      id: 1,
      title: "شوینده پوست خشک و حساس ام کیو",
      desc: "",
      link: "/",
      color: "bg-primryOcean2/45",
      img: "./images/SpecilaMain/Capture1.jpg",
    },
    {
      id: 2,
      title: "روغن ورونیک (برای پوست و مو)",
      desc: "",
      link: "/",
      color: "bg-primryYellow/45",
      img: "./images/SpecilaMain/Capture2.jpg",
    },
    {
      id: 3,
      title: "کرم آبرسان ام کیو",
      desc: "",
      link: "/",
      color: "bg-white",
      img: "./images/SpecilaMain/Capture3.jpg",
    },
  ];


  const dynamicSlidePerview = () => {
    return {
      1100: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    };
  };

  return (
    <div className="container">
      <p></p>
      <SwiperComp
        dynamicSlide={dynamicSlidePerview()}
        products3={products}
        showSlide={3}
        delay={2500}
        loop={true}
        circle={true}
      />
    </div>
  );
}

export default SpecialMain;
