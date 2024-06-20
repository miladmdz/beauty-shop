import Link from "next/link";
import React from "react";
import PageTitle from "../pageTitle";

function Details() {
  return (
    <div>
      <PageTitle title="لیست کامنت ها" />
      {/* comments */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold">
              <th>شناسه</th>
              <th>کد</th>
              <th>مبلغ</th>
              <th>تاریخ شروع اعتبار</th>
              <th>تاریخ پایان اعتبار</th>
              <th>وضعیت انقضا</th>
              <th>کپی کد</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="w-full flex items-center justify-between py-5">
              <td>1</td>
              <td className="flex flex-wrap w-fit line-clamp-1">1125</td>
              <td>
               10,000
              </td>
              <td>1403/2/1</td>
              <td>1403/2/25</td>
              <td
                className={`py-1 px-2 bg-red-600 rounded-md font-bold text-white`}
              >
                پایان یافته
              </td>
              <td className="py-1 px-2 bg-primryCream2 rounded-md font-bold text-white">
                <Link href={"/"}>کپی</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
