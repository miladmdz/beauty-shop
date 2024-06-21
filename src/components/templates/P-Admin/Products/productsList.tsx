import React from "react";
import PageTitle from "../../../modules/BreadCrumbs/pageTitle";

function ProductsList() {
  return (
    <div className="mt-10">
      <PageTitle title="لیست محصولات" />
      <div>
        {/* products */}
        <div>
          <table className="w-full flex flex-col">
            <thead className="w-full">
              <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
                <th>شناسه</th>
                <th>نام</th>
                <th>قیمت</th>
                <th>امتیاز</th>
                <th>مشاهده جزییات</th>
                <th>ویرایش</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center">
                <td>1</td>
                <td className="line-clamp-1 w-[100px] text-sm">ضدافتاب</td>
                <td>255,000</td>
                <td>5</td>
                <td>
                  <button className="w-full bg-black text-white rounded-md">
                    مشاهده جزییات
                  </button>
                </td>
                <td>
                  <button className="w-full bg-black text-white rounded-md">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button className="w-full bg-primryCream text-white rounded-md">
                    حذف
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
