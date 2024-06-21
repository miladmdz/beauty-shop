import React from "react";
import PageTitle from "../../../modules/BreadCrumbs/pageTitle";
import Link from "next/link";

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
              <th>تاریخ</th>
              <th>محصول</th>
              <th>امتیاز</th>
              <th>وضعیت</th>
              <th>مشاهده</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="w-full flex items-center justify-between py-5">
              <td>10223345</td>
              <td>1403/2/1</td>
              <td>
                <p className="line-clamp-1 w-[100px] text-sm">
                  ضد افتاب مخصوص ورساچه
                </p>
              </td>
              <td>5</td>
              <td
                className={`py-1 px-2 bg-red-600 rounded-md font-bold text-white`}
              >
                تایید نشده
              </td>
              <td className="py-1 px-2 bg-primryCream2 rounded-md font-bold text-white">
                <Link href={"/"}>بیشتر...</Link>
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
