import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import React from "react";

function Details() {
  return (
    <div>
      <PageTitle title="لیست کاربران" />
      {/* users */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>ویرایش</th>
              <th>تغییر سطح</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center">
              <td>1</td>
              <td className="line-clamp-1 w-[100px] text-sm">میلاد</td>
              <td>milad@gmail.com</td>
              <td>مدیر</td>
              <td>
                <button className="w-full bg-black text-white rounded-md">
                  ویرایش
                </button>
              </td>
              <td>
                <button className="w-full bg-black text-white rounded-md">
                  تغییر نقش
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
