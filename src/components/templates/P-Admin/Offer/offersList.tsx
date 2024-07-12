import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import { OfferType } from "@/components/Type/Offers.type";
import React from "react";

type OffersListProps = {
  offers: OfferType[];
};

function OffersList({ offers }: OffersListProps) {
  console.log(offers);
  return (
    <div className="mt-10">
      <PageTitle title="لیست کد های تخفیف" />
      {/* offers */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
              <th>شناسه</th>
              <th>کد</th>
              <th>درصد</th>
              <th>حداکثر استفاده</th>
              <th>دفعات استفاده شده</th>
              <th>سازنده</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {offers.map((item, index) => (
              <tr
                key={item._id}
                className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center"
              >
                <td className="bg-primryGreen2 py-2 text-white">{index + 1}</td>
                <td className="line-clamp-1 w-[100px] text-sm">
                  {item.codeOffer}
                </td>
                <td>{item.percent}</td>
                <td>{item.maxUse}</td>
                <td>{item.uses}</td>
                <td>{item.user.firstName}</td>
                <td>
                  <button className="w-full bg-primryCream text-white rounded-md">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OffersList;
