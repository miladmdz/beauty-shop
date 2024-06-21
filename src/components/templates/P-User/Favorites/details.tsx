import React from "react";
import PageTitle from "../../../modules/BreadCrumbs/pageTitle";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

function Details() {
  return (
    <>
      <PageTitle title="لیست علاقه مندی ها" />
      <div className="w-full min-h-[400px] flex flex-wrap items-center justify-center gap-5">
        {/* product */}
        <div className="w-[250px] flex flex-col items-center justify-center">
          {/* img */}
          <Link href={"/"}>
            <img
              className="w-48"
              src="../images/NewsProducts/Capture1.jpg"
              alt=""
            />
          </Link>
          {/* detailes */}
          <div className="w-full">
            <h2 className="text-center line-clamp-1 w-full">ضد افتاب خاص</h2>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                290,000 تومان
              </div>
            </div>
          </div>
          {/* button */}
          <div className="w-full flex items-center justify-center bg-primryCream2 text-white font-bold rounded-md py-2 my-3">
            حذف محصول
          </div>
        </div>
        {/* empty */}
        {/* <div className="py-2 px-3 bg-primryCream2 font-bold text-3xl rounded-md text-white">
            محصولی وجود ندارد
        </div> */}
      </div>
    </>
  );
}

export default Details;
