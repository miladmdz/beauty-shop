"use client";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function CalculateComp() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="w-full xl:w-[350px] pb-5 mt-4 xl:mt-0 pr-8">
      <ul className="list-disc gap-y-2 text-sm xs:text-base">
        <li>10% سبد خرید به مبلغ نهایی اضافه خواهد شد. (مالیات ارزش افزوده)</li>
        <li>به شما اطمینان می دهیم، تمامی محصولات کاج اصل هستند.</li>
        <li>مدت زمان رسیدن از زمان تحویل به پست، 1 تا 8 روز است.</li>
        <li>امکان تجمیع و ارسال هم زمان چند سفارش وجود ندارد.</li>
      </ul>
      <div className="fixed md:relative right-0 left-0 bottom-[64px] md:bottom-0 py-2 px-1 md:px-0 md:py-0 bg-white w-full md:flex flex-col gap-y-3 mt-8 z-50">
        <div
          className={`${
            toggleMenu ? " mb-[160px]" : "mb-0"
          } flex w-full items-center justify-between border border-gray-500/50 rounded-md px-3 py-2 transition-all duration-500`}
        >
          <div className="flex items-center gap-x-1">
            <div
              onClick={() => setToggleMenu((prev) => !prev)}
              className="md:hidden bg-gray-500/50 rounded-full cursor-pointer"
            >
              <IoIosArrowUp
                className={`${
                  toggleMenu ? "rotate-180" : ""
                } text-lg transition-all duration-500`}
              />
            </div>
            مبلغ قابل پرداخت
          </div>
          <div className="font-bold">961,180 تومان</div>
        </div>
        <div
          className={`absolute ${
            toggleMenu ? "bottom-10" : "-bottom-[1000px]"
          } w-full px-3 transition-all duration-500`}
        >
          <div className="flex w-full items-center justify-between border-b border-gray-400/50 py-2 ">
            <div>مبلغ کل</div>
            <div>1,028,000 تومان</div>
          </div>
          <div className="flex w-full items-center justify-between border-b border-gray-400/50 py-2 ">
            <div>تخفیف</div>
            <div className="text-primryGreen2">154,200 تومان</div>
          </div>
          <div className="flex w-full items-center justify-between border-b border-gray-400/50 py-2 ">
            <div>هزینه ارسال</div>
            <div>فعلا محاسبه نشده</div>
          </div>
          <div className="flex w-full items-center justify-between py-2">
            <div>ارزش افزوده</div>
            <div>87,380 تومان</div>
          </div>
        </div>
        <button className="w-full py-2 text-black font-bold flex items-center justify-center bg-primryCream2 rounded-md">
          ادامه و تکمیل سفارش
        </button>
      </div>
    </div>
  );
}

export default CalculateComp;
