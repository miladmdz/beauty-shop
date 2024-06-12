import React from "react";
import { ProductsType } from "@/components/Type/Products.type";

function DiscountBox({
  id,
  title,
  bgColor,
  price,
  discount,
  img,
}: ProductsType) {
  return (
    <div className="w-[120px] xs:w-[150px] sm:w-[180px] md:w-[150px] h-[350px] lg:w-[200px] xl:w-[250px] flex flex-col items-center border-primryCream2 bg-white border-[1px] rounded-lg">
      {/* img */}
      <div className="relative flex items-center w-28 xs:w-32 h-36 lg:w-48 lg:h-48">
        <span
          className={`${
            discount
              ? "absolute top-2 -left-1 xs:-left-3 sm:-left-[25px] md:-left-3 xl:-left-7 bg-primryCream2 text-xs text-black py-1 px-1 rounded-r-md"
              : "hidden"
          }`}
        >
          تخفیف ویژه
        </span>
        <img src={img} alt="" />
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
        {/* price discount */}
        <div className={`${discount ? "flex items-center gap-x-6" : "hidden"}`}>
          <div className="line-through text-xxs xs:text-xs lg:text-lg">
            {price && price.toLocaleString()} تومان
          </div>
          <div className="bg-primryCream2 text-xs rounded-lg py-1 px-1">
            {discount}%
          </div>
        </div>
        {/* price */}
        <div
          className={`${
            discount && "hidden"
          } font-bold text-primryCream2 text-sm xs:text-base lg:text-lg`}
        >
          از {price?.toLocaleString()} تومان
        </div>
        <div
          className={`${
            !discount && "hidden"
          } font-bold text-primryCream2 text-sm xs:text-base lg:text-lg`}
        >
          از{" "}
          {price &&
            discount &&
            (price - price * (discount / 100)).toLocaleString()}
          تومان
        </div>
        {/* colornum */}
        <div>
          {bgColor && bgColor.length ? (
            <div className="text-xs">در {bgColor.length} رنگ</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DiscountBox;
