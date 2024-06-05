"use client";
import React, { useEffect, useState } from "react";

import { ProductsType } from "@/components/Type/Products.type";
import ProductsCream from "@/components/modules/ProductsCream/ProductsCream";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type ProductsProps = {
  products: ProductsType[];
};

function NewsProducts({ products }: ProductsProps) {
  

  const dynamicSlidePerview = () => {
    return {
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    };
  };

  return (
    <ProductsCream
      products={products}
      title="جدید ترین ها"
      link="/"
      showSlide={4}
      dynamicSlide={dynamicSlidePerview()}
      width="w-[100%]"
      rotate={false}
      delay={2500}
    />
  );
}

export default NewsProducts;
