"use client";
import Link from "next/link";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Map from "@/components/modules/Map/Map";

function Details() {
  return (
    <div className="container">
      {/* part top */}
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-[50%]">
          <img src="./images/etc/Capture1.jpg" alt="support image" />
          <div className="flex justify-center">
            <p className="w-[70%] text-base xs:text-lg font-bold text-center">
              برای ارتباط با پشتیبانی تیکت ارسال کنید تا کارشناسان ما در اسرع
              وقت مشکل شما رو برطرف کنند
            </p>
          </div>
          <div className="flex justify-center my-5">
            <button className="bg-primryGreen text-white text-lg py-2 w-[80%] rounded-lg">
              ارسال تیکت
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <h1 className="text-xl xs:text-2xl text-primryCream2 font-bold">
            راه های ارتباط با ما
          </h1>
          <a
            className="flex items-center gap-x-2 text-primryGray text-base xs:text-lg my-2"
            href="tel:09333521189"
          >
            <span className="text-xl xs:text-2xl">
              <LuPhone />
            </span>
            تماس با پشتیبانی : 09333521189 (از 10 الی 14 روز غیر تعطیل) یا تیکت
          </a>
          <a
            className="flex items-center gap-x-2 text-primryGray text-sm xs:text-lg my-2"
            href="mailto:miladmahmoudzadeh5@gmail.com"
          >
            <span className="text-xl xs:text-2xl">
              <CiMail />
            </span>
            ایمیل پشتیبانی : miladmahmoudzadeh5@gmail.com
          </a>
          <p className="flex items-center gap-x-2 text-primryGray text-base xs:text-lg my-2">
            <span className="text-xl xs:text-2xl">
              <CiLocationOn />
            </span>
            آدرس فروشگاه مرکزی : اردبیل، شهرک آزادی، ابتدای خیابان آذربایجان،
            نبش بلوک یکم، پلاک 5
          </p>
          <ul className="list-disc mt-5 child:text-sm child:xs:text-base child:mr-5 child:my-2">
            <li>
              برای مشاوره در مورد محصولات لطفا از طریق اینستاگرام یا تیکت
              استفاده نمایید.
            </li>
            <li>
              کد رهگیری معمولا 24 ساعت بعد از ارسال در پنل کاربری قابل مشاهده
              است.
            </li>
            <li>
              در صورت بروز مشکل در سفارش، لطفا فقط از طریق گذاشتن تیکت در قسمت
              پنل کاربری اقدام نمایید.
            </li>
          </ul>
          <p className="text-base xs:text-lg mt-6">
            از ساعت 9 الی 14 در روزهای غیر تعطیل پاسخ گوی شما هستیم.
          </p>
          {/* tel and insta */}
          <div className="flex items-center gap-x-5 mt-10">
            <Link href={"/"} className="text-2xl xs:text-3xl text-primryCream2">
              <FaInstagram />
            </Link>
            <Link href={"/"} className="text-2xl xs:text-3xl text-blue-500">
              <FaTelegram />
            </Link>
          </div>
        </div>
      </div>
      {/* map */}
      <div className="w-full h-40 xs:h-80 my-10">
        <Map
          position={[35.72021225108499, 51.42222691580869]}
          center={[35.72021225108499, 51.42222691580869]}
        />
      </div>
    </div>
  );
}

export default Details;
