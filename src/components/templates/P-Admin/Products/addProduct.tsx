"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "../../../modules/BreadCrumbs/pageTitle";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

function AddProduct() {
  const router = useRouter();

  const [nameFa, setNamefa] = useState<string>("");
  const [nameEn, setNameEn] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [longDesc, setLongDesc] = useState<string>("");
  const [shortDesc, setShoertDesc] = useState<string>("");
  const [Compounds, setCompoundes] = useState<string>("");
  const [howToUse, setHowToUse] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [countery, setCountery] = useState<string>("");
  const [box, setBox] = useState<string>("");
  const [expOpen, setExpOpen] = useState<string>("");
  const [expCompany, setExpCompany] = useState<string>("");
  const [specific, setSpecific] = useState<string>("");
  const [smell, setSmell] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [subTags, setSubTags] = useState<string[]>([]);
  const [color, setColors] = useState<string>("");
  const [img, setImg] = useState<any>({});

  const [departments, setDepartments] = useState<{}[]>([]);
  const [subDepartments, setSubDepartments] = useState<{}[]>([]);

  const [departmentsId, setDepartmentsId] = useState<string>("");
  const [subDepartmentsItem, setSubDepartmentsItem] = useState<{}[]>([]);

  useEffect(() => {
    const getDepartment = async () => {
      const res = await fetch("/api/product/department", {
        method: "GET",
      });
      const data = await res.json();
      setDepartments([...data]);
    };
    getDepartment();
  }, []);

  const setDepartmentIdHandler = async (id: string) => {
    setDepartmentsId(id);
    const res = await fetch(`/api/product/department/sub/${id}`);
    if (res.status === 200) {
      const data = await res.json();
      setSubDepartments([...data]);
    }
  };

  const selectOption = (Id: string) => {
    setSubDepartmentsItem((prev) => [
      ...prev,
      ...subDepartments.filter((item) => (item as { _id: string })._id === Id),
    ]);
    setTags(departmentsId);
    setSubTags((prev) => [...prev, Id]);
  };

  const removeSubHandler = (id: string) => {
    setSubDepartmentsItem((prev) =>
      prev.filter((item) => (item as { _id: string })._id !== id)
    );
    setSubTags((prev) => prev.filter((item) => item !== id));
  };

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    //validation

    if (
      nameFa.length == 0 ||
      nameEn.length == 0 ||
      brand.length == 0 ||
      price.length == 0 ||
      longDesc.length == 0 ||
      shortDesc.length == 0 ||
      Compounds.length == 0 ||
      howToUse.length == 0 ||
      weight.length == 0 ||
      countery.length == 0 ||
      box.length == 0 ||
      expOpen.length == 0 ||
      expCompany.length == 0 ||
      specific.length == 0 ||
      smell.length == 0 ||
      tags === "-1" ||
      subTags.length === 0 ||
      img.length == 0
    ) {
      return Swal.fire({
        icon: "warning",
        title: "کامل نبودن اطلاعات",
        text: "تمامی فیلد ها اجباری هستند برای پر کردن به جز فیلد مربوط به رنگ محصولات",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    } else {
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
      formData.append("department", tags);
      formData.append("subDepartment", subTags.join(","));
      formData.append("color", color);
      formData.append("img", img);
      formData.append("countery", countery);
      formData.append("box", box);
      formData.append("expOpen", expOpen);
      formData.append("expCompany", expCompany);
      const res = await fetch("/api/product/add-product", {
        method: "POST",
        body: formData,
      });
      if (res.status === 201) {
        setNamefa("");
        setNameEn("");
        setBrand("");
        setPrice("");
        setLongDesc("");
        setShoertDesc("");
        setCompoundes("");
        setHowToUse("");
        setWeight("");
        setSpecific("");
        setSmell("");
        setTags("");
        setColors("");
        setImg("");
        setDepartments([]);
        setSubDepartments([]);
        setSubDepartmentsItem([]);
        setDepartmentsId("");
        setCountery("");
        setBox("");
        setExpOpen("");
        setExpCompany("");
        Swal.fire({
          icon: "success",
          title: "محصول با موفقیت اضافه شد",
          showConfirmButton: true,
          confirmButtonText: "متوجه شدم",
        }).then((result) => {
          router.refresh();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "مشکل از سمت سرور ",
          showConfirmButton: true,
          confirmButtonText: "تلاش مجدد",
        });
      }
    }
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
          <textarea
            value={longDesc}
            onChange={(e) => setLongDesc(e.target.value)}
            id="long-desc"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
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
          <select
            onChange={(e) => setDepartmentIdHandler(e.target.value)}
            name=""
            id="tags"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
          >
            <option value="-1">یک گزینه را انتخاب کنید</option>
            {departments.map((item) => (
              <option
                key={(item as { _id: string })._id}
                value={(item as { _id: string })._id}
              >
                {(item as { title: string }).title}
              </option>
            ))}
          </select>
        </div>
        {/* sub tags */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="tags">
            تگ های زیر مجموعه محصول
          </label>
          <div className="w-full h-10 flex items-center justify-between">
            <select
              onChange={(e) => selectOption(e.target.value)}
              name=""
              id="tags"
              className="w-[49%] outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            >
              <option value="-1">یک گزینه را انتخاب کنید</option>
              {subDepartments.length > 0 &&
                subDepartments.map((item) => (
                  <option
                    key={(item as { _id: string })._id}
                    value={(item as { _id: string })._id}
                  >
                    {(item as { title: string }).title}
                  </option>
                ))}
            </select>
            <div className="w-[49%] flex flex-col gap-y-2 items-center overflow-y-scroll h-14 border-2 border-primryCream2 rounded-md px-1 py-1">
              {subDepartmentsItem.map((item) => (
                <div
                  className="w-full py-2 px-1 flex items-center justify-between bg-gray-400/50 rounded-md"
                  key={(item as { _id: string })._id}
                >
                  <p>{(item as { title: string }).title}</p>
                  <div
                    className="cursor-pointer hover:text-red-500 transition-all"
                    onClick={() =>
                      removeSubHandler((item as { _id: string })._id)
                    }
                  >
                    <IoClose />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
        {/* country */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="colors">
            کشور سازنده
          </label>
          <input
            value={countery}
            onChange={(e) => setCountery(e.target.value)}
            id="colors"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="کشور سازنده"
          />
        </div>
        {/* box */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="colors">
            نوع بسته بندی
          </label>
          <input
            value={box}
            onChange={(e) => setBox(e.target.value)}
            id="colors"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="نوع بسته بندی"
          />
        </div>
        {/* exp open  */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="colors">
            تاریخ انقضا بعد از باز کردن درب محصول
          </label>
          <input
            value={expOpen}
            onChange={(e) => setExpOpen(e.target.value)}
            id="colors"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="تاریخ انقضا بعد از باز کردن درب محصول"
          />
        </div>
        {/* exp company  */}
        <div className="w-[49%] flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="colors">
            تاریخ انقضا درج شده توسط کارخانه
          </label>
          <input
            value={expCompany}
            onChange={(e) => setExpCompany(e.target.value)}
            id="colors"
            className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            type="text"
            placeholder="تاریخ انقضا بعد از باز کردن درب محصول"
          />
        </div>
        {/* btn submit */}
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
