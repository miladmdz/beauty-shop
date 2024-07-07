"use client";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BsPatchCheck } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Link from "next/link";
import ImageZoom from "./imageZoom";
import { ProductsResultType } from "@/components/Type/Products.type";
import { FaHeart } from "react-icons/fa";

type DetailsProps = {
  product: ProductsResultType;
};

function Details({ product }: DetailsProps) {
  const [color, setColor] = useState<string>("");
  const [count, setCount] = useState<string>("1");
  const [like, setLike] = useState<boolean>(false);

  const buyHandler = async () => {};

  const likeHandler = async () => {
    setLike((prev) => !prev);
  };
  return (
    <>
      <div className="container grid grid-cols-1 h-fit grid-rows-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-x-9">
        {/* rate and like for mobile */}
        <div className="flex h-fit md:hidden items-center justify-center mb-7 gap-x-5">
          <div className="flex items-center gap-x-5">
            <CiHeart />
            <p>10</p>
          </div>
          <div className="flex items-center gap-x-5 pr-2 border-r-[1px] border-gray-500/70">
            <TfiCommentAlt />
            <p>{product.comments?.length}</p>
          </div>
          <div className="flex items-center gap-x-5 pr-2 border-r-[1px] border-gray-500/70">
            <p>{product.rate.toFixed(1)}</p>
            <div className="flex child:text-yellow-500">
              {Array(product.rate)
                .fill(0)
                .map((item, index) => (
                  <IoStar key={index} />
                ))}
              {Array(5 - product.rate)
                .fill(0)
                .map((item, index) => (
                  <IoStarOutline key={index} />
                ))}
            </div>
          </div>
        </div>
        {/* image */}
        <ImageZoom img={product.img} />
        {/* details main */}
        <div className="flex w-full h-96 flex-col justify-between">
          {/* title */}
          <h1 className="text-primryCream text-2xl font-bold">
            {product.nameFa}
          </h1>
          {/* title en */}
          <p className="text-primryGray">{product.nameEn}</p>
          {/* rate comment like */}
          <div className="flex items-center justify-start gap-x-5">
            <div className="flex items-center gap-x-5">
              <CiHeart />
              <p>10</p>
            </div>
            <div className="flex items-center gap-x-5 pr-2 border-r-[1px] border-gray-500/70">
              <TfiCommentAlt />
              <p>{product.comments?.length}</p>
            </div>
            <div className="flex items-center gap-x-5 pr-2 border-r-[1px] border-gray-500/70">
              <p>{product.rate.toFixed(1)}</p>
              <div className="flex child:text-yellow-500">
                {Array(product.rate)
                  .fill(0)
                  .map((item, index) => (
                    <IoStar key={index} />
                  ))}
                {Array(5 - product.rate)
                  .fill(0)
                  .map((item, index) => (
                    <IoStarOutline key={index} />
                  ))}
              </div>
            </div>
          </div>
          {/* colors */}
          {product.color.length > 0 && product.color[0] && (
            <div className="flex items-start gap-1 flex-wrap w-full mt-5 fit">
              {product.color.map((item, index) => (
                <div
                  key={index}
                  className="w-10 h-10"
                  style={{ backgroundColor: `${item}` }}
                ></div>
              ))}
            </div>
          )}
          {/* property */}
          <div className="flex flex-col gap-y-5 h-44 mt-5">
            <h2 className="text-primryCream2 font-bold text-2xl">
              ویژگی های محصول
            </h2>
            <ul className="child:gap-y-4">
              {product.specific.map((item, index) => (
                <li key={index} className="flex items-center gap-x-2">
                  <span className="inline-block w-3 h-3 bg-primryCream2 rounded-full"></span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            {product.specific.length > 3 && (
              <div className="text-green-700 font-bold">+نمایش بیشتر</div>
            )}
          </div>
        </div>
        {/* price for desktop */}
        <div className="hidden md:flex flex-col md:col-span-2 xl:col-span-1 w-full justify-center items-start">
          {/* logo */}
          <div className="flex w-full justify-end">
            <img
              className="w-20 h-20"
              src="../images/Companies/Pipa.jpg"
              alt=""
            />
          </div>
          {/* price and color selector */}
          <div className="w-full">
            {/* price */}
            <div className="flex w-full items-center justify-between">
              <div className="gap-y-5">
                {product?.percent && (
                  <>
                    <h2 className="text-3xl font-bold">
                      {(
                        product.price -
                        product.price * (product.percent / 100)
                      ).toLocaleString()}{" "}
                      تومان
                    </h2>
                    <p className="text-primryGray line-through">
                      {product.price.toLocaleString()} تومان
                    </p>
                  </>
                )}
                {!product.percent && (
                  <p className="text-3xl font-bold">
                    {product.price.toLocaleString()} تومان
                  </p>
                )}
              </div>
              {product.percent && (
                <div className="text-white bg-primryCream2 py-3 px-2 rounded-md">
                  {product.percent}%
                </div>
              )}
            </div>
            {/* select color */}
            {product.color.length > 0 && product.color[0] && (
              <div className="w-full mt-8">
                <label htmlFor="color"></label>
                <select
                  className="w-full outline-none"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                  name=""
                  id="color"
                >
                  <option value="-1">انتخاب رنگ</option>
                  {product.color.map((item, index) => (
                    <option key={index} value={item}>
                      {item.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          {/* buttons */}
          <div className="w-full flex items-center justify-between mt-5">
            <div className="flex items-center justify-around bg-primryCream2 text-white w-full py-3 rounded-3xl">
              <button onClick={buyHandler} className="w-full text-center">
                افزودن به سبد خرید
              </button>
              <div className="flex items-center gap-x-1 lg:w-[10%] xl:w-[20%] border-r border-white pr-3">
                <select
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="bg-inherit outline-none child:text-black"
                  name=""
                  id=""
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div
              onClick={() => likeHandler()}
              className={`${
                like ? "text-red-600" : "text-gray-400/50"
              } text-3xl cursor-pointer transition-colors`}
            >
              <FaHeart />
            </div>
          </div>
          {/* orginalize */}
          <div className="mt-5">
            <Link href={"/"} className="flex items-center gap-x-2">
              <span>
                <BsPatchCheck className="text-green-700" />
              </span>
              <span>برند {product.brand}</span>
            </Link>
            <Link href={"/"} className="flex items-center gap-x-2">
              <span>
                <BsPatchCheck className="text-green-700" />
              </span>
              <span>ضمانت اصالت کالا</span>
            </Link>
            <Link href={"/"} className="flex items-center gap-x-2">
              <span>
                <BsPatchCheck className="text-green-700" />
              </span>
              <span>ارسال سریع</span>
            </Link>
            <Link href={"/"} className="flex items-center gap-x-2">
              <span>
                <BsPatchCheck className="text-green-700" />
              </span>
              <span>تضمین سلامت فیزیکی</span>
            </Link>
          </div>
        </div>
      </div>
      {/* price for mobile */}
      <div className="fixed md:hidden bottom-[64px] w-full h-16 bg-white z-40">
        <div className="container w-full flex items-center justify-between gap-x-2 sm:gap-x-28">
          {/* button */}
          <div className="flex items-center justify-around bg-primryCream2 text-white w-full py-2 mt-2 rounded-3xl">
            <div className="w-full text-center text-xs sm:text-base">
              افزودن به سبد خرید
            </div>
            <div className="flex items-center gap-x-1 lg:w-[10%] xl:w-[20%] border-r border-white pr-3">
              <select
                className="bg-inherit outline-none child:text-black"
                name=""
                id=""
                value={count}
                onChange={(e) => setCount(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          {/* price */}
          <div className="w-[150px] xs:w-[552px] sm:w-[40%]">
            <div className="flex flex-col w-full items-center justify-between">
              {product?.percent && (
                <>
                  <h2 className="text-xs xs:text-lg font-bold">
                    {(
                      product.price -
                      product.price * (product.percent / 100)
                    ).toLocaleString()}{" "}
                    تومان
                  </h2>
                  <p className="text-primryGray text-xs xs:text-sm line-through">
                    {product.price.toLocaleString()} تومان
                  </p>
                </>
              )}

              <div className="flex items-center justify-between gap-y-5 gap-x-2">
                {product.percent && (
                  <div className="text-white text-xxs xs:text-xs sm:text-sm bg-primryCream2 py-2 px-1 rounded-md">
                    {product.percent}%
                  </div>
                )}
                {!product.percent && (
                  <p className="text-xs xs:text-lg font-bold">
                    {product.price.toLocaleString()} تومان
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
