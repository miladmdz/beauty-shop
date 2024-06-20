import Link from "next/link";
import React from "react";

function Details() {
  return (
    <div className="w-full">
      <table className="w-full flex flex-col">
        <thead className="w-full">
          <tr className="w-full flex items-center justify-between font-bold">
            <th>شناسه محصول</th>
            <th>تاریخ ارسال</th>
            <th>محصول</th>
            <th>قیمت</th>
            <th>وضعیت ارسال</th>
            <th>مشاهده</th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="w-full flex items-center justify-between py-5">
            <td>10223345</td>
            <td>1403/2/1</td>
            <td className="flex flex-col items-center gap-y-2 justify-center">
              <img
                className="w-10 h-10"
                src="../images/NewsProducts/Capture1.jpg"
                alt=""
              />
              <p className="line-clamp-1 w-[100px] text-sm">
                ضد افتاب مخصوص ورساچه
              </p>
            </td>
            <td>143000</td>
            <td
              className={`py-1 px-2 bg-red-600 rounded-md font-bold text-white`}
            >
              ارسال نشده
            </td>
            <td className="py-1 px-2 bg-primryCream2 rounded-md font-bold text-white">
              <Link href={"/"}>بیشتر...</Link>
            </td>
          </tr>
          <tr className="w-full flex items-center justify-between py-5">
            <td>10223345</td>
            <td>1403/2/1</td>
            <td className="flex flex-col items-center gap-y-2 justify-center">
              <img
                className="w-10 h-10"
                src="../images/NewsProducts/Capture1.jpg"
                alt=""
              />
              <p className="line-clamp-1 w-[100px] text-sm">
                ضد افتاب مخصوص ورساچه
              </p>
            </td>
            <td>143000</td>
            <td
              className={`py-1 px-2 bg-red-600 rounded-md font-bold text-white`}
            >
              ارسال نشده
            </td>
            <td className="py-1 px-2 bg-primryCream2 rounded-md font-bold text-white">
              <Link href={"/"}>بیشتر...</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
