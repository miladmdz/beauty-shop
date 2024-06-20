import React from "react";
import PageTitle from "../pageTitle";
import Link from "next/link";

function Details() {
  return (
    <div>
      <PageTitle title="تیکت ها" link="/" textlink="ارسال تیکت جدید" />
      {/* filter */}
      <div className="w-full flex items-center justify-between py-5">
        <div className="flex items-center gap-x-4">
          <select
            className="w-32 text-sm border-b-2 border-primryCream2 py-1"
            name=""
            id=""
          >
            <option value="all">همه</option>
            <option value="sended">فرستاده شده</option>
            <option value="recived">دریافتی</option>
          </select>
          <select
            className="w-32 text-sm border-b-2 border-primryCream2 py-1"
            name=""
            id=""
          >
            <option value="all">همه</option>
            <option value="open">باز</option>
            <option value="close">بسته</option>
            <option value="anwsered">پاسخ داده شده</option>
            <option value="finished">پایان یافته</option>
          </select>
          <select
            className="w-32 text-sm border-b-2 border-primryCream2 py-1"
            name=""
            id=""
          >
            <option value="date-anwser">تاریخ پاسخ</option>
            <option value="date-make">تاریخ ایجاد</option>
          </select>
        </div>
        <button className="py-2 px-5 rounded-md bg-primryCream2 text-white">
          اعمال
        </button>
      </div>
      {/* tickets */}
      <div className="w-full flex flex-col py-4 ">
        {/* ticket */}
        <Link
          href={"/"}
          className="w-full flex items-center justify-between py-7 px-2 bg-primryCream3 border-r-4 border-primryCream2 rounded-md"
        >
          {/* part right */}
          <div className="flex flex-col items-center justify-between gap-y-3">
            <div className="font-bold">درخواست کد تخفیف</div>
            <div className=" bg-white py-2 px-1.5 rounded-md font-bold">
              واحد مالی
            </div>
          </div>
          {/* part left */}
          <div className="flex flex-col items-center justify-between gap-y-3">
            <div className="font-bold">1403/2/2</div>
            <div className="py-2 px-1.5 rounded-md font-bold bg-red-800 text-white">
              پاسخ داده نشده
            </div>
            <div className="hidden">پاسخ داده نشده</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Details;
