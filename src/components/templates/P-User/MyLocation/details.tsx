import React from "react";
import PageTitle from "../pageTitle";
import Link from "next/link";
import { GoNorthStar } from "react-icons/go";

function Details() {
  return (
    <div>
      <PageTitle title="ادرس های من" />
      {/* locations */}
      <table className="w-full flex flex-col">
        <thead className="w-full">
          <tr className="w-full flex items-center justify-between font-bold">
            <th>شناسه</th>
            <th>نام گیرنده</th>
            <th>استان</th>
            <th>شهر</th>
            <th>ادرس</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="w-full h-40 overflow-y-auto">
          <tr className="w-full flex items-center justify-between py-2 border border-gray-500/50 px-1 rounded-md child:w-10 child:flex child:flex-wrap">
            <td>1</td>
            <td>میلاد محمودزاده</td>
            <td>خراسان رضوی</td>
            <td>مشهد</td>
            <td>پیامبراعظم49 ثنایی 4 پلاک 71</td>
            <td
              className={`py-1 px-2 justify-center bg-red-600 rounded-md font-bold text-white`}
            >
              حذف
            </td>
          </tr>
          <tr className="w-full flex items-center justify-between py-2 border border-gray-500/50 px-1 rounded-md child:w-10 child:flex child:flex-wrap">
            <td>1</td>
            <td>میلاد محمودزاده</td>
            <td>خراسان رضوی</td>
            <td>مشهد</td>
            <td>پیامبراعظم49 ثنایی 4 پلاک 71</td>
            <td
              className={`py-1 px-2 justify-center bg-red-600 rounded-md font-bold text-white`}
            >
              حذف
            </td>
          </tr>
        </tbody>
      </table>
      {/* add new location */}
      <div>
        <div className="text-xl font-bold py-10">اضافه کردن ادرس جدید:</div>
        <div>
          <div className="grid grid-cols-3 gap-x-2 grid-rows-1">
            <div className="flex flex-col gap-y-1 border border-gray-500/50 p-1 rounded-md">
              <label
                className="flex items-center gap-x-2 text-primryGray text-xs"
                htmlFor="name-location"
              >
                نام آدرس
                <span className="text-red-500 text-xxs">
                  <GoNorthStar />
                </span>
              </label>
              <select className="outline-none" name="" id="name-location">
                <option value="">خانه</option>
                <option value="">محل کار</option>
                <option value="">غیره</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1 border border-gray-500/50 p-1 rounded-md">
              <label
                className="flex items-center gap-x-2 text-primryGray text-xs"
                htmlFor="fname-reciver"
              >
                نام گیرنده
                <span className="text-red-500 text-xxs">
                  <GoNorthStar />
                </span>
              </label>
              <input className="outline-none" type="text" id="fname-reciver" />
            </div>

            <div className="flex flex-col gap-y-1 border border-gray-500/50 p-1 rounded-md">
              <label
                className="flex items-center gap-x-2 text-primryGray text-xs"
                htmlFor="lname-reciver"
              >
                نام خانوادگی گیرنده
                <span className="text-red-500 text-xxs">
                  <GoNorthStar />
                </span>
              </label>
              <input className="outline-none" type="text" id="lname-reciver" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-2 grid-rows-1 py-2">
            <div className="flex flex-col gap-y-1 border border-gray-500/50 p-1 rounded-md">
              <label
                className="flex items-center gap-x-2 text-primryGray text-xs"
                htmlFor="phone-reciver"
              >
                شماره گیرنده
                <span className="text-red-500 text-xxs">
                  <GoNorthStar />
                </span>
              </label>
              <input className="outline-none" type="text" id="phone-reciver" />
            </div>

            <div className="flex flex-col gap-y-1 border border-gray-500/50 p-1 rounded-md">
              <label
                className="flex items-center gap-x-2 text-primryGray text-xs"
                htmlFor="State"
              >
                استان
                <span className="text-red-500 text-xxs">
                  <GoNorthStar />
                </span>
              </label>
              <select className="outline-none" name="" id="State">
                <option value="">انتخاب استان</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1 border border-gray-500/50 p-1 rounded-md">
              <label
                className="flex items-center gap-x-2 text-primryGray text-xs"
                htmlFor="city"
              >
                نام شهر
                <span className="text-red-500 text-xxs">
                  <GoNorthStar />
                </span>
              </label>
              <select className="outline-none" name="" id="city">
                <option value="">انتخاب شهر</option>
              </select>
            </div>
          </div>

          <div className="grid grid-rows-1 border border-gray-500/50 rounded-md">
            <label
              className="flex items-center gap-x-2 text-primryGray text-xs p-2"
              htmlFor="post-address"
            >
              نشانی پستی
              <span className="text-red-500 text-xxs">
                <GoNorthStar />
              </span>
            </label>
            <textarea
              className="outline-none p-2"
              name=""
              id="post-address"
            ></textarea>
          </div>
          <p className="text-xxs text-red-500 py-2">نام - خیابان - نام کوچه - پلاک - طبقه</p>
          <div className="grid grid-rows-1 border border-gray-500/50 rounded-md">
            <label
              className="flex items-center gap-x-2 text-primryGray text-xs p-2"
              htmlFor="post-code"
            >
              کد پستی
            </label>
            <input
              className="outline-none p-2"
              name=""
              id="post-code"
              type="text"
            />
          </div>
          <p className="text-xxs py-2">کد پستی باید ۱۰ رقم و بدون خط تیره باشد</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
