"use client";
import React from "react";
import Link from "next/link";
import SpecialBox from "../SpecialBox/SpecialBox";
import ArticleBox from "../ArticleBox/ArticleBox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductNewBox from "../ProductNewBox/ProductNewBox";

import {
  ArticlesType,
  Companies,
  ProductsType,
} from "@/components/Type/Products.type";

type ProductsProps = {
  products1?: ProductsType[];
  products2?: ProductsType[];
  products3?: ProductsType[];
  companies?: Companies[];
  Articles?: ArticlesType[];
  showSlide: number;
  dynamicSlide: object;
  delay: number;
  circle: boolean;
  loop: boolean;
};

function SwiperComp({
  products1,
  products2,
  products3,
  companies,
  Articles,
  showSlide,
  dynamicSlide,
  delay,
  circle,
  loop,
}: ProductsProps) {
  return (
    <>
      <Swiper
        autoplay={{ delay: delay, disableOnInteraction: false }}
        loop={loop}
        updateOnWindowResize={true}
        slidesPerView={showSlide}
        breakpoints={{...dynamicSlide}}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className={`mySwiper ${
          circle ? "special-swiper" : "special-swiper-news"
        }`}
      >
        {typeof products1 === "object" &&
          products1.map((product) => (
            <SwiperSlide key={product.id}>
              <SpecialBox {...product} />
            </SwiperSlide>
          ))}
        {typeof products2 === "object" &&
          products2.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductNewBox {...product} />
            </SwiperSlide>
          ))}
        {typeof products3 === "object" &&
          products3.map((product) => (
            <SwiperSlide key={product.id}>
              <SpecialBox {...product} />
            </SwiperSlide>
          ))}
        {typeof Articles === "object" &&
          Articles.map((articles) => (
            <SwiperSlide key={articles.id} className="child:w-full child:sm:w-44 child:lg:w-[250px]">
              <ArticleBox {...articles} />
            </SwiperSlide>
          ))}
        {typeof companies === "object" &&
          companies.map((company) => (
            <SwiperSlide key={company.id}>
              <Link
                className="flex items-center justify-center h-[150px]"
                href={company.link}
              >
                <img className="w-20" src={company.img} alt="" />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default SwiperComp;
