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
  const [toggleFilter, setToggleFilter] = useState<string>("brand price");
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
          <h1 className="text-primryCream text-3xl xl:text-5xl font-bold">کرم ضد لک</h1>
        </div>
        {/* details */}
        <div className="flex flex-col md:flex-row items-start">
          {/* filter for desktop*/}
          <div className="hidden xs:block md:sticky top-[64px] w-full md:w-[300px] lg:w-[400px] px-6 mt-4 mb-10 md:mb-0">
            {/* price */}
            <div>
              <div
                onClick={() => toggleHandler("price")}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <div className="font-bold text-base xl:text-lg">فیلتر بر اساس قیمت</div>
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
                <div className="font-bold text-base xl:text-lg">فیلتر براساس برندها</div>
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
                      <label className="text-sm xl:text-base" htmlFor="CLARINS">CLARINS</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CLINIQUE" />
                      <label className="text-sm xl:text-base" htmlFor="CLINIQUE">CLINIQUE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="COLLISTAR" />
                      <label className="text-sm xl:text-base" htmlFor="COLLISTAR">COLLISTAR</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="COLLISTAR" />
                      <label className="text-sm xl:text-base" htmlFor="COLLISTAR">COLLISTAR</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="OLE HENRIKSEN" />
                      <label className="text-sm xl:text-base" htmlFor="OLE HENRIKSEN">OLE HENRIKSEN</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="ORDINARY" />
                      <label className="text-sm xl:text-base" htmlFor="ORDINARY">ORDINARY</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SHISEIDO" />
                      <label className="text-sm xl:text-base" htmlFor="SHISEIDO">SHISEIDO</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="MURAD" />
                      <label className="text-sm xl:text-base" htmlFor="MURAD">MURAD</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="BABARIA" />
                      <label className="text-sm xl:text-base" htmlFor="BABARIA">BABARIA</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CAUDALIE" />
                      <label className="text-sm xl:text-base" htmlFor="CAUDALIE">CAUDALIE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="VERONIQUE" />
                      <label className="text-sm xl:text-base" htmlFor="VERONIQUE">VERONIQUE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SKIN ONE" />
                      <label className="text-sm xl:text-base" htmlFor="SKIN ONE">SKIN ONE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="DERMATYPIQUE" />
                      <label className="text-sm xl:text-base" htmlFor="DERMATYPIQUE">DERMATYPIQUE</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CYSPERSA" />
                      <label className="text-sm xl:text-base" htmlFor="CYSPERSA">CYSPERSA</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="CB" />
                      <label className="text-sm xl:text-base" htmlFor="CB">CB</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="BRIGHT MAX" />
                      <label className="text-sm xl:text-base" htmlFor="BRIGHT MAX">BRIGHT MAX</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="SVR" />
                      <label className="text-sm xl:text-base" htmlFor="SVR">SVR</label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="PRIME" />
                      <label className="text-sm xl:text-base" htmlFor="PRIME">PRIME</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="flex flex-col w-full">
            {/* sort for desktop */}
            <div className="hidden xs:grid grid-cols-2 grid-rows-3 gap-y-4 md:flex flex-wrap w-full gap-x-5 text-sm font-bold mb-5 child:md:w-[130px] child:w-full child:gap-x-4 child:md:gap-x-0 child:flex child:items-center child:justify-center child:md:justify-between">
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
            <div className="flex xs:hidden items-center justify-between gap-x-5 my-5">
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
        } block xs:hidden absolute bg-white w-full h-[100vh] transition-all overflow-y-auto duration-500 z-[60]`}
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
        } block xs:hidden absolute bg-white w-full h-[100vh] transition-all overflow-y-auto duration-500 z-[60]`}
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
