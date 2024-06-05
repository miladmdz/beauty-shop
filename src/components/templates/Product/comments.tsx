import React from "react";
import { SlCalender } from "react-icons/sl";
import { CiClock2, CiStar } from "react-icons/ci";

function Comments() {
  return (
    <div className="flex h-fit flex-col-reverse md:flex-row mb-5 md:mb-0 justify-between">
      {/* comments */}
      <div className="h-52 md:h-72 mt-5 md:mt-0 overflow-y-auto">
        {/* comment */}
        <div>
          {/* info */}
          <div className="flex">
            <div>
              <img className="w-12 h-12" src="../images/etc/user.png" alt="" />
            </div>
            <div>
              <h3 className="text-lg text-primryCream font-bold">نگار مکاری</h3>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-2">
                  <SlCalender />
                  1402/10/17
                </div>
                -
                <div className="flex items-center gap-x-2">
                  <CiClock2 />
                  13:21
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="mt-3">
            <h3 className="font-semibold">
              خیلی رژلب خوبیه ماندگاری عالی داره و بافتش مخملیه به نسبت قیمتش
              انتخاب خوبی برای میکاپ آرتیست هاست
            </h3>
          </div>
        </div>
      </div>
      {/* create comment */}
      <div className="w-full md:w-[30%]">
        <h3 className="text-2xl text-center">فرم ارسال نظر</h3>
        <form action="" className="flex flex-col">
          <input className="outline-none" type="text" placeholder="عنوان نظر" />
          <textarea
            className="w-full outline-none mt-5 h-36"
            name=""
            id=""
            placeholder="متن نظر شما"
          ></textarea>
          <div className="flex">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
          <div className="text-center text-white mt-3 py-3 px-9 bg-primryCream2 rounded-xl">
            ارسال نظر
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comments;
