import React from "react";
import CategoriBox from "./CategoriBox";

function Categories() {
  let categories = [
    {
      id: 1,
      title: "محصولات مراقبت از پوست",
      img: "./images/Categories/Capture1.jpg",
      link: "",
    },
    {
      id: 2,
      title: "محصولات مراقبت از مو",
      img: "./images/Categories/Capture2.jpg",
      link: "",
    },
    {
      id: 3,
      title: "لوازم ارایش",
      img: "./images/Categories/Capture3.jpg",
      link: "",
    },
    {
      id: 4,
      title: "عطر ادکلن",
      img: "./images/Categories/Capture4.jpg",
      link: "",
    },
  ];
  return (
    <>
      <div className="mt-8">
        <h2 className="text-center text-xl font-bold xs:text-3xl">خرید محصولات آرایشی</h2>
        <div className="relative container">
          <div className="flex items-center justify-center w-full twoLine mt-8">
            <h2 className="font-semibold w-fit text-sm xs:text-base text-center bg-white px-3 z-10">
              دسته بندی های کاج شاپ
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="grid mt-5 gap-x-2 grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4">
            {categories.map((item) => (
              <CategoriBox key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
