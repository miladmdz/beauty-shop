import React from "react";
import PageTitle from "../../../modules/BreadCrumbs/pageTitle";

function AddProduct() {
  return (
    <div>
      <PageTitle title="افزودن محصول جدید" />
      <form action="" className="flex flex-wrap items-center justify-between">
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="name">
            نام محصول
          </label>
          <input
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            id="name"
            placeholder="لطفا نام محصول را وارد کنید"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="price">
            مبلغ محصول
          </label>
          <input
            id="price"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="لطفا مبلغ محصول را وارد کنید"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="short-desc">
            توضیحات کوتاه
          </label>
          <input
            id="short-desc"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="توضیحات کوتاه محصول"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="long-desc">
            توضیحات بلند
          </label>
          <input
            id="long-desc"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="توضیحات بلند محصول"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="weight">
            وزن
          </label>
          <input
            id="weight"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="وزن محصول"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="suggest">
            مناسب برای:
          </label>
          <input
            id="suggest"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="مناسب برای..."
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="smell">
            میزان بو
          </label>
          <input
            id="smell"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="میزان بو"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="tags">
            تگ های محصول
          </label>
          <input
            id="tags"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="مثال:کرم,ضدافتاب,مراقبت از پوست"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="colors">
            رنگ های محصول
          </label>
          <input
            id="colors"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="مثال:#3344,#ffff"
          />
        </div>
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="picture">
            تصویر محصول
          </label>
          <input
            id="picture"
            className="w-full text-sm outline-none border-2 border-primryCream2 rounded-md px-1 py-1 marker:bg-red-500"
            type="file"
          />
        </div>
        <button className="w-40 h-10 mt-10 rounded-md flex justify-center items-center bg-primryCream2 text-white">
          افزودن
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
