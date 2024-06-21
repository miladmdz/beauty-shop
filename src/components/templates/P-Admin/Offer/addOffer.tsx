import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import React from "react";

function AddOffer() {
  return (
    <div>
      <PageTitle title="افزودن کد تخفیف جدید" />
      <form action="" className="flex flex-wrap items-center justify-between">
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label htmlFor="code" className="font-bold pt-4">
            شناسه تخفیف
          </label>
          <input
            id="code"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="لطفا شناسه تخفیف را وارد کنید"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label htmlFor="percent" className="font-bold pt-4">
            درصد تخفیف
          </label>
          <input
            id="percent"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="لطفا درصد تخفیف را وارد کنید"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label htmlFor="max-uses" className="font-bold pt-4">
            حداکثر استفاده
          </label>
          <input
            id="max-uses"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder=" حداکثر استفاده از کد تخفیف"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label htmlFor="select-box" className="font-bold pt-4">
            محصول
          </label>
          <select
            name=""
            id="select-box"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
          >
            <option value="-1">انتخاب محصول</option>
          </select>
        </div>
        <button className="w-40 h-10 mt-10 rounded-md flex justify-center items-center bg-primryCream2 text-white">
          افزودن
        </button>
      </form>
    </div>
  );
}

export default AddOffer;
