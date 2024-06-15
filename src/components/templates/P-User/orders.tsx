import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function Orders() {
  return (
    <div className="w-[49%] mt-10">
      {/* top part */}
      <div className="flex items-center justify-between py-3 border-b border-black">
        <div className="font-bold">سفارش های اخیر</div>
        <Link href={"/"} className="flex items-center gap-x-2">
          <p className="font-bold">همه سفارش ها</p>
          <span>
            <FaArrowLeft className="text-2xl text-primryCream2" />
          </span>
        </Link>
      </div>
      {/* show tickets */}
      <div className="flex flex-col h-[340px] my-3 gap-y-2">
        <Link
          className="flex items-center justify-between p-4 rounded text-black font-bold"
          href={"/"}
        >
          {/* title */}
          <div className="flex flex-col items-start">
            {/* img & title */}
            <div className="flex items-center">
              <div>
                <img
                  className="w-12 h-12"
                  src="./images/Products/Capture1-1.jpg"
                  alt=""
                />
              </div>
              <div className="text-sm text-primryCream font-bold">
                رژ لب مات انوی پیپا
              </div>
            </div>
            <div className="px-1 bg-white text-black rounded mr-1">
              تکمیل شده
            </div>
          </div>
          {/* status */}
          <div className="flex flex-col items-start gap-y-3">
            <div className="font-sans">
              <span>8:00</span> 1403/2/4
            </div>
            <div>
              <span className="font-sans">200000</span> هزار تومان
            </div>
          </div>
        </Link>

        <Link
          className="flex items-center justify-between p-4 rounded text-black font-bold"
          href={"/"}
        >
          {/* title */}
          <div className="flex flex-col items-start">
            {/* img & title */}
            <div className="flex items-center">
              <div>
                <img
                  className="w-12 h-12"
                  src="./images/Products/Capture1-1.jpg"
                  alt=""
                />
              </div>
              <div className="text-sm text-primryCream font-bold">
                رژ لب مات انوی پیپا
              </div>
            </div>
            <div className="px-1 bg-white text-black rounded mr-1">
              تکمیل شده
            </div>
          </div>
          {/* status */}
          <div className="flex flex-col items-start gap-y-3">
            <div className="font-sans">
              <span>8:00</span> 1403/2/4
            </div>
            <div>
              <span className="font-sans">200000</span> هزار تومان
            </div>
          </div>
        </Link>

        <Link
          className="flex items-center justify-between p-4 rounded text-black font-bold"
          href={"/"}
        >
          {/* title */}
          <div className="flex flex-col items-start">
            {/* img & title */}
            <div className="flex items-center">
              <div>
                <img
                  className="w-12 h-12"
                  src="./images/Products/Capture1-1.jpg"
                  alt=""
                />
              </div>
              <div className="text-sm text-primryCream font-bold">
                رژ لب مات انوی پیپا
              </div>
            </div>
            <div className="px-1 bg-white text-black rounded mr-1">
              تکمیل شده
            </div>
          </div>
          {/* status */}
          <div className="flex flex-col items-start gap-y-3">
            <div className="font-sans">
              <span>8:00</span> 1403/2/4
            </div>
            <div>
              <span className="font-sans">200000</span> هزار تومان
            </div>
          </div>
        </Link>

        {/* none value */}
        {/* <div className="h-full w-full flex items-center justify-center font-bold text-xl text-primryCream">
          سفارشی از شما موجود نمیباشد
        </div> */}
      </div>
    </div>
  );
}

export default Orders;
