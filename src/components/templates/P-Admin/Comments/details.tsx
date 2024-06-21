import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import React from "react";

function Details() {
  return (
    <div>
      <PageTitle title="لیست کامنت ها" />
      {/* users */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
              <th>شناسه</th>
              <th>نام کاربر</th>
              <th>مشخصات کاربر</th>
              <th>متن کامنت</th>
              <th>رد / تایید</th>
              <th>حذف کامنت</th>
              <th>بن کاربر</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center">
              <td>1</td>
              <td className="line-clamp-1 w-[100px] text-sm">میلاد</td>
              <td>
                <button className="w-full bg-black text-white rounded-md">
                  بیشتر ...
                </button>
              </td>
              <td>
                <button className="w-full bg-black text-white rounded-md">
                 مشاهده
                </button>
              </td>
              <td>
                <button className="w-full bg-black text-white rounded-md">
                  رد
                </button>
              </td>
              <td>
                <button className="w-full bg-primryCream text-white rounded-md">
                  حذف
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
