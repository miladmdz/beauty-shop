import React from "react";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ProductsType } from "@/components/Type/Products.type";

function SpecialBox({ id, title, shortDesc, bgColor, img }: ProductsType) {
  return (
    <div className="group cursor-pointer w-auto h-[400px] xs:w-auto xs:h-[450px] lg:h-[450px] xl:h-auto">
      <div>
        <Link href={"/"}>
          <img className="w-full h-[250px] xs:w-full sm:h-[280px]" src={img} alt="" />
        </Link>
      </div>
      <div
        className={
          shortDesc
            ? ` w-full h-[170px] ${bgColor} rounded-b-md`
            : `w-full h-[120px] ${bgColor} rounded-b-md`
        }
      >
        <div className="flex flex-col items-start justify-evenly w-full h-full pr-7">
          <h2 className="font-bold  text-xl">{title}</h2>
          <p className="text-sm text-primryGray group-hover:underline">
            {shortDesc}
          </p>
          <Link href="" className="flex items-end text-sm font-bold">
            مشاهده محصول
            <IoIosArrowRoundBack className="h-full flex items-center text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpecialBox;
