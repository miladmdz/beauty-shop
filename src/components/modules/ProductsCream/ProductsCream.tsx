import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { ProductsType } from "@/components/Type/Products.type";
import SwiperComp from "../Swiper/SwiperComp";

type ProductsProps = {
  products: ProductsType[];
  title: string;
  link: string;
  showSlide: number;
  dynamicSlide:object
  width: string;
  rotate: boolean;
  delay: number;
};

function ProductsCream({
  products,
  title,
  link,
  showSlide,
  dynamicSlide,
  width,
  rotate,
  delay,
}: ProductsProps) {
  return (
    <div
      className={`container ${
        rotate ? "rotateY" : ""
      } ${width} h-[550px] relative mt-16 rotate-y`}
    >
      {/* title */}
      <div className="w-full flex items-center justify-between ">
        <div className=" w-full flex justify-start xs:justify-center z-30">
          <h2
            className={`flex ${
              rotate ? "rotateY" : ""
            } justify-center font-bold text-xs xs:text-xl w-[120px] h-8 xs:w-[150px] bg-white`}
          >
            {title}
          </h2>
        </div>
      </div>
      {/* link */}
      <div
        className={`flex ${
          rotate ? "rotateY justify-start" : "justify-end"
        } absolute top-0 left-0 items-start xs:justify-start xs:px-4 w-[90px] h-[90px] sm:w-[140px] sm:h-[90px] bg-white z-10`}
      >
        <Link
          href={link}
          className={`flex ${
            rotate ? "flex-row-reverse" : ""
          } items-center text-xxs sm:text-base justify-center cursor-pointer z-10`}
        >
          <p className="w-[60px] sm:w-[100px]">مشاهده بیشتر</p>
          <span>
            <IoIosArrowRoundBack
              className={`text-base sm:text-xl ${rotate ? "rotateY" : ""}`}
            />
          </span>
        </Link>
      </div>
      {/* box border */}
      <div className="box-news w-[90%] h-[480px]" />
      {/* swiper */}
      <div className={`relative ${rotate ? "rotateY" : ""} flex mt-12 z-20`}>
        <SwiperComp
          products2={products}
          showSlide={showSlide}
          dynamicSlide={dynamicSlide}
          delay={delay}
          loop={true}
          circle={false}
        />
      </div>
    </div>
  );
}

export default ProductsCream;
