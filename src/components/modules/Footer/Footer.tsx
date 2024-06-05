import React from "react";
import Link from "next/link";

import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import FooterDesktop from "@/components/templates/Home/Footer/FooterDesktop";
import FooterMobile from "@/components/templates/Home/Footer/FooterMobile";

function Footer() {
  const position = [51.505, -0.09];
  return (
    <div className="flex h-[100wh] flex-col items-center bg-black text-white">
      {/* top */}
      <div className=" mt-12 container grid grid-cols-1 grid-rows-4 gap-y-4 sm:gap-y-4 xl:gap-0 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
        <div className="flex w-full lg:justify-start xl:justify-center items-center gap-x-3">
          <span className="text-2xl">
            <FiPhone />
          </span>
          <span className="text-sm">
            <h3 className="text-primryCream2">تماس با پشتیبانی</h3>
            <p>04533721020 (از 10 الی 14 روز غیر تعطیل) یا تیکت</p>
          </span>
        </div>
        <div className="flex w-full lg:justify-start xl:justify-center items-center gap-x-3">
          <span className="text-2xl">
            <IoLocationOutline />
          </span>
          <span className="text-sm">
            <h3 className="text-primryCream2">آدرس دفتر مرکزی</h3>
            <p>
              اردبیل، شهرک آزادی، ابتدای خیابان آذربایجان، نبش بلوک یکم، پلاک 5
            </p>
          </span>
        </div>
        <div className="flex w-full lg:justify-start xl:justify-center items-center gap-x-3">
          <span className="text-2xl">
            <TfiEmail />
          </span>
          <span className="text-sm">
            <h3 className="text-primryCream2">ایمیل پشتیبانی</h3>
            <p>kaajstore@gmail.com</p>
          </span>
        </div>
        <div className="flex w-full lg:justify-start xl:justify-center items-center gap-x-3">
          <span className="text-2xl">
            <BiSupport />
          </span>
          <span className="text-sm">
            <h3 className="text-primryCream2">مشاوره پوست و زیبایی</h3>
            <p>از طریق تیکت</p>
          </span>
        </div>
      </div>
      {/* main for desktop */}
      <FooterDesktop/>
     
      {/* main for mobile */}
     <FooterMobile/>
      {/* bottom */}
      <div className="flex flex-col items-center mb-8 md:mb-4 h-36 md:h-auto">
        <div>
          <span className="text-sm">توسعه: </span>
          <Link
            className="text-primryCream2"
            href={"http://instagram.com/milad.mahmoudzadeh5"}
          >
            میلاد محمودزاده
          </Link>
        </div>
        <div>
          <span className="text-sm">طراحی: </span>
          <Link className="text-primryCream2" href={"https://www.rahweb.com/"}>
            شرکت طراحی سایت ره وب
          </Link>
        </div>
        <div>
          <span className="text-sm">خدمات سئو سایت :</span>
          <Link
            className="text-primryCream2"
            href={"https://hafez.agency/seo/"}
          >
            آژانس دیجیتال مارکتینگ حافظ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
