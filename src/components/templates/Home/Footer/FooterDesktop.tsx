import Map from '@/components/modules/Map/Map'
import Link from 'next/link'
import React from 'react'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function FooterDesktop() {
  return (
    <div className="hidden md:block w-full container mt-8 border-primryGray border-t-[1px]">
    <div className="flex justify-between items-start mt-3">
      <div className="w-full">
        <ul className="flex flex-col justify-between items-start marker:text-primryCream2 h-fit marker:text-xl child:text-sm">
          <h3 className="text-base font-bold mb-6">دسترسی سریع</h3>
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
      <div className="w-full">
        <ul className="flex flex-col justify-between items-start marker:text-primryCream2 marker:text-xl h-fit list-disc child:text-sm">
          <h3 className="text-base font-bold mb-6">دسته بندی محصولات</h3>
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
      <div className="w-full">
        <ul className="flex flex-col justify-between items-start marker:text-primryCream2 marker:text-xl h-fit list-disc child:text-sm">
          <h3 className="text-base font-bold mb-6">برند های پر طرفدار</h3>
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
      {/* location */}
      <div className="flex flex-col items-center justify-between w-full h-fit">
        <span className="md:w-[250px] lg:w-[315px] h-[150px]">
          <Map
            position={[35.72021225108499, 51.42222691580869]}
            center={[35.72021225108499, 51.42222691580869]}
          />
        </span>
        <span>
          <p className="text-xxs leading-7 text-start md:w-[300px] lg:w-[400px] mt-4">
            فروشگاه کاج اکنون با بیش از ده ها برند مطرح آرایشی و پوستی و بیش
            از 100 برند عطری همزمان با توسعه تنوع محصولات ، با هدف تسهیل
            دسترسی هم وطنان سایر شهرها به محصولات برتر جهانی در اولین قدم
            بعد از استقبال اولین شعبه خود اقدام به ایجاد سامانه معرفی و فروش
            محصولات خود به صورت اینترنتی نموده است.فروشگاه کاج با تمرکز ویژه
            بر روی فروشگاه اینترنتی ،تجربه خریدی لذت بخش برای تمام مشتریان
            خود را فراهم خواهد نمود.
          </p>
        </span>
        <span className="flex gap-x-3 child:text-3xl mt-5 child:text-primryCream2">
          <Link href={""}>
            <FaInstagram />
          </Link>
          <Link href={""}>
            <FaTelegram />
          </Link>
        </span>
      </div>
    </div>
  </div>
  )
}

export default FooterDesktop