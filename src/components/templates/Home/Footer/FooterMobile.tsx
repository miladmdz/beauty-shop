"use client";
import Map from "@/components/modules/Map/Map";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function FooterMobile() {
  const [selectBox, setSelectBox] = useState<string>("");

  const menuHandler = (selected: string) => {
    if (selectBox) {
      setSelectBox("");
    } else {
      setSelectBox(selected);
    }
  };

  return (
    <div className="relative flex flex-col md:hidden w-full container mt-8 border-primryGray border-t-[1px] mb-3">
      <div>
        <div
          onClick={() => menuHandler("دسترسی سریع")}
          className="flex items-center justify-between border-white border-b-[1px] pb-3 mt-6 cursor-pointer"
        >
          <span className="text-lg">دسترسی سریع</span>
          <span>
            <IoIosArrowDown
              className={`${
                selectBox === "دسترسی سریع" && "rotate-180"
              } text-2xl transition-all duration-300 `}
            />
          </span>
        </div>
        <ul
          className={`${
            selectBox !== "دسترسی سریع" && "opacity-0 -z-50"
          } absolute flex flex-col my-3 justify-between items-start marker:text-primryCream2 h-fit marker:text-xl  child:text-sm transition-all duration-300 `}
        >
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              تخفیف دارها
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              ورود
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              ثبت نام
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              قوانین مقررات باشگاه
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              مشتریان
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              قوانین مقررات سایت
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              راهنمای خرید
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              سوالات متداول
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              پیگیری مرسوله پستی
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              درباره ما
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`${
          selectBox === "دسترسی سریع" && "mt-[290px]"
        } mt-0 transition-all duration-300 `}
      >
        <div
          onClick={() => menuHandler("دسته بندی محصولات")}
          className="flex items-center justify-between border-white border-b-[1px] pb-3 mt-3 cursor-pointer"
        >
          <span className="text-lg">دسته بندی محصولات</span>
          <span>
            <IoIosArrowDown
              className={`${
                selectBox === "دسته بندی محصولات" && "rotate-180"
              } text-2xl transition-all duration-300 `}
            />
          </span>
        </div>
        <ul
          className={`${
            selectBox !== "دسته بندی محصولات" && "opacity-0 -z-50"
          } absolute flex flex-col my-3 justify-between items-start marker:text-primryCream2 h-fit marker:text-xl child:text-sm transition-all duration-300`}
        >
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              محصولات مراقبت از پوست
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              محصولات مراقبت از مو
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              لوازم آرایشی
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              عطر و ادکلن
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`${
          selectBox === "دسته بندی محصولات" && "mt-32"
        } mt-0 transition-all duration-300 `}
      >
        <div
          onClick={() => menuHandler("برند های پرطرفدار")}
          className="flex items-center justify-between border-white border-b-[1px] pb-3 mt-3 cursor-pointer"
        >
          <span className="text-lg">برند های پرطرفدار</span>
          <span>
            <IoIosArrowDown
              className={`${
                selectBox === "برند های پرطرفدار" && "rotate-180"
              } text-2xl transition-all duration-300 `}
            />
          </span>
        </div>
        <ul
          className={`${
            selectBox !== "برند های پرطرفدار" && "opacity-0 -z-50"
          } absolute flex flex-col my-3 justify-between items-start marker:text-primryCream2 h-fit marker:text-xl child:text-sm transition-all duration-300`}
        >
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              PRIME
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              GINAGEN
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              BRIGHT MAX
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              CB
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              ASTRA
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              CYSPERRSA
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              DREAMATYPIQUE
            </Link>
          </li>
          <li className="flex items-baseline mt-1">
            <span className="w-2 h-2 bg-primryCream2 rounded-full md:p-1 lg:p-0 ml-3"></span>
            <Link
              className="relative -right-2 md:text-sm lg:text-base"
              href={""}
            >
              MQ
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`${
          selectBox === "برند های پرطرفدار" && "mt-52"
        } mt-0 transition-all duration-300 `}
      >
        <div
          onClick={() => menuHandler("درباره کاج شاپ")}
          className="flex items-center justify-between border-white border-b-[1px] pb-3 mt-3 cursor-pointer"
        >
          <span className="text-lg">درباره کاج شاپ</span>
          <span>
            <IoIosArrowDown
              className={`${
                selectBox === "درباره کاج شاپ" && "rotate-180"
              } text-2xl transition-all duration-300 `}
            />
          </span>
        </div>
        <div
          className={`${
            selectBox !== "درباره کاج شاپ" && "hidden"
          } absolute flex my-3 flex-col items-center justify-between w-full h-fit transition-all duration-300 `}
        >
          <span className="w-full h-[150px]">
            <Map
              position={[35.72021225108499, 51.42222691580869]}
              center={[35.72021225108499, 51.42222691580869]}
            />
          </span>
          <span>
            <p className="text-xxs leading-7 text-start md:w-[300px] lg:w-[400px] mt-4">
              فروشگاه کاج اکنون با بیش از ده ها برند مطرح آرایشی و پوستی و بیش
              از 100 برند عطری همزمان با توسعه تنوع محصولات ، با هدف تسهیل
              دسترسی هم وطنان سایر شهرها به محصولات برتر جهانی در اولین قدم بعد
              از استقبال اولین شعبه خود اقدام به ایجاد سامانه معرفی و فروش
              محصولات خود به صورت اینترنتی نموده است.فروشگاه کاج با تمرکز ویژه
              بر روی فروشگاه اینترنتی ،تجربه خریدی لذت بخش برای تمام مشتریان خود
              را فراهم خواهد نمود.
            </p>
          </span>
        </div>
      </div>

      <div
        className={`${
          selectBox === "درباره کاج شاپ" && "mt-[400px] xs:mt-[350px] sm:mt-[300px]"
        } mt-0 transition-all duration-300 `}
      >
        <div
          onClick={() => menuHandler("مجوزها")}
          className="flex items-center justify-between border-white border-b-[1px] pb-3 mt-3 cursor-pointer"
        >
          <span className="text-lg">مجوزها</span>
          <span>
            <IoIosArrowDown
              className={`${
                selectBox === "مجوزها" && "rotate-180"
              } text-2xl transition-all duration-300 `}
            />
          </span>
        </div>
        <div
          className={`${
            selectBox !== "صفحات اجتماعی" && "opacity-0 -z-50"
          } absolute h-[70px]`}
        ></div>
      </div>

      <div
        className={`${
          selectBox === "صفحات اجتماعی" && "mb-20"
        } transition-all duration-300 ${selectBox === "مجوزها" && "mt-20"}`}
      >
        <div
          onClick={() => menuHandler("صفحات اجتماعی")}
          className="flex items-center justify-between border-white border-b-[1px] pb-3 mt-3 cursor-pointer"
        >
          <span className="text-lg">صفحات اجتماعی</span>
          <span>
            <IoIosArrowDown
              className={`${
                selectBox === "صفحات اجتماعی" && "rotate-180"
              } text-2xl transition-all duration-300 `}
            />
          </span>
        </div>
        <span
          className={`${
            selectBox !== "صفحات اجتماعی" && "opacity-0 -z-50"
          } absolute flex justify-center w-full gap-x-3 child:text-3xl my-5 child:text-primryCream2`}
        >
          <Link href={""}>
            <FaInstagram />
          </Link>
          <Link href={""}>
            <FaTelegram />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default FooterMobile;
