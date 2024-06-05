"use client";
import React, { useEffect, useState } from "react";

import { ProductsType } from "@/components/Type/Products.type";
import ProductsCream from "@/components/modules/ProductsCream/ProductsCream";

type ProductsProps = {
  products: ProductsType[];
  title:string
};

function SuggestProducts({ products,title }: ProductsProps) {
  

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
      title={title}
      link="/"
      showSlide={4}
      dynamicSlide={dynamicSlidePerview()}
      width="w-[100%]"
      rotate={false}
      delay={2500}
    />
  );
}

export default SuggestProducts;
