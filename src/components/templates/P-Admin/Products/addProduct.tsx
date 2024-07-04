"use client";
import React, { useState } from "react";
import PageTitle from "../../../modules/BreadCrumbs/pageTitle";

function AddProduct() {
  const [nameFa, setNamefa] = useState<string>("");
  const [nameEn, setNameEn] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [longDesc, setLongDesc] = useState<string>("");
  const [shortDesc, setShoertDesc] = useState<string>("");
  const [Compounds, setCompoundes] = useState<string>("");
  const [howToUse, setHowToUse] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [specific, setSpecific] = useState<string>("");
  const [smell, setSmell] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [color, setColors] = useState<string>("");
  const [img, setImg] = useState<any>({});

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    console.log(img);

    const formData = new FormData();
    formData.append("nameFa", nameFa);
    formData.append("nameEn", nameEn);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("shortDesc", shortDesc);
    formData.append("longDesc", longDesc);
    formData.append("Compounds", Compounds);
    formData.append("howToUse", howToUse);
    formData.append("weight", weight);
    formData.append("specific", specific);
    formData.append("smell", smell);
    formData.append("tags", tags);
    formData.append("color", color);
    formData.append("img", img);
    const res = await fetch("/api/product/add", {
      method: "POST",
      body: formData,
    });
    console.log(await res.json());
  };

  return (
    <div>
      <PageTitle title="افزودن محصول جدید" />
      <form action="" className="flex flex-wrap items-center justify-between">
        {/* fa name */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="name">
            (fa) نام محصول
          </label>
          <input
            value={nameFa}
            onChange={(e) => setNamefa(e.target.value)}
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            id="name"
            placeholder="لطفا نام محصول را وارد کنید"
          />
        </div>
        {/* brand */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="name">
            برند محصول
          </label>
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            id="name"
            placeholder="لطفا برند محصول را وارد کنید"
          />
        </div>
        {/* en name */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="name">
            (en) نام محصول
          </label>
          <input
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            id="name"
            placeholder="لطفا نام محصول را وارد کنید"
          />
        </div>
        {/* price */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="price">
            مبلغ محصول
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="لطفا مبلغ محصول را وارد کنید"
          />
        </div>
        {/* short desc */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="short-desc">
            توضیحات کوتاه
          </label>
          <input
            value={shortDesc}
            onChange={(e) => setShoertDesc(e.target.value)}
            id="short-desc"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="توضیحات کوتاه محصول"
          />
        </div>
        {/* long desc */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="long-desc">
            توضیحات بلند
          </label>
          <input
            value={longDesc}
            onChange={(e) => setLongDesc(e.target.value)}
            id="long-desc"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="توضیحات بلند محصول"
          />
        </div>
        {/* Compounds */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="long-desc">
            ترکیبات
          </label>
          <input
            value={Compounds}
            onChange={(e) => setCompoundes(e.target.value)}
            id="long-desc"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="ترکیبات"
          />
        </div>
        {/* how to use */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="long-desc">
            طریقه مصرف
          </label>
          <input
            value={howToUse}
            onChange={(e) => setHowToUse(e.target.value)}
            id="long-desc"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="طریقه مصرف"
          />
        </div>
        {/* weight */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="weight">
            وزن
          </label>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="وزن محصول"
          />
        </div>
        {/* specific */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="suggest">
            ویژگی های محصول:
          </label>
          <input
            value={specific}
            onChange={(e) => setSpecific(e.target.value)}
            id="suggest"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="مثال:دارای رنگدانه روغنی,دارای بافت نرم, دارای بو "
          />
        </div>
        {/* smell */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="smell">
            میزان بو
          </label>
          <input
            value={smell}
            onChange={(e) => setSmell(e.target.value)}
            id="smell"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="میزان بو"
          />
        </div>
        {/* tags */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="tags">
            تگ های محصول
          </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            id="tags"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="مثال:کرم,ضدافتاب,مراقبت از پوست"
          />
        </div>
        {/* colors */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="colors">
            رنگ های محصول
          </label>
          <input
            value={color}
            onChange={(e) => setColors(e.target.value)}
            id="colors"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="مثال:#3344,#ffff"
          />
        </div>
        {/* image */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="picture">
            تصویر محصول
          </label>
          <input
            onChange={(e) => setImg(e.target.files?.[0])}
            id="picture"
            className="w-full text-sm outline-none border-2 border-primryCream2 rounded-md px-1 py-1 marker:bg-red-500"
            type="file"
          />
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

export default AddProduct;
