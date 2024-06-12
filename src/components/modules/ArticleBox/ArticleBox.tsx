import React from "react";
import Link from "next/link";
import { ArticlesType } from "@/components/Type/Products.type";
import { SlCalender } from "react-icons/sl";
import { TbEyeExclamation } from "react-icons/tb";

function ArticleBox({
  id,
  img,
  title,
  desc,
  createdAt,
  views,
  link,
}: ArticlesType) {
  return (
    <div className="h-[350px]">
      {/* top part image */}
      <div className="flex justify-center">
        <Link href={link}>
          <img src={img} alt="" />
        </Link>
      </div>
      {/* bottom part desc */}

      <div className="flex flex-col h-[220px] lg:h-[180px]">
        <Link href={link} className="flex flex-col h-full justify-evenly">
          {/* title */}

          <p className="flex items-start font-bold text-sm lg:text-base h-10">{title}</p>
          {/* desc */}

          <p className="text-sm text-primryGray line-clamp-3">{desc}</p>
          {/* date and view */}

          <span className="flex items-center justify-between text-primryCream2">
            <span className="flex items-center justify-between">
              <p className="text-primryGray">{createdAt}</p>
              <SlCalender />
            </span>
            <span className="flex items-center justify-between gap-x-1">
              <p className="text-primryGray">{views}</p>
              <TbEyeExclamation className="text-2xl" />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ArticleBox;
