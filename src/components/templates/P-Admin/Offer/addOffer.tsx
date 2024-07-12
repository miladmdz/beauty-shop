"use client";
import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import React, { useState } from "react";
import Swal from "sweetalert2";

function AddOffer() {
  const [typeOffer, setTypeOffer] = useState<string>("-1");
  const [codeOffer, setCodeOffer] = useState<string>("");
  const [codeProduct, setCodeProduct] = useState<string>("");
  const [percentOffer, setPercentOffer] = useState<string>("");
  const [maxUsage, setMaxUsage] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (typeOffer === "-1") {
      return Swal.fire({
        icon: "warning",
        title: "لطفا نوع تخفیف را مشخص کنید",
        showConfirmButton: true,
        confirmButtonText: "متوجه شدم",
      });
    } else if (typeOffer === "1") {
      if (!codeProduct || !percentOffer || !time) {
        return Swal.fire({
          icon: "warning",
          title: "لطفا کادر های موردنظر را پر کنید",
          showConfirmButton: true,
          confirmButtonText: "متوجه شدم",
        });
      }
    } else if (typeOffer === "2") {
      if (!codeProduct || !percentOffer) {
        return Swal.fire({
          icon: "warning",
          title: "لطفا کادر های مورد نطر را پر کنید",
          showConfirmButton: true,
          confirmButtonText: "متوجه شدم",
        });
      }
    } else {
      if (!codeOffer || !percentOffer || !maxUsage) {
        return Swal.fire({
          icon: "warning",
          title: "لطفا کادر های مورد نطر را پر کنید",
          showConfirmButton: true,
          confirmButtonText: "متوجه شدم",
        });
      }
    }

    let newOffer = {
      codeOffer,
      codeProduct,
      percent: percentOffer,
      maxUse: maxUsage,
      time,
    };
    const res = await fetch("/api/discount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOffer),
    });

    if (res.status === 201) {
      setTypeOffer("");
      setCodeOffer("");
      setCodeProduct("");
      setPercentOffer("");
      setMaxUsage("");
      setTime("");
      return Swal.fire({
        icon: "success",
        title: "با موفقیت کد اضافه شد",
        showConfirmButton: true,
        confirmButtonText: "متوجه شدم",
      });
    } else {
      return Swal.fire({
        icon: "error",
        title: "مشکل از سمت سرور",
        showConfirmButton: true,
        confirmButtonText: "متوجه شدم",
      });
    }
  };
  return (
    <div>
      <PageTitle title="افزودن کد تخفیف جدید" />
      <form action="" className="flex flex-wrap items-center justify-between">
        {/* code Offer */}
        <div
          className={`${
            typeOffer === "3" ? "" : "hidden"
          } w-[49%] flex flex-col items-start gap-y-2`}
        >
          <label htmlFor="code" className="font-bold pt-4">
            شناسه تخفیف
          </label>
          <input
            value={codeOffer}
            onChange={(e) => setCodeOffer(e.target.value)}
            id="code"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="لطفا شناسه تخفیف را وارد کنید"
          />
        </div>
        {/* code product */}
        <div
          className={`${
            typeOffer === "1" || typeOffer === "2" ? "" : "hidden"
          } w-[49%] flex flex-col items-start gap-y-2`}
        >
          <label htmlFor="code" className="font-bold pt-4">
            شناسه محصول
          </label>
          <input
            value={codeProduct}
            onChange={(e) => setCodeProduct(e.target.value)}
            id="code"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="لطفا شناسه محصول را وارد کنید"
          />
        </div>
        {/* percent */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label htmlFor="percent" className="font-bold pt-4">
            درصد تخفیف
          </label>
          <input
            value={percentOffer}
            onChange={(e) => setPercentOffer(e.target.value)}
            id="percent"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="لطفا درصد تخفیف را وارد کنید"
          />
        </div>
        {/* max use */}
        <div
          className={`${
            typeOffer === "3" ? "" : "hidden"
          } w-[49%] flex flex-col items-start gap-y-2`}
        >
          <label htmlFor="max-uses" className="font-bold pt-4">
            حداکثر استفاده
          </label>
          <input
            value={maxUsage}
            onChange={(e) => setMaxUsage(e.target.value)}
            id="max-uses"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder=" حداکثر استفاده از کد تخفیف"
          />
        </div>
        {/* time offer */}
        <div
          className={`${
            typeOffer === "1" ? "" : "hidden"
          } w-[49%] flex flex-col items-start gap-y-2`}
        >
          <label htmlFor="max-uses" className="font-bold pt-4">
            تایم انقضا (به ساعت وارد کنید)
          </label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id="max-uses"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder=" تایم انقضا "
          />
        </div>
        {/* typ Offer */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label htmlFor="select-box" className="font-bold pt-4">
            نوع تخفیف
          </label>
          <select
            name=""
            onChange={(e) => setTypeOffer(e.target.value)}
            value={typeOffer}
            id="select-box"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
          >
            <option value="-1">انتخاب محصول</option>
            <option value="1">فروش ویژه</option>
            <option value="2">تخفیف</option>
            <option value="3">کد تخفیف</option>
          </select>
        </div>
        <button
          onClick={(e) => submitHandler(e)}
          className="w-40 h-10 mt-10 rounded-md flex justify-center items-center bg-primryCream2 text-white"
        >
          افزودن
        </button>
      </form>
    </div>
  );
}

export default AddOffer;
