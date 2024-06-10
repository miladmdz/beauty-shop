"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { FaSearch, FaArrowUp } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonCircleOutline, IoHomeOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoMdMenu } from "react-icons/io";
import { BsGrid, BsTags } from "react-icons/bs";
import { BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function NavBar() {
  const [fixTop, setFixTop] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState<boolean>(false);
  const [selectProducts, setSelectProducts] = useState<string>(
    "محصولات مراقبت از پوست"
  );
  const [selectProductsMobile, setSelectProductsMobile] = useState<string>("");
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const fixNavBarToTop = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", fixNavBarToTop);

    return () => window.removeEventListener("scroll", fixNavBarToTop);
  }, []);

  useEffect(() => {
    if (scroll >= 105) {
      setFixTop(true);
      setToggleMenu(false);
      setToggleMenuMobile(false);
    } else {
      setFixTop(false);
    }
  }, [scroll]);

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scroll > 0) {
      scrollToTopHandler();
    } else {
      if (toggleMenuMobile) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [toggleMenuMobile]);

  const menuMobileHandler = (select: string) => {
    if (selectProductsMobile) {
      setSelectProductsMobile("");
    } else {
      setSelectProductsMobile(select);
    }
  };

  return (
    <>
      {/* for tablet & desktop */}
      <div className="relative hidden md:block">
        {/* part top */}
        <div
          className={` w-full h-16 z-50 bg-white ${
            fixTop ? "fixed top-0 navbar_fixed" : "relative"
          }`}
        >
          <div className="container h-full flex items-center justify-between bg-inherit">
            {/* input search */}
            <div className="flex items-center justify-between bg-white border-[1px] border-primryGray w-fit rounded-xl px-3">
              <FaSearch className="text-primryGray hover:cursor-pointer" />
              <input
                type="text"
                className="bg-transparent outline-none border-none"
                placeholder="جستجو برند محصول"
              />
            </div>
            {/* icon */}
            <div>
              <img
                className="w-16"
                src="https://www.kajshop.com/assets/uploads/content/set/392kaj%20g%202.png"
                alt=""
              />
            </div>
            {/* heart basket .... */}
            <div className="flex justify-between w-36 child:text-2xl child-hover:cursor-pointer child:mx">
              <TfiEmail />
              <IoPersonCircleOutline />
              <div className="relative">
                <LuShoppingCart />
                <span className="absolute flex items-center justify-center -top-1 left-3 bg-red-500 rounded-full text-white text-xs w-4 h-4">
                  0
                </span>
              </div>
              <CiHeart />
            </div>
          </div>
        </div>
        {/* part bottom  */}
        <div className="relative z-30 w-full h-10 bg-primryBlack">
          <div className="container h-full">
            {/* for desktop */}
            <ul className="hidden lg:flex items-center w-[85%] m-auto justify-between h-full child:text-white child:text-xxs child:xl:text-xs child-hover:cursor-pointer">
              <li className=" h-full group flex items-center">
                دسته بندی محصولات
                <div className="absolute group-hover:flex group-hover:menu_top_to_down justify-between items-start gap-y-10 hidden top-[35px] right-0 left-0 mx-auto z-30 w-[90%] h-[100vh] bg-white py-3 text-black">
                  {/* part select */}
                  <div className="flex w-[20%] h-28 flex-col items-start child:h-full child:flex child:items-center child:w-full child:text-xs">
                    <div
                      onClick={() =>
                        setSelectProducts("محصولات مراقبت از پوست")
                      }
                      className={`${
                        selectProducts === "محصولات مراقبت از پوست" &&
                        " border-r-4 border-primryCream2"
                      } gap-x-1`}
                    >
                      <IoIosArrowRoundBack
                        className={`${
                          selectProducts !== "محصولات مراقبت از پوست" &&
                          "invisible"
                        } text-xl`}
                      />
                      <p>محصولات مراقبت از پوست</p>
                    </div>

                    <div
                      onClick={() => setSelectProducts("محصولات مراقبت از مو")}
                      className={`${
                        selectProducts === "محصولات مراقبت از مو" &&
                        " border-r-4 border-primryCream2"
                      } gap-x-1`}
                    >
                      <IoIosArrowRoundBack
                        className={`${
                          selectProducts !== "محصولات مراقبت از مو" &&
                          "invisible"
                        } text-xl`}
                      />
                      <p>محصولات مراقبت از مو</p>
                    </div>
                    <div
                      onClick={() => setSelectProducts("لوازم آرایشی")}
                      className={`${
                        selectProducts === "لوازم آرایشی" &&
                        " border-r-4 border-primryCream2"
                      } gap-x-1`}
                    >
                      <IoIosArrowRoundBack
                        className={`${
                          selectProducts !== "لوازم آرایشی" && " invisible"
                        } text-xl`}
                      />
                      <p>لوازم آرایشی</p>
                    </div>
                    <div
                      onClick={() => setSelectProducts("عطر ادکلن")}
                      className={`${
                        selectProducts === "عطر ادکلن" &&
                        " border-r-4 border-primryCream2"
                      } gap-x-1`}
                    >
                      <IoIosArrowRoundBack
                        className={`${
                          selectProducts !== "عطر ادکلن" && "invisible"
                        } text-xl`}
                      />
                      <p>عطر ادکلن</p>
                    </div>
                  </div>
                  {/* part links */}
                  <div className="relative w-[80%]">
                    {/* title */}
                    <div className="flex items-center text-2xl ">
                      <BiSolidLeftArrow />
                      {selectProducts}
                    </div>
                    {/* ul skin*/}
                    <div
                      className={`${
                        selectProducts !== "محصولات مراقبت از پوست" &&
                        "-z-50 opacity-0"
                      } absolute flex items-start gap-x-20 transition-opacity duration-500`}
                    >
                      <ul>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم ضد لک</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>پاک کننده و ژل شوینده صورت</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>میسلار واتر</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>فوم شستشوی صورت</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>صابون شستشوی صورت</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم ضد افتاب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>اسپری ضدافتاب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ضدافتاب کودکان</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ضدافتاب فیزیکی (مینرال)</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ضدافتاب ایزدین(isdin)</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم ابرسان پوست ومرطوب کننده</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم ضد چروک</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم دور چشم</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>محصولات مراقبت از بدن</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم دست</Link>
                        </li>
                      </ul>
                      <ul>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم ضد ترک بدن</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>اسکراب بدن</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شوینده بدن</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>دئودرانت</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>اسکراب صورت</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ماسک صورت</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ماسک صورت ورقه ای</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>روغن بدن</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ست مراقبت از پوست</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>تونر</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>مراقبت لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>بالم لب درمانی</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ماسک لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>اسکراب لب</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم ترمیم کننده</Link>
                        </li>
                      </ul>
                      <ul>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>پماد ژل و کرم ضد جوش</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم کنترل کننده چربی</Link>
                        </li>
                      </ul>
                    </div>
                    {/* ul hair */}
                    <div
                      className={`${
                        selectProducts !== "محصولات مراقبت از مو" &&
                        "-z-50 opacity-0"
                      } absolute flex items-start gap-x-20 text-black transition-opacity duration-500`}
                    >
                      <ul>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>روغن ارگان</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ماسک مو</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو ضد شوره</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو کراتینه</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو ضد ریزش مو</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو بدون سولفات</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو موهای رنگ شده</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو برای موهای چرب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>شامپو تغذیه کننده</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>نرم کننده مو</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>اسپری مو</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>سرم مو</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>شانه و برس </Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>محصولات اسکراب کف سر</Link>
                        </li>
                      </ul>
                      <ul>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>استایل مو</Link>
                        </li>
                      </ul>
                    </div>
                    {/* ul tool */}
                    <div
                      className={`${
                        selectProducts !== "لوازم آرایشی" && "-z-50 opacity-0"
                      } absolute flex items-start gap-x-20 transition-opacity duration-500`}
                    >
                      <ul>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ارایش صورت</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>بی بی کرم</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>پالت کانتور و هایلایتر</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>رژ گونه</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>کانسیلر</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>پرایمر صورت</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>پنکک</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>کرم پودر</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>پودر فیکس</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>سی سی کرم</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ارایش چشم</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>پرایمر چشم</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>سایه پشم</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ریمل</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>خط چشم</Link>
                        </li>
                      </ul>
                      <ul>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>مداد چشم</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ارایش ابرو</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>ارایش پاک کن چشم</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ارایش لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>پرایمر لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>رژ لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>خط لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>برق لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>تینت لب</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>بالم لب</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ابزار ارایشی</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>براش ارایشی</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>مژه مصنوعی</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>اسفنج ارایشی</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>سایر ابزار ها</Link>
                        </li>
                      </ul>
                      <ul>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ارایش ناخن</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>لاک ناخن</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>لاک پاک کن</Link>
                        </li>
                      </ul>
                    </div>
                    {/* ul odkolon */}
                    <div
                      className={`${
                        selectProducts !== "عطر ادکلن" && "-z-50 opacity-0"
                      } absolute flex items-start gap-x-20 transition-opacity duration-500`}
                    >
                      <ul>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>ادکلن عطر زنانه</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>عطر ادکلن مردانه</Link>
                        </li>
                        <li className="flex items-start font-bold text-lg text-primryCream2 gap-x-1 mt-1">
                          <BiLeftArrow />
                          <Link href={"/"}>عطر ادکلن مردانه و زنانه</Link>
                        </li>
                        <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                          <BiLeftArrow />
                          <Link href={"/"}>عطر دیور(Dior)</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>صفحه اصلی</li>
              <li>همه ی محصولات</li>
              <li>برندها</li>
              <li>فروش ویژه</li>
              <li>پیگیری سفارشات</li>
              <li>قوانین مقررات</li>
              <li>تماس باما</li>
              <li>درباره ما</li>
              <li>مجله مد و زیبایی</li>
              <li>تخفیف دار ها</li>
              <li>راهنمای ثبت سفارش</li>
            </ul>
            {/* for tablet menu*/}
            <div className="h-full lg:hidden flex items-center justify-start">
              <div
                onClick={() => setToggleMenu((prev) => !prev)}
                className="relative z-30 h-fit flex items-center justify-start child:text-white child:text-xl border-[1px] w-fit px-3 py-1 border-white rounded-md cursor-pointer"
              >
                <IoMdMenu />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            toggleMenu ? "top-[104px]" : "-top-[1000px]"
          } absolute hidden md:flex lg:hidden w-full h-[100vh] bg-primryBlack z-20 transition-all duration-500`}
        >
          {/* start ul */}
          <ul className="flex flex-col items-start w-[90%] h-96 justify-between mx-auto child:text-white child:text-base mt-3 child-hover:cursor-pointer">
            <li className="group flex items-center">
              دسته بندی محصولات
              {/* island menu */}
              <div className="absolute group-hover:flex group-hover:menu_top_to_down justify-between items-start gap-y-10 hidden top-[35px] right-0 left-0 mx-auto z-30 w-[90%] h-[100vh] bg-white py-3 text-black">
                {/* part select */}
                <div className="flex w-[20%] h-28 flex-col items-start child:h-full child:flex child:items-center child:w-full child:text-xs">
                  <div
                    onClick={() => setSelectProducts("محصولات مراقبت از پوست")}
                    className={`${
                      selectProducts === "محصولات مراقبت از پوست" &&
                      " border-r-4 border-primryCream2"
                    } gap-x-1`}
                  >
                    <IoIosArrowRoundBack
                      className={`${
                        selectProducts !== "محصولات مراقبت از پوست" &&
                        "invisible"
                      } text-xl`}
                    />
                    <p>محصولات مراقبت از پوست</p>
                  </div>

                  <div
                    onClick={() => setSelectProducts("محصولات مراقبت از مو")}
                    className={`${
                      selectProducts === "محصولات مراقبت از مو" &&
                      " border-r-4 border-primryCream2"
                    } gap-x-1`}
                  >
                    <IoIosArrowRoundBack
                      className={`${
                        selectProducts !== "محصولات مراقبت از مو" && "invisible"
                      } text-xl`}
                    />
                    <p>محصولات مراقبت از مو</p>
                  </div>
                  <div
                    onClick={() => setSelectProducts("لوازم آرایشی")}
                    className={`${
                      selectProducts === "لوازم آرایشی" &&
                      " border-r-4 border-primryCream2"
                    } gap-x-1`}
                  >
                    <IoIosArrowRoundBack
                      className={`${
                        selectProducts !== "لوازم آرایشی" && " invisible"
                      } text-xl`}
                    />
                    <p>لوازم آرایشی</p>
                  </div>
                  <div
                    onClick={() => setSelectProducts("عطر ادکلن")}
                    className={`${
                      selectProducts === "عطر ادکلن" &&
                      " border-r-4 border-primryCream2"
                    } gap-x-1`}
                  >
                    <IoIosArrowRoundBack
                      className={`${
                        selectProducts !== "عطر ادکلن" && "invisible"
                      } text-xl`}
                    />
                    <p>عطر ادکلن</p>
                  </div>
                </div>
                {/* part links */}
                <div className="relative w-[80%]">
                  {/* title */}
                  <div className="flex items-center text-xl ">
                    <BiSolidLeftArrow />
                    {selectProducts}
                  </div>
                  {/* ul skin*/}
                  <div
                    className={`${
                      selectProducts !== "محصولات مراقبت از پوست" &&
                      "-z-50 opacity-0"
                    } absolute flex items-start gap-x-20 transition-opacity duration-500`}
                  >
                    <ul>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم ضد لک</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>پاک کننده و ژل شوینده صورت</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>میسلار واتر</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>فوم شستشوی صورت</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>صابون شستشوی صورت</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم ضد افتاب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>اسپری ضدافتاب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ضدافتاب کودکان</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ضدافتاب فیزیکی (مینرال)</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ضدافتاب ایزدین(isdin)</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم ابرسان پوست ومرطوب کننده</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم ضد چروک</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم دور چشم</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>محصولات مراقبت از بدن</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم دست</Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم ضد ترک بدن</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>اسکراب بدن</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شوینده بدن</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>دئودرانت</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>اسکراب صورت</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ماسک صورت</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ماسک صورت ورقه ای</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>روغن بدن</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ست مراقبت از پوست</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>تونر</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>مراقبت لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>بالم لب درمانی</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ماسک لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>اسکراب لب</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم ترمیم کننده</Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>پماد ژل و کرم ضد جوش</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم کنترل کننده چربی</Link>
                      </li>
                    </ul>
                  </div>
                  {/* ul hair */}
                  <div
                    className={`${
                      selectProducts !== "محصولات مراقبت از مو" &&
                      "-z-50 opacity-0"
                    } absolute flex items-start gap-x-20 text-black transition-opacity duration-500`}
                  >
                    <ul>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>روغن ارگان</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ماسک مو</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو ضد شوره</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو کراتینه</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو ضد ریزش مو</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو بدون سولفات</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو موهای رنگ شده</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو برای موهای چرب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>شامپو تغذیه کننده</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>نرم کننده مو</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>اسپری مو</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>سرم مو</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>شانه و برس </Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>محصولات اسکراب کف سر</Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>استایل مو</Link>
                      </li>
                    </ul>
                  </div>
                  {/* ul tool */}
                  <div
                    className={`${
                      selectProducts !== "لوازم آرایشی" && "-z-50 opacity-0"
                    } absolute flex items-start gap-x-20 transition-opacity duration-500`}
                  >
                    <ul>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ارایش صورت</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>بی بی کرم</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>پالت کانتور و هایلایتر</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>رژ گونه</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>کانسیلر</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>پرایمر صورت</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>پنکک</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>کرم پودر</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>پودر فیکس</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>سی سی کرم</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ارایش چشم</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>پرایمر چشم</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>سایه پشم</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ریمل</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>خط چشم</Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>مداد چشم</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ارایش ابرو</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>ارایش پاک کن چشم</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ارایش لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>پرایمر لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>رژ لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>خط لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>برق لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>تینت لب</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>بالم لب</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ابزار ارایشی</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>براش ارایشی</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>مژه مصنوعی</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>اسفنج ارایشی</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>سایر ابزار ها</Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ارایش ناخن</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>لاک ناخن</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>لاک پاک کن</Link>
                      </li>
                    </ul>
                  </div>
                  {/* ul odkolon */}
                  <div
                    className={`${
                      selectProducts !== "عطر ادکلن" && "-z-50 opacity-0"
                    } absolute flex items-start gap-x-20 transition-opacity duration-500`}
                  >
                    <ul>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>ادکلن عطر زنانه</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>عطر ادکلن مردانه</Link>
                      </li>
                      <li className="flex items-start font-bold text-sm text-primryCream2 gap-x-1 mt-1">
                        <BiLeftArrow />
                        <Link href={"/"}>عطر ادکلن مردانه و زنانه</Link>
                      </li>
                      <li className="flex items-start text-xs hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                        <BiLeftArrow />
                        <Link href={"/"}>عطر دیور(Dior)</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>صفحه اصلی</li>
            <li>همه ی محصولات</li>
            <li>برندها</li>
            <li>فروش ویژه</li>
            <li>پیگیری سفارشات</li>
            <li>قوانین مقررات</li>
            <li>تماس باما</li>
            <li>درباره ما</li>
            <li>مجله مد و زیبایی</li>
            <li>تخفیف دار ها</li>
            <li>راهنمای ثبت سفارش</li>
          </ul>
          {/* finish ul */}
        </div>
      </div>
      {/* for mobile */}
      <div className="block md:hidden">
        <div className="fixed bottom-0 w-full h-16 bg-white border-t-primryGray border-[1px] z-50">
          <ul className="flex xs:container w-full h-full items-center justify-between child:flex child:xs:w-full child:w-[25%] child:flex-col child:items-center child:h-full child:justify-evenly child:cursor-pointer child:text-primryGray">
            <li>
              <IoHomeOutline className="text-lg xs:text-2xl" />
              <span className="flex flex-wrap text-center text-xs xs:text-xs">
                خانه
              </span>
            </li>
            <li onClick={() => setToggleMenuMobile(true)}>
              <BsGrid className="text-lg xs:text-2xl" />
              <span className="flex flex-wrap text-center text-xs xs:text-xs">
                دسته بندی
              </span>
            </li>
            <li>
              <BsTags className="text-lg xs:text-2xl" />
              <span className="flex flex-wrap text-center text-xs xs:text-xs">
                تخفیف دار ها
              </span>
            </li>
            <li>
              <TfiEmail className="text-lg xs:text-2xl" />
              <span className="flex flex-wrap text-center text-xs xs:text-xs">
                تیکت
              </span>
            </li>
            <li>
              <IoPersonCircleOutline className="text-lg xs:text-2xl" />
              <span className="flex flex-wrap text-center text-xxs xs:text-xs">
                ورود/ثبت نام
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* menu list */}
      <div
        className={`${
          toggleMenuMobile ? "top-0" : "-top-[1000px]"
        } absolute transition-all duration-500 w-full h-[100vh] overflow-y-scroll bg-white z-50`}
      >
        <div className="container flex flex-col">
          {/* part top */}
          <div className="flex items-center justify-between mt-2">
            <div className="text-xl font-bold text-primryCream2">
              <h2>دسته بندی محصولات</h2>
            </div>
            <div
              onClick={() => setToggleMenuMobile(false)}
              className="flex items-center gap-x-1 cursor-pointer"
            >
              <p>برگشت</p>
              <span>
                <IoIosArrowRoundBack className="text-2xl" />
              </span>
            </div>
          </div>
          {/* part bottom */}
          <div className="relative flex flex-col justify-between w-full h-44 mt-6">
            {/* skin */}
            <div>
              <div
                onClick={() => menuMobileHandler("محصولات مراقبت از پوست")}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="font-bold">محصولات مراقبت از پوست</p>
                <IoIosArrowDown
                  className={`${
                    selectProductsMobile === "محصولات مراقبت از پوست" &&
                    "rotateY_anime"
                  } transition-all duration-300`}
                />
              </div>
              {/* more */}
              <div
                className={`${
                  selectProductsMobile !== "محصولات مراقبت از پوست" &&
                  "invisible opacity-0"
                } absolute w-full my-3 transition-all duration-500`}
              >
                <ul>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-y-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>محصول مراقبت از پوست</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم ضد لک</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پاک کننده و ژل شوینده صورت</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>میسلار واتر</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>فوم شستشوی صورت</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>صابون شستشوی صورت</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم ضد افتاب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>اسپری ضدافتاب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ضدافتاب کودکان</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ضدافتاب فیزیکی (مینرال)</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ضدافتاب ایزدین(isdin)</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم ابرسان پوست ومرطوب کننده</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم ضد چروک</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم دور چشم</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>محصولات مراقبت از بدن</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم دست</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم ضد ترک بدن</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>اسکراب بدن</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شوینده بدن</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>دئودرانت</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>اسکراب صورت</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ماسک صورت</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ماسک صورت ورقه ای</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>روغن بدن</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ست مراقبت از پوست</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>تونر</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>مراقبت لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>بالم لب درمانی</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ماسک لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>اسکراب لب</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم ترمیم کننده</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پماد ژل و کرم ضد جوش</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم کنترل کننده چربی</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* hair */}
            <div
              className={`${
                selectProductsMobile === "محصولات مراقبت از پوست" &&
                "mt-[1100px]"
              } ${
                selectProductsMobile === "محصولات مراقبت از مو" && "mt-5"
              } transition-all duration-500`}
            >
              <div
                onClick={() => menuMobileHandler("محصولات مراقبت از مو")}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="font-bold">محصولات مراقبت از مو</p>
                <IoIosArrowDown
                  className={`${
                    selectProductsMobile === "محصولات مراقبت از مو" &&
                    "rotateY_anime"
                  } transition-all duration-300`}
                />
              </div>
              {/* more */}
              <div
                className={`${
                  selectProductsMobile !== "محصولات مراقبت از مو" &&
                  "invisible opacity-0"
                } absolute w-full my-3 transition-all duration-500`}
              >
                <ul>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-y-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>محصولات مراقبت از مو</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>روغن ارگان</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ماسک مو</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو ضد شوره</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو کراتینه</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو ضد ریزش مو</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو بدون سولفات</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو موهای رنگ شده</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو برای موهای چرب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شامپو تغذیه کننده</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>نرم کننده مو</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>اسپری مو</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>سرم مو</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>شانه و برس </Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>محصولات اسکراب کف سر</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>استایل مو</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* tools */}
            <div
              className={`${
                selectProductsMobile === "محصولات مراقبت از مو" && "mt-[610px]"
              } ${
                selectProductsMobile === "لوازم آرایشی" && "mt-5"
              } transition-all duration-500`}
            >
              <div
                onClick={() => menuMobileHandler("لوازم آرایشی")}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="font-bold">لوازم آرایشی</p>
                <IoIosArrowDown
                  className={`${
                    selectProductsMobile === "لوازم آرایشی" && "rotateY_anime"
                  } transition-all duration-300`}
                />
              </div>
              {/* more */}
              <div
                className={`${
                  selectProductsMobile !== "لوازم آرایشی" &&
                  "invisible opacity-0"
                } absolute w-full my-3 transition-all duration-500`}
              >
                <ul>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-y-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ارایش صورت</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ارایش صورت</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>بی بی کرم</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پالت کانتور و هایلایتر</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>رژ گونه</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کانسیلر</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پرایمر صورت</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پنکک</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>کرم پودر</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پودر فیکس</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>سی سی کرم</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ارایش چشم</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پرایمر چشم</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>سایه پشم</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ریمل</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>خط چشم</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>مداد چشم</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ارایش ابرو</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ارایش پاک کن چشم</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ارایش لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>پرایمر لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>رژ لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>خط لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>برق لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>تینت لب</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>بالم لب</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ابزار ارایشی</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>براش ارایشی</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>مژه مصنوعی</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>اسفنج ارایشی</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>سایر ابزار ها</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ارایش ناخن</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>لاک ناخن</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>لاک پاک کن</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* odkolon */}
            <div
              className={`${
                selectProductsMobile === "لوازم آرایشی" && "mt-[950px]"
              } transition-all duration-500`}
            >
              <div
                onClick={() => menuMobileHandler("عطر و ادکلن")}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="font-bold">عطر و ادکلن</p>
                <IoIosArrowDown
                  className={`${
                    selectProductsMobile === "عطر و ادکلن" && "rotateY_anime"
                  } transition-all duration-300`}
                />
              </div>
              {/* more */}
              <div
                className={`${
                  selectProductsMobile !== "عطر و ادکلن" &&
                  "invisible opacity-0"
                } ${
                  selectProductsMobile === "عطر و ادکلن" && "mt-5"
                } absolute w-full my-3 transition-all duration-500`}
              >
                <ul>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-y-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>عطر و ادکلن</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>ادکلن و عطر زنانه</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>عطر و ادکلن مردانه</Link>
                  </li>
                  <li className="flex items-start font-bold text-sm text-black gap-x-1 mt-1 py-2 border-b-[1px] border-gray-400/65">
                    <BiSolidLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>عطر و ادکلن مردانه و زنانه</Link>
                  </li>
                  <li className="flex items-start text-sm hover:text-primryCream2 gap-x-1 mt-1 transition-all duration-300">
                    <BiLeftArrow className="text-primryCream2" />
                    <Link href={"/"}>عطر دیور (Dior)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* button for scroll to top */}
      <div
        onClick={scrollToTopHandler}
        className={`z-30 ${
          fixTop ? "block fixed bottom-20 md:bottom-10 right-4" : "hidden"
        } cursor-pointer navbar_fixed`}
      >
        <div className="flex items-center justify-center w-12 h-12 bg-primryCream2 rounded-full">
          <FaArrowUp className="text-white text-2xl" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
