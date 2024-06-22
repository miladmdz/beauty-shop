import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { BsTruck, BsWallet2 } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Link from "next/link";
import { CiTrash } from "react-icons/ci";

type BasketProps = {
  route: string;
};

function Basket({ route }: BasketProps) {
  return (
    <div className="w-full">
      {/* part top */}
      <div className="w-full flex items-center justify-center gap-x-4 xs:gap-x-10">
        <div
          className={`flex ${
            route === "سبد خرید" && "text-red-500"
          } flex-col items-center justify-center gap-y-2`}
        >
          <div className="rotateY text-xl xs:text-3xl">
            <HiOutlineShoppingCart />
          </div>
          <div className="text-xs xs:text-base">سبد خرید</div>
        </div>

        <div className="text-lg xs:text-2xl">
          <GoArrowLeft />
        </div>

        <div
          className={`flex ${
            route === "آدرس" && "text-red-500"
          } flex-col items-center justify-center gap-y-2`}
        >
          <div className="rotateY text-xl xs:text-3xl">
            <BsTruck />
          </div>
          <div className="text-xs xs:text-base">آدرس</div>
        </div>

        <div className="text-lg xs:text-2xl">
          <GoArrowLeft />
        </div>

        <div
          className={`flex ${
            route === "تایید و پرداخت" && "text-red-500"
          } flex-col items-center justify-center gap-y-2`}
        >
          <div className="rotateY text-xl xs:text-3xl">
            <BsWallet2 />
          </div>
          <div className="text-xs xs:text-base">تایید و پرداخت</div>
        </div>
      </div>
      {/* part bottom */}
      {/* button delete */}
      <div className="mt-6">
        <div className="w-full flex items-center justify-end mb-3">
          <button className="flex items-center gap-x-1 bg-red-500 text-white text-xs xs:text-sm rounded-md px-2 py-1">
            <MdOutlineRemoveShoppingCart className="text-sm xs:text-2xl" />
            <p>پاک کردن سبد خرید</p>
          </button>
        </div>
        {/* products */}
        <div className="w-full flex flex-col items-start justify-center gap-y-3">
          <div className="w-full flex items-center flex-col md:flex-row justify-between border border-gray-500/50 rounded-md px-2">
            {/* md */}
            <div className="w-full md:hidden flex items-start justify-between pb-2">
              <p className="font-bold block md:hidden text-sm">
                کرم ضد آفتاب برایت مکس بی رنگ مدل آکوا فیوژن SPF50
              </p>
              <div className="block md:hidden">
                <button className="flex items-center gap-x-1 text-red-500 text-xs xs:text-base">
                  <CiTrash />
                  <p>حذف</p>
                </button>
              </div>
            </div>
            {/* desktop */}
            <div className="w-full flex items-center justify-between">
              {/* img & text */}
              <Link className="flex items-center gap-x-5" href={"/"}>
                <img
                  className="w-10 h-10 xs:w-20 xs:h-20"
                  src="../images/NewsProducts/Capture1.jpg"
                  alt=""
                />
                <p className="font-bold hidden md:block text-sm w-52">
                  کرم ضد آفتاب برایت مکس بی رنگ مدل آکوا فیوژن SPF50
                </p>
              </Link>
              {/* count */}
              <div className="flex items-center xs:gap-x-2 border text-xxs xs:text-sm rounded-md border-primryGray/50 py-1 px-0.5 xs:px-2">
                <label htmlFor="count">تعداد</label>
                <select className="outline-none" name="" id="count">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
              </div>
              {/* price */}
              <div className="text-xs xs:text-base text-center">514,000 تومان</div>
              {/* percent */}
              <div className="py-1 px-1 bg-primryCream2 text-xs xs:text-base rounded-md">15%</div>
              {/* finish price */}
              <div className="font-bold text-xs xs:text-base text-center">436,900 تومان</div>
              {/* delete */}
              <div className="hidden md:block">
                <button className="flex items-center gap-x-1 text-red-500">
                  <CiTrash />
                  <p>حذف</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
