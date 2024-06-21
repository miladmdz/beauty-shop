import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import React from "react";

function Details() {
  return (
    <div>
      <PageTitle title="لیست تیکت ها" />
      {/* Tickets */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
              <th>شناسه</th>
              <th>کاربر</th>
              <th>عنوان</th>
              <th>دپارتمان</th>
              <th>مشاهده</th>
              <th>پاسخ</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center">
              <td>1</td>
              <td className="line-clamp-1 w-[100px] text-sm">میلاد</td>
              <td>خرابی موضعی</td>
              <td>واحد پشتیبانی</td>
              <td>
                <button className="w-full bg-black text-white rounded-md">
                  مشاهده
                </button>
              </td>
              <td>
                <button className="w-full bg-primryCream text-white rounded-md">
                پاسخ
                </button>
              </td>
              <td>
                <button className="w-full bg-primryCream text-white rounded-md">
                بن
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
