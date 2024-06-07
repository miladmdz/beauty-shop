"use client";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { ProductsType } from "@/components/Type/Products.type";
import ProductNewBox from "@/components/modules/ProductNewBox/ProductNewBox";

type DetailsProps = {
  products: ProductsType[];
};

function Details({ products }: DetailsProps) {
  const [toggleFilter, setToggleFilter] = useState<string>("brand price");
  const [fixToTop, setFixToTop] = useState<boolean>(false);
  const [test, setTest] = useState<boolean>(false);

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

  const toggleHandler = (select: string) => {
    if (toggleFilter) {
      setToggleFilter("");
    } else {
      setToggleFilter(select);
    }
  };

  return (
    <div className="container h-fit mb-5">
      {/* title */}
      <div>
        <h1 className="text-primryCream text-5xl font-bold">کرم ضد لک</h1>
      </div>
      {/* details */}
      <div className="flex items-start">
        {/* filter */}
        <div className="sticky top-[64px] w-[400px] px-6 mt-4">
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
        {/* products */}
        <div className="flex flex-col w-full">
            {/* filter */}
          <div className="flex flex-wrap w-full gap-x-5 text-sm font-bold mb-5 child:w-[130px] child:flex child:items-center child:justify-between">
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
          <div className="w-full grid grid-cols-3 gap-y-5">
            {products.map((product) => (
              <ProductNewBox {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
