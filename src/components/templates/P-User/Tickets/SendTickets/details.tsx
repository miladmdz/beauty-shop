import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import React from "react";
import { IoIosSend } from "react-icons/io";

function Details() {
  return (
    <div>
      <PageTitle
        title="ارسال تیکت جدید"
        link="/p-user/tickets"
        textlink="همه تیکت ها"
      />
      {/* add tickets */}
      <form action="" className="">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="departman">
              دپارتمان را انتخاب کنید:
            </label>
            <select
              name=""
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              id="departman"
            >
              <option value="-1">لطفا دپارتمان را انتخاب کنید</option>
            </select>
          </div>

          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="type-ticket">
              نوع تیکت را انتخاب کنید:
            </label>
            <select
              name=""
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              id="type-ticket"
            >
              <option value="-1">لطفا یک مورد را انتخاب کنید</option>
            </select>
          </div>

          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="title-ticket">
              عنوان تیکت را وارد کنید:
            </label>
            <input
              id="title-ticket"
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              type="text"
              placeholder="عنوان..."
            />
          </div>

          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="important">
              سطح اولویت تیکت را انتخاب کنید:
            </label>
            <select
              name=""
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              id="important"
            >
              <option value="-1">لطفا یک مورد را انتخاب کنید</option>
              <option value="3">بالا</option>
              <option value="2">متوسط</option>
              <option value="1">پایین</option>
            </select>
          </div>
        </div>

        <div className="w-full h-64 flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="text-ticket">
            محتوای تیکت را وارد نمایید:
          </label>
          <textarea
            name=""
            className="w-full h-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            id="text-ticket"
          ></textarea>
        </div>

        <div className="w-full flex flex-col gap-y-2 items-center bg-primryCream3 rounded-md mt-5 py-4">
          <p>حداکثر اندازه: 6 مگابایت</p>
          <p>فرمت‌های مجاز: jpg, png.jpeg, rar, zip</p>
          <input className="text-sm" type="file" name="" id="" />
        </div>

        <button className="w-40 h-10 mt-8 mb-10 rounded-md flex gap-x-2 justify-center items-center bg-primryCream2 text-white">
          <span className="text-xl">
            <IoIosSend />
          </span>
          ارسال تیکت
        </button>
      </form>
    </div>
  );
}

export default Details;
