"use client";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { ProductsType } from "@/components/Type/Products.type";
import ProductNewBox from "@/components/modules/ProductNewBox/ProductNewBox";
import { CiFilter } from "react-icons/ci";
import { FaSortAmountDownAlt } from "react-icons/fa";

type DetailsProps = {
  products: ProductsType[];
};

function Details({ products }: DetailsProps) {
  const [toggleFilter, setToggleFilter] = useState<string>("");
  const [fixToTop, setFixToTop] = useState<boolean>(false);
  const [test, setTest] = useState<boolean>(false);
  const [filterMobile, setFilterMobile] = useState<boolean>(false);
  const [sortMobile, setSortMobile] = useState<boolean>(false);

  useEffect(() => {
    const scrollUser = () => {
      let width = window.scrollY;
      if (width > 105) {
        setFixToTop(true);
      } else {
        setFixToTop(false);
      }
    };

    window.addEventListener("scroll", scrollUser);

    return () => window.removeEventListener("scroll", scrollUser);
  }, []);

  useEffect(() => {
    if (sortMobile || filterMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [filterMobile, sortMobile]);

  const toggleHandler = (select: string) => {
    if (toggleFilter) {
      setToggleFilter("");
    } else {
      setToggleFilter(select);
    }
  };

  return (
    <>
      <div className="container h-fit mb-5">
        {/* title */}
        <div>
          <h1 className="text-primryCream text-3xl xl:text-5xl font-bold">
            همه محصولات
          </h1>
        </div>
        <div className="relative pt-10 pb-16">
          <p className="absolute left-0 right-0 mx-auto px-3 w-fit bg-white z-20">محصولات</p>
          <div className="absolute top-[52px] w-full h-px bg-gray-500/50"></div>
        </div>
        {/* details */}
        <div className="flex flex-col md:flex-row items-start">
          {/* filter for desktop*/}
          <div className="hidden md:block md:sticky top-[64px] w-full md:w-[300px] lg:w-[400px] px-6 mt-4 mb-10 md:mb-0 child:my-8">
            {/* price */}
            <div>
              <div
                onClick={() => toggleHandler("price")}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <div className="font-bold text-base xl:text-lg">
                  فیلتر بر اساس قیمت
                </div>
                <div className="text-xl text-primryCream">
                  <FaPlus
                    className={`${
                      toggleFilter.includes("price") ? "hidden" : ""
                    }`}
                  />
                  <FaMinus
                    className={`${
                      toggleFilter.includes("price") ? "" : "hidden"
                    }`}
                  />
                </div>
              </div>
              {/* more */}
              <div
                className={`${
                  toggleFilter.includes("price") ? "fadein_anime" : "hidden"
                } py-8`}
              >
                <div>
                  {/* text */}
                  <div className="flex items-center justify-between">
                    <span>تومان</span>
                    <span>0-10965000</span>
                    <span>تومان</span>
                  </div>
                  {/* range */}
                  <div className="flex flex-col h-28 justify-around mb-4">
                    <label htmlFor="range1">از</label>
                    <input
                      type="range"
                      name=""
                      id="range1"
                      className="special_input"
                    />
                    <label htmlFor="range2">تا</label>
                    <input
                      type="range"
                      name=""
                      id="range2"
                      className="special_input"
                    />
                  </div>
                </div>
                <div>
                  <button className="bg-primryGreen w-full py-3 rounded-lg text-white">
                    اعمال فیلتر قیمت
                  </button>
                </div>
              </div>
            </div>
            {/* brand */}
            <div>
              <div
                onClick={() => toggleHandler("brand")}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <div className="font-bold text-base xl:text-lg">
                  فیلتر براساس برندها
                </div>
                <div className="text-xl text-primryCream">
                  <FaPlus
                    className={`${
                      toggleFilter.includes("brand") ? "hidden" : ""
                    }`}
                  />
                  <FaMinus
                    className={`${
                      toggleFilter.includes("brand") ? "" : "hidden"
                    }`}
                  />
                </div>
              </div>
              {/* more */}
              <div
                className={`${
                  toggleFilter.includes("brand") ? "fadein_anime" : "hidden"
                } mt-5`}
              >
                {/* search */}
                <div>
                  <div className="flex items-center justify-between border border-primryGray/50">
                    <input
                      className="w-full h-10 text-sm xl:text-base"
                      type="text"
                      placeholder="جستجو برند ,مثلا :AVENE"
                    />
                    <span className="w-[20px] cursor-pointer">
                      <IoCloseSharp />
                    </span>
                  </div>
                </div>
                {/* checkbox */}
                <div className="mt-5">
                  <form
                    className="flex flex-col items-start h-32 overflow-y-auto child:flex child:gap-x-2 child-hover::cursor-pointer"
                    action=""
                  >
                    <div>
                      <input type="checkbox" name="" id="CLARINS" />
                      <label className="text-sm xl:text-base" htmlFor="CLARINS">
                        CLARINS
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CLINIQUE" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="CLINIQUE"
                      >
                        CLINIQUE
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="COLLISTAR" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="COLLISTAR"
                      >
                        COLLISTAR
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="COLLISTAR" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="COLLISTAR"
                      >
                        COLLISTAR
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="OLE HENRIKSEN" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="OLE HENRIKSEN"
                      >
                        OLE HENRIKSEN
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ORDINARY" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ORDINARY"
                      >
                        ORDINARY
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SHISEIDO" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="SHISEIDO"
                      >
                        SHISEIDO
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="MURAD" />
                      <label className="text-sm xl:text-base" htmlFor="MURAD">
                        MURAD
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="BABARIA" />
                      <label className="text-sm xl:text-base" htmlFor="BABARIA">
                        BABARIA
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CAUDALIE" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="CAUDALIE"
                      >
                        CAUDALIE
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="VERONIQUE" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="VERONIQUE"
                      >
                        VERONIQUE
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SKIN ONE" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="SKIN ONE"
                      >
                        SKIN ONE
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="DERMATYPIQUE" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="DERMATYPIQUE"
                      >
                        DERMATYPIQUE
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CYSPERSA" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="CYSPERSA"
                      >
                        CYSPERSA
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CB" />
                      <label className="text-sm xl:text-base" htmlFor="CB">
                        CB
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="BRIGHT MAX" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="BRIGHT MAX"
                      >
                        BRIGHT MAX
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SVR" />
                      <label className="text-sm xl:text-base" htmlFor="SVR">
                        SVR
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="PRIME" />
                      <label className="text-sm xl:text-base" htmlFor="PRIME">
                        PRIME
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* sort */}
            <div>
              <div
                onClick={() => toggleHandler("sort")}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <div className="font-bold text-base xl:text-lg">
                  فیلتر براساس دسته بندی
                </div>
                <div className="text-xl text-primryCream">
                  <FaPlus
                    className={`${
                      toggleFilter.includes("sort") ? "hidden" : ""
                    }`}
                  />
                  <FaMinus
                    className={`${
                      toggleFilter.includes("sort") ? "" : "hidden"
                    }`}
                  />
                </div>
              </div>
              {/* more */}
              <div
                className={`${
                  toggleFilter.includes("sort") ? "fadein_anime" : "hidden"
                } mt-5`}
              >
                {/* search */}
                <div>
                  <div className="flex items-center justify-between border border-primryGray/50">
                    <input
                      className="w-full h-10 text-sm xl:text-base"
                      type="text"
                      placeholder="جستجو دسته ,مثلا :سرم"
                    />
                    <span className="w-[20px] cursor-pointer">
                      <IoCloseSharp />
                    </span>
                  </div>
                </div>
                {/* checkbox */}
                <div className="mt-5">
                  <form
                    className="flex flex-col items-start h-32 overflow-y-auto child:flex child:gap-x-2 child-hover::cursor-pointer"
                    action=""
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات مراقبت از پوست"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات مراقبت از پوست"
                      >
                        محصولات مراقبت از پوست
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CLINIQUE" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="CLINIQUE"
                      >
                        CLINIQUE
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="پاک کننده و ژل شوینده صورت"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پاک کننده و ژل شوینده صورت"
                      >
                        پاک کننده و ژل شوینده صورت
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="کرم آبرسان پوست و مرطوب کننده"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم آبرسان پوست و مرطوب کننده"
                      >
                        کرم آبرسان پوست و مرطوب کننده
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم ضد چروک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد چروک"
                      >
                        کرم ضد چروک
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات مراقبت از بدن"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات مراقبت از بدن"
                      >
                        محصولات مراقبت از بدن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ماسک صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ماسک صورت"
                      >
                        ماسک صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="روغن بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="روغن بدن"
                      >
                        روغن بدن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم ضد لک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد لک"
                      >
                        کرم ضد لک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم ضد آفتاب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد آفتاب"
                      >
                        کرم ضد آفتاب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ست مراقبت از پوست" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ست مراقبت از پوست"
                      >
                        ست مراقبت از پوست
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست نرمال" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست نرمال"
                      >
                        پوست نرمال
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست نرمال تا مختلط" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست نرمال تا مختلط"
                      >
                        پوست نرمال تا مختلط
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست مختلط تا چرب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست مختلط تا چرب"
                      >
                        پوست مختلط تا چرب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست خشک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست خشک"
                      >
                        پوست خشک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="خیلی خشک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="خیلی خشک"
                      >
                        خیلی خشک
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات مراقبت از مو"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات مراقبت از مو"
                      >
                        محصولات مراقبت از مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="روغن آرگان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="روغن آرگان"
                      >
                        روغن آرگان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ماسک مو" />
                      <label className="text-sm xl:text-base" htmlFor="ماسک مو">
                        ماسک مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="شامپو" />
                      <label className="text-sm xl:text-base" htmlFor="شامپو">
                        شامپو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="نرم کننده مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="نرم کننده مو"
                      >
                        نرم کننده مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="اسپری مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسپری مو"
                      >
                        اسپری مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سرم مو" />
                      <label className="text-sm xl:text-base" htmlFor="سرم مو">
                        سرم مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="شامپو ضد شوره" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو ضد شوره"
                      >
                        شامپو ضد شوره
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لوازم آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لوازم آرایشی"
                      >
                        لوازم آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش صورت"
                      >
                        آرایش صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="بی بی کرم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="بی بی کرم"
                      >
                        بی بی کرم
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="پالت کانتور و هایلایتر"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پالت کانتور و هایلایتر"
                      >
                        پالت کانتور و هایلایتر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="رژ گونه" />
                      <label className="text-sm xl:text-base" htmlFor="رژ گونه">
                        رژ گونه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کانسیلر" />
                      <label className="text-sm xl:text-base" htmlFor="کانسیلر">
                        کانسیلر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پرایمر صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پرایمر صورت"
                      >
                        پرایمر صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پنکک" />
                      <label className="text-sm xl:text-base" htmlFor="پنکک">
                        پنکک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم پودر" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم پودر"
                      >
                        کرم پودر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پودر فیکس" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پودر فیکس"
                      >
                        پودر فیکس
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سی سی کرم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سی سی کرم"
                      >
                        سی سی کرم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش چشم"
                      >
                        آرایش چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پرایمر چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پرایمر چشم"
                      >
                        پرایمر چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سایه چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سایه چشم"
                      >
                        سایه چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ریمل" />
                      <label className="text-sm xl:text-base" htmlFor="ریمل">
                        ریمل
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="خط چشم" />
                      <label className="text-sm xl:text-base" htmlFor="خط چشم">
                        خط چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="مداد چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مداد چشم"
                      >
                        مداد چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش ابرو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش ابرو"
                      >
                        آرایش ابرو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش پاک کن چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش پاک کن چشم"
                      >
                        آرایش پاک کن چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کیت چشم" />
                      <label className="text-sm xl:text-base" htmlFor="کیت چشم">
                        کیت چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش لب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش لب"
                      >
                        آرایش لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پرایمر لب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پرایمر لب"
                      >
                        پرایمر لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="رژ لب" />
                      <label className="text-sm xl:text-base" htmlFor="رژ لب">
                        رژ لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="خط لب" />
                      <label className="text-sm xl:text-base" htmlFor="خط لب">
                        خط لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="برق لب" />
                      <label className="text-sm xl:text-base" htmlFor="برق لب">
                        برق لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="حجم دهنده لب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="حجم دهنده لب"
                      >
                        حجم دهنده لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ابزار آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ابزار آرایشی"
                      >
                        ابزار آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="براش آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="براش آرایشی"
                      >
                        براش آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="مژه مصنوعی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مژه مصنوعی"
                      >
                        مژه مصنوعی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="اسفنج آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسفنج آرایشی"
                      >
                        اسفنج آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سایر ابزار ها" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سایر ابزار ها"
                      >
                        سایر ابزار ها
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ست های آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ست های آرایشی"
                      >
                        ست های آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش ناخن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش ناخن"
                      >
                        آرایش ناخن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لاک ناخن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لاک ناخن"
                      >
                        لاک ناخن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لاک پاک کن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لاک پاک کن"
                      >
                        لاک پاک کن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="عطر و ادکلن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر و ادکلن"
                      >
                        عطر و ادکلن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ادکلن و عطر زنانه" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ادکلن و عطر زنانه"
                      >
                        ادکلن و عطر زنانه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="عطر و ادکلن مردانه" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر و ادکلن مردانه"
                      >
                        عطر و ادکلن مردانه
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="عطر و ادکلن مردانه و زنانه"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر و ادکلن مردانه و زنانه"
                      >
                        عطر و ادکلن مردانه و زنانه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آقایان" />
                      <label className="text-sm xl:text-base" htmlFor="آقایان">
                        آقایان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آکنه" />
                      <label className="text-sm xl:text-base" htmlFor="آکنه">
                        آکنه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="شوینده ها و تونر ها" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شوینده ها و تونر ها"
                      >
                        شوینده ها و تونر ها
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="اصلاح صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اصلاح صورت"
                      >
                        اصلاح صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="مرطوب کننده" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مرطوب کننده"
                      >
                        مرطوب کننده
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لایه بردار" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لایه بردار"
                      >
                        لایه بردار
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="مراقبت از پوست آقایان"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مراقبت از پوست آقایان"
                      >
                        مراقبت از پوست آقایان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ضد چروک" />
                      <label className="text-sm xl:text-base" htmlFor="ضد چروک">
                        ضد چروک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="دئودرانت آقایان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="دئودرانت آقایان"
                      >
                        دئودرانت آقایان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ست های آقایان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ست های آقایان"
                      >
                        ست های آقایان
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات اسکراب کف سر"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات اسکراب کف سر"
                      >
                        محصولات اسکراب کف سر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="استایل مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="استایل مو"
                      >
                        استایل مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="میسلار واتر" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="میسلار واتر"
                      >
                        میسلار واتر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="تونر" />
                      <label className="text-sm xl:text-base" htmlFor="تونر">
                        تونر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم دور چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم دور چشم"
                      >
                        کرم دور چشم
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ژل شستشوی صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ژل شستشوی صورت"
                      >
                        ژل شستشوی صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="فوم شستشوی صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="فوم شستشوی صورت"
                      >
                        فوم شستشوی صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو کراتینه" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو کراتینه"
                      >
                        شامپو کراتینه
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو ضد ریزش مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو ضد ریزش مو"
                      >
                        شامپو ضد ریزش مو
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="تینت لب" />
                      <label className="text-sm xl:text-base" htmlFor="تینت لب">
                        تینت لب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="اسکراب صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسکراب صورت"
                      >
                        اسکراب صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ضد لک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد لک"
                      >
                        کرم ضد لک
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="بالم لب" />
                      <label className="text-sm xl:text-base" htmlFor="بالم لب">
                        بالم لب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو بدون سولفات" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو بدون سولفات"
                      >
                        شامپو بدون سولفات
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="شامپو مو های رنگ شده"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو مو های رنگ شده"
                      >
                        شامپو مو های رنگ شده
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="شامپو برای مو های چرب"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو برای مو های چرب"
                      >
                        شامپو برای مو های چرب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="برنزه کننده بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="برنزه کننده بدن"
                      >
                        برنزه کننده بدن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="اسپری ضد آفتاب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسپری ضد آفتاب"
                      >
                        اسپری ضد آفتاب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ضد آفتاب کودکان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ضد آفتاب کودکان"
                      >
                        ضد آفتاب کودکان
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="ضد آفتاب فیزیکی (مینرال)"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ضد آفتاب فیزیکی (مینرال)"
                      >
                        ضد آفتاب فیزیکی (مینرال)
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم دست" />
                      <label className="text-sm xl:text-base" htmlFor="کرم دست">
                        کرم دست
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ترک پا" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ترک پا"
                      >
                        کرم ترک پا
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ضد ترک بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد ترک بدن"
                      >
                        کرم ضد ترک بدن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم لیفت صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم لیفت صورت"
                      >
                        کرم لیفت صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شیر پاک کن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شیر پاک کن"
                      >
                        شیر پاک کن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="صابون شستشوی صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="صابون شستشوی صورت"
                      >
                        صابون شستشوی صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="بالم لب درمانی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="بالم لب درمانی"
                      >
                        بالم لب درمانی
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ماسک لب" />
                      <label className="text-sm xl:text-base" htmlFor="ماسک لب">
                        ماسک لب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم شب و روز" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم شب و روز"
                      >
                        کرم شب و روز
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ترمیم کننده" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ترمیم کننده"
                      >
                        کرم ترمیم کننده
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="پماد، ژل و کرم ضد جوش"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پماد، ژل و کرم ضد جوش"
                      >
                        پماد، ژل و کرم ضد جوش
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="کرم کنترل کننده چربی"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم کنترل کننده چربی"
                      >
                        کرم کنترل کننده چربی
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شوینده بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شوینده بدن"
                      >
                        شوینده بدن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو تغذیه کننده" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو تغذیه کننده"
                      >
                        شامپو تغذیه کننده
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ماسک صورت ورقه ای" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ماسک صورت ورقه ای"
                      >
                        ماسک صورت ورقه ای
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="دئودرانت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="دئودرانت"
                      >
                        دئودرانت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سرم ضد چروک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سرم ضد چروک"
                      >
                        سرم ضد چروک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="عطر دیور (Dior)" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر دیور (Dior)"
                      >
                        عطر دیور (Dior)
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="ضد آفتاب ایزدین (Isdin)"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ضد آفتاب ایزدین (Isdin)"
                      >
                        ضد آفتاب ایزدین (Isdin)
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="flex flex-col w-full">
            {/* sort for desktop */}
            <div className="hidden md:flex flex-wrap w-full gap-x-5 text-sm font-bold mb-5 child:md:w-[130px] child:w-full child:gap-x-4 child:md:gap-x-0 child:flex child:items-center child:justify-center child:md:justify-between">
              <div>
                <div>کالاهای موجود</div>
                <div
                  onClick={() => setTest((prev) => !prev)}
                  className={`${
                    test ? "border-primryCream" : "border-primryGray/50"
                  } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
                >
                  <span
                    className={`${
                      test
                        ? "fade_to_left bg-primryCream2"
                        : "fade_to_right bg-primryGray/50"
                    } block w-4 h-[14] rounded-full transition-colors duration-500`}
                  ></span>
                </div>
              </div>
              <div>
                <div>شگفت انگیزها</div>
                <div
                  onClick={() => setTest((prev) => !prev)}
                  className={`${
                    test ? "border-primryCream" : "border-primryGray/50"
                  } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
                >
                  <span
                    className={`${
                      test
                        ? "fade_to_left bg-primryCream2"
                        : "fade_to_right bg-primryGray/50"
                    } block w-4 h-[14] rounded-full transition-colors duration-500`}
                  ></span>
                </div>
              </div>
              <div>
                <div>پرفروش ترین</div>
                <div
                  onClick={() => setTest((prev) => !prev)}
                  className={`${
                    test ? "border-primryCream" : "border-primryGray/50"
                  } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
                >
                  <span
                    className={`${
                      test
                        ? "fade_to_left bg-primryCream2"
                        : "fade_to_right bg-primryGray/50"
                    } block w-4 h-[14] rounded-full transition-colors duration-500`}
                  ></span>
                </div>
              </div>
              <div>
                <div>ارزانترین</div>
                <div
                  onClick={() => setTest((prev) => !prev)}
                  className={`${
                    test ? "border-primryCream" : "border-primryGray/50"
                  } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
                >
                  <span
                    className={`${
                      test
                        ? "fade_to_left bg-primryCream2"
                        : "fade_to_right bg-primryGray/50"
                    } block w-4 h-[14] rounded-full transition-colors duration-500`}
                  ></span>
                </div>
              </div>
              <div>
                <div>گرانترین</div>
                <div
                  onClick={() => setTest((prev) => !prev)}
                  className={`${
                    test ? "border-primryCream" : "border-primryGray/50"
                  } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
                >
                  <span
                    className={`${
                      test
                        ? "fade_to_left bg-primryCream2"
                        : "fade_to_right bg-primryGray/50"
                    } block w-4 h-[14] rounded-full transition-colors duration-500`}
                  ></span>
                </div>
              </div>
              <div>
                <div>محبوب ترین</div>
                <div
                  onClick={() => setTest((prev) => !prev)}
                  className={`${
                    test ? "border-primryCream" : "border-primryGray/50"
                  } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
                >
                  <span
                    className={`${
                      test
                        ? "fade_to_left bg-primryCream2"
                        : "fade_to_right bg-primryGray/50"
                    } block w-4 h-[14] rounded-full transition-colors duration-500`}
                  ></span>
                </div>
              </div>
            </div>

            {/* filter & sort for mobile */}
            <div className="flex md:hidden items-center justify-between gap-x-5 my-5">
              <div
                onClick={() => setFilterMobile(true)}
                className="flex w-full justify-between items-center cursor-pointer"
              >
                <div>
                  <CiFilter />
                </div>
                <div className="text-sm xs:text-base">فیلتر محصول</div>
              </div>
              <div
                onClick={() => setSortMobile(true)}
                className="flex w-full justify-between items-center cursor-pointer"
              >
                <div>
                  <FaSortAmountDownAlt />
                </div>
                <div className="text-sm xs:text-base">مشاهده براساس</div>
              </div>
            </div>
            {/* product */}
            <div className="w-full child:flex child:w-full gap-x-4 child:justify-center grid grid-cols-2 xs:grid-cols-3 mt-5 md:mt-0 gap-y-5">
              {products.map((product) => (
                <ProductNewBox {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* filter for mobile */}
      <div
        className={`${
          filterMobile ? "top-0" : "-top-[1000px]"
        } block md:hidden absolute bg-white w-full h-[100vh] transition-all overflow-y-auto duration-500 z-[60]`}
      >
        <div className="flex w-full items-center justify-between p-4">
          <div className="text-2xl">فیلتر محصولات</div>
          <div
            onClick={() => setFilterMobile(false)}
            className="text-2xl cursor-pointer"
          >
            <IoCloseSharp />
          </div>
        </div>
        {/* more */}
        <div>
          <div className="block md:sticky top-[64px] w-full md:w-[300px] lg:w-[400px] px-6 pb-12 mt-4 mb-10 md:mb-0">
            {/* price */}
            <div>
              <div
                onClick={() => toggleHandler("price")}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <div className="font-bold text-lg">فیلتر بر اساس قیمت</div>
                <div className="text-xl text-primryCream">
                  <FaPlus
                    className={`${
                      toggleFilter.includes("price") ? "hidden" : ""
                    }`}
                  />
                  <FaMinus
                    className={`${
                      toggleFilter.includes("price") ? "" : "hidden"
                    }`}
                  />
                </div>
              </div>
              {/* more */}
              <div
                className={`${
                  toggleFilter.includes("price") ? "fadein_anime" : "hidden"
                } py-8`}
              >
                <div>
                  {/* text */}
                  <div className="flex items-center justify-between">
                    <span>تومان</span>
                    <span>0-10965000</span>
                    <span>تومان</span>
                  </div>
                  {/* range */}
                  <div className="flex flex-col h-28 justify-around mb-4">
                    <label htmlFor="range1">از</label>
                    <input
                      type="range"
                      name=""
                      id="range1"
                      className="special_input"
                    />
                    <label htmlFor="range2">تا</label>
                    <input
                      type="range"
                      name=""
                      id="range2"
                      className="special_input"
                    />
                  </div>
                </div>
                <div>
                  <button className="bg-primryGreen w-full py-3 rounded-lg text-white">
                    اعمال فیلتر قیمت
                  </button>
                </div>
              </div>
            </div>
            {/* brand */}
            <div>
              <div
                onClick={() => toggleHandler("brand")}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <div className="font-bold text-lg">فیلتر براساس برندها</div>
                <div className="text-xl text-primryCream">
                  <FaPlus
                    className={`${
                      toggleFilter.includes("brand") ? "hidden" : ""
                    }`}
                  />
                  <FaMinus
                    className={`${
                      toggleFilter.includes("brand") ? "" : "hidden"
                    }`}
                  />
                </div>
              </div>
              {/* more */}
              <div
                className={`${
                  toggleFilter.includes("brand") ? "fadein_anime" : "hidden"
                } mt-5`}
              >
                {/* search */}
                <div>
                  <div className="flex items-center justify-between border border-primryGray/50">
                    <input
                      className="w-full h-10"
                      type="text"
                      placeholder="جستجو برند ,مثلا :AVENE"
                    />
                    <span className="w-[20px] cursor-pointer">
                      <IoCloseSharp />
                    </span>
                  </div>
                </div>
                {/* checkbox */}
                <div className="mt-5">
                  <form
                    className="flex flex-col items-start h-32 overflow-y-auto child:flex child:gap-x-2 child-hover::cursor-pointer"
                    action=""
                  >
                    <div>
                      <input type="checkbox" name="" id="CLARINS" />
                      <label htmlFor="CLARINS">CLARINS</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CLINIQUE" />
                      <label htmlFor="CLINIQUE">CLINIQUE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="COLLISTAR" />
                      <label htmlFor="COLLISTAR">COLLISTAR</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="COLLISTAR" />
                      <label htmlFor="COLLISTAR">COLLISTAR</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="OLE HENRIKSEN" />
                      <label htmlFor="OLE HENRIKSEN">OLE HENRIKSEN</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ORDINARY" />
                      <label htmlFor="ORDINARY">ORDINARY</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SHISEIDO" />
                      <label htmlFor="SHISEIDO">SHISEIDO</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="MURAD" />
                      <label htmlFor="MURAD">MURAD</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="BABARIA" />
                      <label htmlFor="BABARIA">BABARIA</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CAUDALIE" />
                      <label htmlFor="CAUDALIE">CAUDALIE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="VERONIQUE" />
                      <label htmlFor="VERONIQUE">VERONIQUE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SKIN ONE" />
                      <label htmlFor="SKIN ONE">SKIN ONE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="DERMATYPIQUE" />
                      <label htmlFor="DERMATYPIQUE">DERMATYPIQUE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CYSPERSA" />
                      <label htmlFor="CYSPERSA">CYSPERSA</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CB" />
                      <label htmlFor="CB">CB</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="BRIGHT MAX" />
                      <label htmlFor="BRIGHT MAX">BRIGHT MAX</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SVR" />
                      <label htmlFor="SVR">SVR</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="PRIME" />
                      <label htmlFor="PRIME">PRIME</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* sort */}
            <div>
              <div
                onClick={() => toggleHandler("sort")}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <div className="font-bold text-base xl:text-lg">
                  فیلتر براساس دسته بندی
                </div>
                <div className="text-xl text-primryCream">
                  <FaPlus
                    className={`${
                      toggleFilter.includes("sort") ? "hidden" : ""
                    }`}
                  />
                  <FaMinus
                    className={`${
                      toggleFilter.includes("sort") ? "" : "hidden"
                    }`}
                  />
                </div>
              </div>
              {/* more */}
              <div
                className={`${
                  toggleFilter.includes("sort") ? "fadein_anime" : "hidden"
                } mt-5`}
              >
                {/* search */}
                <div>
                  <div className="flex items-center justify-between border border-primryGray/50">
                    <input
                      className="w-full h-10 text-sm xl:text-base"
                      type="text"
                      placeholder="جستجو دسته ,مثلا :سرم"
                    />
                    <span className="w-[20px] cursor-pointer">
                      <IoCloseSharp />
                    </span>
                  </div>
                </div>
                {/* checkbox */}
                <div className="mt-5">
                  <form
                    className="flex flex-col items-start h-32 overflow-y-auto child:flex child:gap-x-2 child-hover::cursor-pointer"
                    action=""
                  >
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات مراقبت از پوست"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات مراقبت از پوست"
                      >
                        محصولات مراقبت از پوست
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CLINIQUE" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="CLINIQUE"
                      >
                        CLINIQUE
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="پاک کننده و ژل شوینده صورت"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پاک کننده و ژل شوینده صورت"
                      >
                        پاک کننده و ژل شوینده صورت
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="کرم آبرسان پوست و مرطوب کننده"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم آبرسان پوست و مرطوب کننده"
                      >
                        کرم آبرسان پوست و مرطوب کننده
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم ضد چروک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد چروک"
                      >
                        کرم ضد چروک
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات مراقبت از بدن"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات مراقبت از بدن"
                      >
                        محصولات مراقبت از بدن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ماسک صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ماسک صورت"
                      >
                        ماسک صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="روغن بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="روغن بدن"
                      >
                        روغن بدن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم ضد لک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد لک"
                      >
                        کرم ضد لک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم ضد آفتاب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد آفتاب"
                      >
                        کرم ضد آفتاب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ست مراقبت از پوست" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ست مراقبت از پوست"
                      >
                        ست مراقبت از پوست
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست نرمال" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست نرمال"
                      >
                        پوست نرمال
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست نرمال تا مختلط" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست نرمال تا مختلط"
                      >
                        پوست نرمال تا مختلط
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست مختلط تا چرب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست مختلط تا چرب"
                      >
                        پوست مختلط تا چرب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پوست خشک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پوست خشک"
                      >
                        پوست خشک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="خیلی خشک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="خیلی خشک"
                      >
                        خیلی خشک
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات مراقبت از مو"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات مراقبت از مو"
                      >
                        محصولات مراقبت از مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="روغن آرگان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="روغن آرگان"
                      >
                        روغن آرگان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ماسک مو" />
                      <label className="text-sm xl:text-base" htmlFor="ماسک مو">
                        ماسک مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="شامپو" />
                      <label className="text-sm xl:text-base" htmlFor="شامپو">
                        شامپو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="نرم کننده مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="نرم کننده مو"
                      >
                        نرم کننده مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="اسپری مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسپری مو"
                      >
                        اسپری مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سرم مو" />
                      <label className="text-sm xl:text-base" htmlFor="سرم مو">
                        سرم مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="شامپو ضد شوره" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو ضد شوره"
                      >
                        شامپو ضد شوره
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لوازم آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لوازم آرایشی"
                      >
                        لوازم آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش صورت"
                      >
                        آرایش صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="بی بی کرم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="بی بی کرم"
                      >
                        بی بی کرم
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="پالت کانتور و هایلایتر"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پالت کانتور و هایلایتر"
                      >
                        پالت کانتور و هایلایتر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="رژ گونه" />
                      <label className="text-sm xl:text-base" htmlFor="رژ گونه">
                        رژ گونه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کانسیلر" />
                      <label className="text-sm xl:text-base" htmlFor="کانسیلر">
                        کانسیلر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پرایمر صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پرایمر صورت"
                      >
                        پرایمر صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پنکک" />
                      <label className="text-sm xl:text-base" htmlFor="پنکک">
                        پنکک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم پودر" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم پودر"
                      >
                        کرم پودر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پودر فیکس" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پودر فیکس"
                      >
                        پودر فیکس
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سی سی کرم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سی سی کرم"
                      >
                        سی سی کرم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش چشم"
                      >
                        آرایش چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پرایمر چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پرایمر چشم"
                      >
                        پرایمر چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سایه چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سایه چشم"
                      >
                        سایه چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ریمل" />
                      <label className="text-sm xl:text-base" htmlFor="ریمل">
                        ریمل
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="خط چشم" />
                      <label className="text-sm xl:text-base" htmlFor="خط چشم">
                        خط چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="مداد چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مداد چشم"
                      >
                        مداد چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش ابرو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش ابرو"
                      >
                        آرایش ابرو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش پاک کن چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش پاک کن چشم"
                      >
                        آرایش پاک کن چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کیت چشم" />
                      <label className="text-sm xl:text-base" htmlFor="کیت چشم">
                        کیت چشم
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش لب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش لب"
                      >
                        آرایش لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="پرایمر لب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پرایمر لب"
                      >
                        پرایمر لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="رژ لب" />
                      <label className="text-sm xl:text-base" htmlFor="رژ لب">
                        رژ لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="خط لب" />
                      <label className="text-sm xl:text-base" htmlFor="خط لب">
                        خط لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="برق لب" />
                      <label className="text-sm xl:text-base" htmlFor="برق لب">
                        برق لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="حجم دهنده لب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="حجم دهنده لب"
                      >
                        حجم دهنده لب
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ابزار آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ابزار آرایشی"
                      >
                        ابزار آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="براش آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="براش آرایشی"
                      >
                        براش آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="مژه مصنوعی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مژه مصنوعی"
                      >
                        مژه مصنوعی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="اسفنج آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسفنج آرایشی"
                      >
                        اسفنج آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سایر ابزار ها" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سایر ابزار ها"
                      >
                        سایر ابزار ها
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ست های آرایشی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ست های آرایشی"
                      >
                        ست های آرایشی
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آرایش ناخن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="آرایش ناخن"
                      >
                        آرایش ناخن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لاک ناخن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لاک ناخن"
                      >
                        لاک ناخن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لاک پاک کن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لاک پاک کن"
                      >
                        لاک پاک کن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="عطر و ادکلن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر و ادکلن"
                      >
                        عطر و ادکلن
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ادکلن و عطر زنانه" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ادکلن و عطر زنانه"
                      >
                        ادکلن و عطر زنانه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="عطر و ادکلن مردانه" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر و ادکلن مردانه"
                      >
                        عطر و ادکلن مردانه
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="عطر و ادکلن مردانه و زنانه"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر و ادکلن مردانه و زنانه"
                      >
                        عطر و ادکلن مردانه و زنانه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آقایان" />
                      <label className="text-sm xl:text-base" htmlFor="آقایان">
                        آقایان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="آکنه" />
                      <label className="text-sm xl:text-base" htmlFor="آکنه">
                        آکنه
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="شوینده ها و تونر ها" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شوینده ها و تونر ها"
                      >
                        شوینده ها و تونر ها
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="اصلاح صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اصلاح صورت"
                      >
                        اصلاح صورت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="مرطوب کننده" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مرطوب کننده"
                      >
                        مرطوب کننده
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="لایه بردار" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="لایه بردار"
                      >
                        لایه بردار
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="مراقبت از پوست آقایان"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="مراقبت از پوست آقایان"
                      >
                        مراقبت از پوست آقایان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ضد چروک" />
                      <label className="text-sm xl:text-base" htmlFor="ضد چروک">
                        ضد چروک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="دئودرانت آقایان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="دئودرانت آقایان"
                      >
                        دئودرانت آقایان
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ست های آقایان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ست های آقایان"
                      >
                        ست های آقایان
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="محصولات اسکراب کف سر"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="محصولات اسکراب کف سر"
                      >
                        محصولات اسکراب کف سر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="استایل مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="استایل مو"
                      >
                        استایل مو
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="میسلار واتر" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="میسلار واتر"
                      >
                        میسلار واتر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="تونر" />
                      <label className="text-sm xl:text-base" htmlFor="تونر">
                        تونر
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="کرم دور چشم" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم دور چشم"
                      >
                        کرم دور چشم
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ژل شستشوی صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ژل شستشوی صورت"
                      >
                        ژل شستشوی صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="فوم شستشوی صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="فوم شستشوی صورت"
                      >
                        فوم شستشوی صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو کراتینه" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو کراتینه"
                      >
                        شامپو کراتینه
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو ضد ریزش مو" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو ضد ریزش مو"
                      >
                        شامپو ضد ریزش مو
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="تینت لب" />
                      <label className="text-sm xl:text-base" htmlFor="تینت لب">
                        تینت لب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="اسکراب صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسکراب صورت"
                      >
                        اسکراب صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ضد لک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد لک"
                      >
                        کرم ضد لک
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="بالم لب" />
                      <label className="text-sm xl:text-base" htmlFor="بالم لب">
                        بالم لب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو بدون سولفات" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو بدون سولفات"
                      >
                        شامپو بدون سولفات
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="شامپو مو های رنگ شده"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو مو های رنگ شده"
                      >
                        شامپو مو های رنگ شده
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="شامپو برای مو های چرب"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو برای مو های چرب"
                      >
                        شامپو برای مو های چرب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="برنزه کننده بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="برنزه کننده بدن"
                      >
                        برنزه کننده بدن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="اسپری ضد آفتاب" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="اسپری ضد آفتاب"
                      >
                        اسپری ضد آفتاب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ضد آفتاب کودکان" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ضد آفتاب کودکان"
                      >
                        ضد آفتاب کودکان
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="ضد آفتاب فیزیکی (مینرال)"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ضد آفتاب فیزیکی (مینرال)"
                      >
                        ضد آفتاب فیزیکی (مینرال)
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم دست" />
                      <label className="text-sm xl:text-base" htmlFor="کرم دست">
                        کرم دست
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ترک پا" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ترک پا"
                      >
                        کرم ترک پا
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ضد ترک بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ضد ترک بدن"
                      >
                        کرم ضد ترک بدن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم لیفت صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم لیفت صورت"
                      >
                        کرم لیفت صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شیر پاک کن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شیر پاک کن"
                      >
                        شیر پاک کن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="صابون شستشوی صورت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="صابون شستشوی صورت"
                      >
                        صابون شستشوی صورت
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="بالم لب درمانی" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="بالم لب درمانی"
                      >
                        بالم لب درمانی
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ماسک لب" />
                      <label className="text-sm xl:text-base" htmlFor="ماسک لب">
                        ماسک لب
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم شب و روز" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم شب و روز"
                      >
                        کرم شب و روز
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="کرم ترمیم کننده" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم ترمیم کننده"
                      >
                        کرم ترمیم کننده
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="پماد، ژل و کرم ضد جوش"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="پماد، ژل و کرم ضد جوش"
                      >
                        پماد، ژل و کرم ضد جوش
                      </label>
                    </div>{" "}
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="کرم کنترل کننده چربی"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="کرم کنترل کننده چربی"
                      >
                        کرم کنترل کننده چربی
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شوینده بدن" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شوینده بدن"
                      >
                        شوینده بدن
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="شامپو تغذیه کننده" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="شامپو تغذیه کننده"
                      >
                        شامپو تغذیه کننده
                      </label>
                    </div>{" "}
                    <div>
                      <input type="checkbox" name="" id="ماسک صورت ورقه ای" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ماسک صورت ورقه ای"
                      >
                        ماسک صورت ورقه ای
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="دئودرانت" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="دئودرانت"
                      >
                        دئودرانت
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="سرم ضد چروک" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="سرم ضد چروک"
                      >
                        سرم ضد چروک
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="عطر دیور (Dior)" />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="عطر دیور (Dior)"
                      >
                        عطر دیور (Dior)
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="ضد آفتاب ایزدین (Isdin)"
                      />
                      <label
                        className="text-sm xl:text-base"
                        htmlFor="ضد آفتاب ایزدین (Isdin)"
                      >
                        ضد آفتاب ایزدین (Isdin)
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="w-full flex items-center justify-end p-4 ">
          <button className="flex items-center justify-center text-white w-36 h-10 bg-primryGreen rounded-lg">
            اعمال فیلتر
          </button>
        </div>
      </div>
      {/* sort for mobile */}
      <div
        className={`${
          sortMobile ? "top-0" : "-top-[1000px]"
        } block md:hidden absolute bg-white w-full h-[100vh] transition-all overflow-y-auto duration-500 z-[60]`}
      >
        <div className="flex w-full items-center justify-between p-4">
          <div className="text-2xl">مشاهده بر اساس</div>
          <div
            onClick={() => setSortMobile(false)}
            className="text-2xl cursor-pointer"
          >
            <IoCloseSharp />
          </div>
        </div>
        {/* more */}
        <div>
          <div className="grid grid-cols-2 grid-rows-3 gap-y-12 md:flex flex-wrap w-full gap-x-5 text-sm font-bold mb-5 child:md:w-[130px] child:w-full child:gap-x-4 child:md:gap-x-0 child:flex child:items-center child:justify-center child:md:justify-between">
            <div>
              <div>کالاهای موجود</div>
              <div
                onClick={() => setTest((prev) => !prev)}
                className={`${
                  test ? "border-primryCream" : "border-primryGray/50"
                } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
              >
                <span
                  className={`${
                    test
                      ? "fade_to_left bg-primryCream2"
                      : "fade_to_right bg-primryGray/50"
                  } block w-4 h-[14] rounded-full transition-colors duration-500`}
                ></span>
              </div>
            </div>
            <div>
              <div>شگفت انگیزها</div>
              <div
                onClick={() => setTest((prev) => !prev)}
                className={`${
                  test ? "border-primryCream" : "border-primryGray/50"
                } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
              >
                <span
                  className={`${
                    test
                      ? "fade_to_left bg-primryCream2"
                      : "fade_to_right bg-primryGray/50"
                  } block w-4 h-[14] rounded-full transition-colors duration-500`}
                ></span>
              </div>
            </div>
            <div>
              <div>پرفروش ترین</div>
              <div
                onClick={() => setTest((prev) => !prev)}
                className={`${
                  test ? "border-primryCream" : "border-primryGray/50"
                } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
              >
                <span
                  className={`${
                    test
                      ? "fade_to_left bg-primryCream2"
                      : "fade_to_right bg-primryGray/50"
                  } block w-4 h-[14] rounded-full transition-colors duration-500`}
                ></span>
              </div>
            </div>
            <div>
              <div>ارزانترین</div>
              <div
                onClick={() => setTest((prev) => !prev)}
                className={`${
                  test ? "border-primryCream" : "border-primryGray/50"
                } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
              >
                <span
                  className={`${
                    test
                      ? "fade_to_left bg-primryCream2"
                      : "fade_to_right bg-primryGray/50"
                  } block w-4 h-[14] rounded-full transition-colors duration-500`}
                ></span>
              </div>
            </div>
            <div>
              <div>گرانترین</div>
              <div
                onClick={() => setTest((prev) => !prev)}
                className={`${
                  test ? "border-primryCream" : "border-primryGray/50"
                } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
              >
                <span
                  className={`${
                    test
                      ? "fade_to_left bg-primryCream2"
                      : "fade_to_right bg-primryGray/50"
                  } block w-4 h-[14] rounded-full transition-colors duration-500`}
                ></span>
              </div>
            </div>
            <div>
              <div>محبوب ترین</div>
              <div
                onClick={() => setTest((prev) => !prev)}
                className={`${
                  test ? "border-primryCream" : "border-primryGray/50"
                } relative w-8 h-4 border rounded-3xl transition-colors duration-500`}
              >
                <span
                  className={`${
                    test
                      ? "fade_to_left bg-primryCream2"
                      : "fade_to_right bg-primryGray/50"
                  } block w-4 h-[14] rounded-full transition-colors duration-500`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <button className="absolute flex items-center justify-center text-white bottom-5 left-5 w-36 h-10 bg-primryGreen rounded-lg">
          اعمال فیلتر
        </button>
      </div>
    </>
  );
}

export default Details;
