import React from "react";
import { ProductsType } from "@/components/Type/Products.type";
import Timer from "../Timer/Timer";

function OfferBox({
  id,
  title,
  bgColor,
  price,
  percent,
  timer,
  img,
}: ProductsType) {
  return (
    <div className="w-[120px] xs:w-[150px] sm:w-[180px] md:w-[150px] h-[350px] lg:w-[200px] xl:w-[250px] flex flex-col items-center border-primryCream2 bg-white border-[1px] rounded-lg">
      {/* img */}
      <div className="relative flex items-center w-28 xs:w-32 h-36 lg:w-48 lg:h-48">
        <img src={img} alt="" />
        {percent && (
          <span className="absolute flex items-center justify-center top-8 left-0 w-[52px] h-[52px] border border-black rounded-full">
            <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
              {percent}%
            </span>
          </span>
        )}
      </div>
      {/* desc */}
      <div className="flex w-28 xs:w-32 lg:w-[200px] h-32 flex-col items-center justify-between">
        {/* title */}
        <div className="text-xs xs:text-sm text-primryBlack line-clamp-1">
          {title}
        </div>
        {/* color */}
        <div className="flex items-center justify-center gap-x-1">
          {bgColor && bgColor.length > 0
            ? bgColor.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: `${color}` }}
                  className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full`}
                ></div>
              ))
            : ""}
        </div>
        {/* price */}
        <div
          className={`${
            !percent && "hidden"
          } flex items-center gap-x-3 text-sm`}
        >
          <div>
            {price && percent && (price * (percent / 100)).toLocaleString()}{" "}
            تومان
          </div>
          <div className="line-through text-gray-500">
            {price?.toLocaleString()} تومان
          </div>
        </div>
        <div
          className={`${
            percent && "hidden"
          } font-bold text-primryCream2 text-sm xs:text-base lg:text-lg`}
        >
          از {price?.toLocaleString()} تومان
        </div>
        {/* colornum */}
        <div className={`${percent && "hidden"}`}>
          {bgColor?.length ? (
            <div className="text-xs">در {bgColor.length} رنگ</div>
          ) : (
            ""
          )}
        </div>
        {timer && <Timer time={timer} />}
      </div>
    </div>
  );
}

export default OfferBox;
