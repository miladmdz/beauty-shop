import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsPatchCheck } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import ImageZoom from "./imageZoom";

function Details() {
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
            <p>1</p>
          </div>
          <div className="flex items-center gap-x-5 pr-2 border-r-[1px] border-gray-500/70">
            <p>5.0</p>
            <div className="flex child:text-yellow-500">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
          </div>
        </div>
        {/* image */}
        <ImageZoom />
        {/* details main */}
        <div className="flex w-full h-96 flex-col justify-between">
          {/* title */}
          <h1 className="text-primryCream text-2xl font-bold">
            رژ لب مات انوی پیپا
          </h1>
          {/* title en */}
          <p className="text-primryGray">Pippa of London Envy Lipstick</p>
          {/* rate comment like */}
          <div className="flex items-center justify-start gap-x-5">
            <div className="flex items-center gap-x-5">
              <CiHeart />
              <p>10</p>
            </div>
            <div className="flex items-center gap-x-5 pr-2 border-r-[1px] border-gray-500/70">
              <TfiCommentAlt />
              <p>1</p>
            </div>
            <div className="flex items-center gap-x-5 pr-2 border-r-[1px] border-gray-500/70">
              <p>5.0</p>
              <div className="flex child:text-yellow-500">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
            </div>
          </div>
          {/* colors */}
          <div className="flex items-start gap-1 flex-wrap w-full mt-5 fit">
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
            <div className="w-10 h-10 bg-red-600"></div>
          </div>
          {/* property */}
          <div className="flex flex-col justify-between h-44 mt-5">
            <h2 className="text-primryCream2 font-bold text-2xl">
              ویژگی های محصول
            </h2>
            <ul className="child:gap-y-4">
              <li className="flex items-center gap-x-2">
                <span className="inline-block w-3 h-3 bg-primryCream2 rounded-full"></span>
                <p>دارای رنگدانه های غنی</p>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="inline-block w-3 h-3 bg-primryCream2 rounded-full"></span>
                <p>دارای بافت نرم</p>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="inline-block w-3 h-3 bg-primryCream2 rounded-full"></span>
                <p>حاوی ویتامین E</p>
              </li>
            </ul>
            <div className="text-green-700 font-bold">+نمایش بیشتر</div>
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
                <h2 className="text-3xl font-bold">582,250 تومان</h2>
                <p className="text-primryGray line-through">685,000 تومان</p>
              </div>
              <div className="text-white bg-primryCream2 py-3 px-2 rounded-md">
                15%
              </div>
            </div>
            {/* select color */}
            <div className="w-full mt-8">
              <label htmlFor="color"></label>
              <select className="w-full outline-none" name="" id="color">
                <option value="">انتخاب رنگ</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="pink">pink</option>
              </select>
            </div>
          </div>
          {/* buttons */}
          <div className="w-full flex items-center justify-between mt-5">
            <div className="flex items-center justify-around bg-primryCream2 text-white w-full py-3 rounded-3xl">
              <div className="w-full text-center">افزودن به سبد خرید</div>
              <div className="flex items-center gap-x-1 lg:w-[10%] xl:w-[20%] border-r border-white pr-3">
                <select
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
            <div className="text-4xl">
              <CiHeart />
            </div>
          </div>
          {/* orginalize */}
          <div className="mt-5">
            <Link href={"/"} className="flex items-center gap-x-2">
              <span>
                <BsPatchCheck className="text-green-700" />
              </span>
              <span>برند PIPPA</span>
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
          <div className="flex items-center justify-around bg-primryCream2 text-white w-full py-2 rounded-3xl">
            <div className="w-full text-center text-xs sm:text-base">افزودن به سبد خرید</div>
            <div className="flex items-center gap-x-1 lg:w-[10%] xl:w-[20%] border-r border-white pr-3">
              <select
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
          {/* price */}
          <div className="w-[150px] xs:w-[552px] sm:w-[40%]">
            <div className="flex flex-col w-full items-center justify-between">
              <h2 className="text-xs xs:text-lg font-bold">582,250 تومان</h2>
              <div className="flex items-center justify-between gap-y-5 gap-x-2">
                <div className="text-white text-xxs xs:text-xs sm:text-sm bg-primryCream2 py-2 px-1 rounded-md">
                  15%
                </div>
                <p className="text-primryGray text-xs xs:text-sm line-through">
                  685,000 تومان
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
