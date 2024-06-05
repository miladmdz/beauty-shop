import React from "react";
import { MdSupportAgent } from "react-icons/md";
import {
  TbTruckDelivery,
  TbCreditCardPay,
  TbTruckReturn,
} from "react-icons/tb";
import { SiWorldhealthorganization } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";

function BannerServices() {
  return (
    <div className="container grid grid-cols-2 grid-rows-3 gap-3 md:gap-0 md:row md:grid-cols-3 md:grid-rows-2 xl:grid-cols-6 xl:grid-rows-1 h-[270px] md:h-[125px] xl:h-[85px] mb-20 bg-white xl:bg-primryCream2">
      <div className="flex w-full xl:w-[90%] gap-x-3 h-full items-center bg-primryCream2">
        <span className="text-4xl text-white">
          <SiWorldhealthorganization />
        </span>
        <span className="text-xs font-bold text-white">
          <p>ضمانت اصالت محصول</p>
          <p>تمامی محصولات اصل هستند</p>
        </span>
      </div>
      <div className="flex w-full xl:w-[90%] gap-x-3  h-full items-center bg-primryCream2">
        <span className="text-4xl text-white">
          <TbTruckDelivery />
        </span>
        <span className="text-xs font-bold text-white">
          <p>ارسال سریع</p>
          <p>تحویل پست روز بعد سفارش</p>
        </span>
      </div>
      <div className="flex w-full xl:w-[90%] gap-x-3  h-full items-center bg-primryCream2">
        <span className="text-4xl text-white">
          <TbCreditCardPay />
        </span>
        <span className="text-xs font-bold text-white">
          <p>پرداخت امن</p>
          <p>درگاه پرداخت با امنیت بالا</p>
        </span>
      </div>
      <div className="flex w-full xl:w-[90%] gap-x-3  h-full items-center bg-primryCream2">
        <span className="text-4xl text-white">
          <MdSupportAgent />
        </span>
        <span className="text-xs font-bold text-white">
          <p>مشاوره وپشتیبانی </p>
          <p>مشاوره خرید و پشتیبانی آنلاین</p>
        </span>
      </div>
      <div className="flex w-full xl:w-[90%] gap-x-3  h-full items-center bg-primryCream2">
        <span className="text-4xl text-white">
          <TbTruckReturn />
        </span>
        <span className="text-xs font-bold text-white">
          <p>تضمین سلامت محصول</p>
          <p>تعویض محصول در صورت خرابی</p>
        </span>
      </div>
      <div className="flex w-full xl:w-[90%] gap-x-3  h-full items-center bg-primryCream2">
        <span className="text-4xl text-white">
          <FaRegHeart />
        </span>
        <span className="text-xs font-bold text-white">
          <p>باشگاه مشتریان(بزودی)</p>
          <p>ویژه مشتریان وفادار</p>
        </span>
      </div>
    </div>
  );
}

export default BannerServices;
