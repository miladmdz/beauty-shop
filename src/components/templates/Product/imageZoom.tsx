"use client";
import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { CiHeart, CiShare2 } from "react-icons/ci";

function ImageZoom() {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-center gap-x-7 child:cursor-pointer child:text-xl">
        <BsArrowsFullscreen className="hidden md:block" />
        <CiShare2 />
        <CiHeart className="md:hidden" />
      </div>
      <div>
        <img
          className="md:w-[300px] md:h-[300px]"
          src="../images/Products/Capture1-1.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-start gap-x-7">
        <img
          className="w-[100px] h-[100px]"
          src="../images/Products/Capture1-1.jpg"
          alt=""
        />
        <img
          className="w-[100px] h-[100px]"
          src="../images/Products/Capture1-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageZoom;
