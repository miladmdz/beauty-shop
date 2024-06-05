"use client";
import { ProductsType } from "@/components/Type/Products.type";
import React, { useEffect, useState } from "react";
import ProductsCream from "@/components/modules/ProductsCream/ProductsCream";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type ProductsProps = {
  products: ProductsType[];
};

function Favandmostsell({ products }: ProductsProps) {


  const dynamicSlidePerview = () => {
    return {
      768: {
        slidesPerView: 2,
      },
      540: {
        slidesPerView: 3,
      },
      0:{
        slidesPerView: 2,
      }
    };
  };


  return (
    <div className="flex flex-col md:flex-row">
      <ProductsCream
        products={products}
        title="پرفروش ترین ها"
        link="/"
        showSlide={2}
        dynamicSlide={dynamicSlidePerview()}
        width="w-full md:w-[45%]"
        rotate={true}
        delay={2000}
      />
      <ProductsCream
        products={products}
        title="محبوب ترین ها"
        link="/"
        showSlide={2}
        dynamicSlide={dynamicSlidePerview()}
        width="w-full md:w-[45%]"
        rotate={false}
        delay={2500}
      />
    </div>
  );
}

export default Favandmostsell;
