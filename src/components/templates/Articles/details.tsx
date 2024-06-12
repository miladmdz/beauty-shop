import Link from "next/link";
import React from "react";

function Details() {
  return (
    <div className="container flex flex-wrap items-center justify-between">
      <Link href={"/"} className="flex flex-col items-start w-full xs:w-[50%] lg:w-[30%] my-5">
        <img
          className="w-full"
          src="./images/Articles/Capture7.jpg"
          alt=""
        />
        <p className="font-bold py-4 text-primryCream">
          مراقبت از پوست
        </p>
      </Link>
      <Link href={"/"} className="flex flex-col items-start w-full xs:w-[50%] lg:w-[30%] my-5">
        <img
          className="w-full"
          src="./images/Articles/Capture8.jpg"
          alt=""
        />
        <p className="font-bold py-4 text-primryCream">مراقبت از مو</p>
      </Link>
      <Link href={"/"} className="flex flex-col items-start w-full xs:w-[50%] lg:w-[30%] my-5">
        <img
          className="w-full"
          src="./images/Articles/Capture9.jpg"
          alt=""
        />
        <p className="font-bold py-4 text-primryCream">آرایشی</p>
      </Link>
      <Link href={"/"} className="flex flex-col items-start w-full xs:w-[50%] lg:w-[30%] my-5">
        <img
          className="w-full"
          src="./images/Articles/Capture10.jpg"
          alt=""
        />
        <p className="font-bold py-4 text-primryCream">عطرها</p>
      </Link>
    </div>
  );
}

export default Details;
