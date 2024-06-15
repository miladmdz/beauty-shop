import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function Tickets() {
  return (
    <div className="w-[49%] mt-10">
      {/* top part */}
      <div className="flex items-center justify-between py-3 border-b border-black">
        <div className="font-bold">تیکت های اخیر</div>
        <Link href={"/"} className="flex items-center gap-x-2">
          <p className="font-bold">همه تیکت ها</p>
          <span>
            <FaArrowLeft className="text-2xl text-primryCream2" />
          </span>
        </Link>
      </div>
      {/* show tickets */}
      <div className="flex flex-col my-3 gap-y-2">
        <Link
          className="flex items-center justify-between p-4 rounded bg-primryCream2 text-black font-bold"
          href={"/"}
        >
          {/* title */}
          <div className="flex flex-col items-start gap-y-3">
            <div>خرابی موضعی</div>
            <div className="py-2 px-1 bg-white text-black rounded">
              واحد پشتیبانی
            </div>
          </div>
          {/* status */}
          <div className="flex flex-col items-start gap-y-3">
            <div>1403/2/4</div>
            <div>پاسخ داده</div>
          </div>
        </Link>
        <Link
          className="flex items-center justify-between p-4 rounded bg-primryCream2 text-black font-bold"
          href={"/"}
        >
          {/* title */}
          <div className="flex flex-col items-start gap-y-3">
            <div>خرابی موضعی</div>
            <div className="py-2 px-1 bg-white text-black rounded">
              واحد پشتیبانی
            </div>
          </div>
          {/* status */}
          <div className="flex flex-col items-start gap-y-3">
            <div>1403/2/4</div>
            <div>پاسخ داده</div>
          </div>
        </Link>
        <Link
          className="flex items-center justify-between p-4 rounded bg-primryCream2 text-black font-bold"
          href={"/"}
        >
          {/* title */}
          <div className="flex flex-col items-start gap-y-3">
            <div>خرابی موضعی</div>
            <div className="py-2 px-1 bg-white text-black rounded">
              واحد پشتیبانی
            </div>
          </div>
          {/* status */}
          <div className="flex flex-col items-start gap-y-3">
            <div>1403/2/4</div>
            <div>پاسخ داده</div>
          </div>
        </Link>
     
      </div>
    </div>
  );
}

export default Tickets;
