import React from "react";
import PageTitle from "../pageTitle";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";

function Details() {
  return (
    <div>
      <PageTitle title="جزئیات اکانت" />
      <form className="flex flex-col items-center py-10">
        <div className="grid grid-cols-2 grid-rows-3">

          <div className="w-[98%] flex flex-col items-start">
            <label htmlFor="username">نام کاربری</label>
            <input
              className="w-full py-1 outline-none border-2 border-primryCream2 rounded-md"
              type="text"
              name=""
              id="username"
            />
          </div>

          <div className="w-[98%] row-span-2 flex items-center justify-between">
            {/* part right */}
            <div className="w-[49%]">
              <img className="rounded-full border-2 border-primryCream2" src="../images/User/user.jpg" alt="" />
            </div>
            {/* part left */}
            <div className="flex flex-col gap-y-4 w-[49%]">
              <div className="relative w-full h-[80px] flex flex-col">
                <span className="absolute -top-[30px] -rotate-[40deg] left-0 bg-primryCream2 w-[50px] h-0.5 mt-1 rounded-md"></span>
                <span className="absolute -top-[20px] -rotate-[40deg] left-0 bg-primryCream2 w-[70px] h-0.5 mt-1 rounded-md"></span>
              </div>
              {/* change */}
              <div>
                <button className="w-full flex items-center justify-center gap-x-2 bg-primryCream2 text-white rounded-md py-2">
                  تغییر
                  <span>
                    <IoCloudUploadOutline />
                  </span>
                </button>
              </div>
              {/* delete */}
              <div>
                <button className="w-full flex items-center justify-center gap-x-2 bg-primryCream2 text-white rounded-md py-2">
                حذف
                <span>
                  <IoTrashOutline />
                </span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[98%] flex flex-col items-start">
            <label htmlFor="email">ایمیل</label>
            <input
              className="w-full py-1 outline-none border-2 border-primryCream2 rounded-md"
              type="text"
              name=""
              id="email"
            />
          </div>

          <div className="w-[98%] flex flex-col items-start">
            <label htmlFor="phone">شماره تماس</label>
            <input
              className="w-full py-1 outline-none border-2 border-primryCream2 rounded-md"
              type="text"
              name=""
              id="phone"
            />
          </div>

          <div className="w-[98%] flex items-start justify-between">
            <div className="w-[70%] flex flex-col items-start">
              <label htmlFor="password">رمز عبور</label>
              <input
                className="w-full py-1 outline-none border-2 border-primryCream2 rounded-md"
                type="text"
                name=""
                id="password"
              />
            </div>
            <button className="py-1.5 px-1 mt-5 rounded-md bg-primryCream2 text-white">
              تغییر رمز عبور
            </button>
          </div>

        </div>
        <button className="w-72 py-3  bg-primryCream2 rounded-md text-white font-bold text-2xl">
          ثبت تغییرات
        </button>
      </form>
    </div>
  );
}

export default Details;
